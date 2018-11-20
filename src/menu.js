import css from "./css";

 /**
 * What does this class do.. lore  ipisu
 */
class SimpleDropdown {
   
    hideMenu() {
        this.submenus.forEach(function(el) {
            el.style.display = "none"
        })
        clearInterval(this.interVal)
    }
    
    hasChild( element, name ) {
        for(let i = 0; i < element.children.length; i++) {
            if(element.children[i].nodeName === name) {
                return element.children[i];
                break;
            }
        }
        return false;
    }
    
    makeAllVisibleInPath(element) {
    
        this.submenus.forEach(function (el) {
            if(el !== element) {
                el.style.display = "none"
            }
        })  
    
        let ell = element;
    
        while(ell !== this.menu) {
            ell.style.display = "block"
            ell = ell.parentElement;
            if(ell !== this.menu)  {
                ell.style.display = "block"
            }
        }
    }


    initmenu(parent) {
        const children = parent.children
        
            for(let i = 0; i < children.length; i++) {
        
                let ul = this.hasChild(children[i], "UL")
                if(ul) {
                    children[i].classList.add("has-sub")
                    this.submenus.push(ul)
                    this.initmenu(ul)
                }
            }
     }
    

         addListeners() {
    
            let that = this;
       
         
             this.menu.addEventListener("mouseover", e=> {
                 let element = e.target;
                 if(element.nodeName === "A") {
                     element = element.parentElement
                 }
       
             
                 if(that.interVal) {
                     clearInterval(that.interVal);
                 }
             
               
                 if(element.nodeName === "LI") {
                     if(that.hasChild(element, "UL")) {
                         element = that.hasChild(element, "UL");
                     } 
                     that.makeAllVisibleInPath(element)   
                 }
             
             
             }, {useCapture:false});
             
             this.menu.addEventListener("mouseout",  e => {
                 window.out = true;
             
                 that.interVal = setInterval(this.hideMenu.bind(this), 100)
             
             
             });
         }

    constructor(menuelement) {
        this.submenus = []
        this.menu = menuelement;
        this.menucass = "menu_simple_" + Math.ceil((Math.random()*1000))
        this.menu.classList.add(this.menucass)
        this.initmenu(this.menu)
        document.write(`<style type='text/css'>${css(this.menucass )}</style>`);
        this.addListeners();
    }
}

export default function fn (el) {
    return new SimpleDropdown(el)
}
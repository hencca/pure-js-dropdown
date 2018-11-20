export default function css(name) {

    const cssString = `.${name} {
        position: relative;
        display: flex;
        max-width: 700px;
     } 
    
      .${name} > li {
             flex: 1;
             border: 1px solid white;
      }
    
       .${name} > li a {
           color:black;
           text-decoration: none;
           padding: 5px;
           display: block;
           border:1px solid;
           background-color:white;
         
       }
    
           .${name} li.has-sub > a:after {
            content: "►";
            float:right;
    
        } 
    
    
     .${name}  ul {
         display: none;
         margin-left: 0;
         padding: 0;
         width: 200px;
         background-color: white;
    
         border: 1px solid;
         position: absolute;
        
     }
    
      .${name}  li {
        list-style: none;
      }
    
      .${name}  li.has-sub {
             position: relative
      }
    
    
    
     .${name}  ul ul {
         left: 100%;
         top:0;
     }
    `

    return cssString;
}

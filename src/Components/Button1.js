 import React from 'react'
 
 function Button1({label,backgroundColor,color,isRounded,disabled,handleclick}) {
  
   const classList = [
    'button',
    isRounded ? 'rounded' : null
  ];

   return (
     <button type="button" className="button1"
     className={classList.join(' ')}
     disabled = {disabled}
     style = {{backgroundColor, color} }
     onClick={handleclick} >
       {label}
     </button>
   )
 }
 
 export default Button1
 
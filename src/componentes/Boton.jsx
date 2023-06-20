import React from "react";
import '../stylesheets/Boton.css'

const Boton = (props)=> {
   return (
      <button 
         className={`boton ${props.type ? props.type : ''}`.trimEnd()}
         onClick={ ()=> props.clickEvent(props.children) }>
         {props.children}
      </button>
   );
};

export default Boton;
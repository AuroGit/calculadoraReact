import React from "react";
import '../stylesheets/Display.css'

const Display = ({ valor })=> {
   return (
      <div id='display'>
         { valor }
      </div>
   )
};

export default Display;
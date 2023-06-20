import React from "react";
import Display from "./Display";
import Boton from "./Boton";
import '../stylesheets/Calculadora.css';
import { useState } from "react";
import { evaluate } from "mathjs";

const Calculadora = ()=> {
   const [input, setInput] = useState('');
   const addInput = (btnInput)=> {
      if (input !== 'Error' && input !== 'Infinito' && input !== 'No Existe') {
         setInput(input + btnInput);
      }
   };
   const deleteLast = ()=> {
      if (input !== 'Error' && input !== 'Infinito' && input !== 'No Existe') {
         setInput(input.slice(0, -1));
      }
   };
   const clearDisplay = ()=> { setInput(''); colorSwitch('#252525'); };
   const solve = ()=> {
      try {
         if (input) {
            let res = evaluate(input).toString();
            if (isNaN(res)) {
               res = 'No existe';
               colorSwitch('orangered');
            }
            else if (res.toLowerCase() === 'infinity') {
               res = 'Infinito';
               colorSwitch('orangered');
            } else colorSwitch();
            setInput(res);
         }
      } catch (error) {
         setInput('Error');
         colorSwitch('red');
      }
   };
   const colorSwitch = (color)=> {
      const app = document.querySelector('.App');
      if (color) {
         app.setAttribute('style', `--rgb: ${color};`);
         return;
      } else {
         let color = '#' 
            + Math.floor(Math.random()*255).toString('16')
            + Math.floor(Math.random()*255).toString('16')
            + Math.floor(Math.random()*255).toString('16');
         app.setAttribute('style', `--rgb: ${color};`);
      }
   }

   return (
      <div id='calculadora'>
         <Display valor={ input }/>

         <div className='botones'>
            <Boton clickEvent={ addInput }>1</Boton>
            <Boton clickEvent={ addInput }>2</Boton>
            <Boton clickEvent={ addInput }>3</Boton>
            <Boton clickEvent={ addInput } type='operator'>+</Boton>
            <Boton clickEvent={ addInput }>4</Boton>
            <Boton clickEvent={ addInput }>5</Boton>
            <Boton clickEvent={ addInput }>6</Boton>
            <Boton clickEvent={ addInput } type='operator'>-</Boton>
            <Boton clickEvent={ addInput }>7</Boton>
            <Boton clickEvent={ addInput }>8</Boton>
            <Boton clickEvent={ addInput }>9</Boton>
            <Boton clickEvent={ addInput } type='operator'>*</Boton>
            <Boton clickEvent={ deleteLast } type='delete'>Del</Boton>
            <Boton clickEvent={ addInput }>0</Boton>
            <Boton clickEvent={ addInput }>.</Boton>
            <Boton clickEvent={ addInput } type='operator'>/</Boton>
            <Boton clickEvent={ solve } type='equals'>=</Boton>
            <Boton clickEvent={ clearDisplay } type='clear'>AC</Boton>
         </div>
      </div>
   )
};

export default Calculadora;
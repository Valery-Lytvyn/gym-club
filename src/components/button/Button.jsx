import React from 'react';
import './button.scss';

function Button({ className, text }) {
   return (
      <button className={`button px-3 py-2 ${className} `}>
         {text}</button>
   )
}

export default Button
import React from 'react';
import './navBarList.scss';

function NavBarList() {
   const navBarData = ['Home', 'Programs', 'Why us', 'Plans', 'Reviews']
   return (
      <ul className='navBarList m-0 py-2 ms-4' >
         {navBarData.map(item => (
            <li className='navItem px-3' key={item}>
               <a href={`#${item}`}>
                  {item}
               </a>
            </li>
         ))}
      </ul>
   )
}

export default NavBarList
import React from 'react';
import logo from '../../../assets/images/logo.png';
import './navBar.scss';
import NavBarList from './navBarList/NavBarList';

function NavBar() {

   return (
      <div className='navBar'>
         <div className="logo">
            <img src={logo} alt="logo" />
         </div>
         <NavBarList />
      </div>
   )
}

export default NavBar
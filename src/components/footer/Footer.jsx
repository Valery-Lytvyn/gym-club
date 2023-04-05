import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, } from 'react-icons/fa';
import logotype from '../../assets/images/logo.png';
import './footer.scss';

function Footer() {
   const socialMediaIcons = [
      <AiOutlineGithub />,
      <FaFacebookF />,
      <FaInstagram />,
   ];

   return (
      <section className='footer py-5' id='footer'>
         <div className="socialMediaIcons">
            {socialMediaIcons.map((icon, index) => (
               <div className="icon" key={index}>{icon}</div>
            ))}
         </div>
         <div className="logo py-5">
            <img src={logotype} alt="logo" />
         </div>
      </section>
   )
}

export default Footer
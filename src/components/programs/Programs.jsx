import React from 'react';
import './programs.scss';
import { CgGym } from 'react-icons/cg';
import { BsFire, BsHeartPulse } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';
import { MdSportsMartialArts } from 'react-icons/md';


function Programs() {

   const programsData = [
      {
         icon: <CgGym />,
         title: 'Strength Training',
         descript: 'In this program you will learn how to improve your strength through many exercises.'
      },

      {
         icon: < MdSportsMartialArts />,
         title: 'Cardio Training',
         descript: 'In this program, you will learn to perform consistent movements in a range of 20 to 30 minutes.',

      },
      {
         icon: < BsFire />,
         title: 'Fat Burning',
         descript: 'This program is suitable for those who want to lose fat and lose weight.'
      },

      {
         icon: < BsHeartPulse />,
         title: 'Health Fitness',
         descript: 'This program is designed for those who only work out to shape their body, not bodybuilding.'
      }
   ]
   return (
      <section className='programs px-4' id='programs'>
         <h2 className='programsTitle p-5'>
            <span className='strokeText'>explore our</span> programs <span className='strokeText'> to shape you</span>
         </h2>
         <div className='row'>
            {programsData.map(item => (
               <div className='col-3 p-2'>
                  <div className='programCard p-3'>
                     <div className='cardIcon'>{item.icon}</div>
                     <div className='cardBody'>
                        <div className='cardTitle py-3'>{item.title}</div>
                        <div className='cardDescription'>{item.descript}</div>
                     </div>
                     <div className='cardLink'>
                        <span>Join Now</span>
                        <span><FiArrowRight /></span>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}

export default Programs
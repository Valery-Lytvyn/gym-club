import React from 'react';
import './plans.scss';
import { TbHeartPlus } from 'react-icons/tb';
import { FaCrown } from 'react-icons/fa';
import { CgGym } from 'react-icons/cg';
import { BsCheck2Circle } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';
import Button from '../button/Button';

function Plans() {

   const plansData = [
      {
         icon: <TbHeartPlus />,
         title: 'basic plan',
         price: '$ 25',
         planList: [
            '2 hours of exercises',
            'Free consultations of trainers',
            'Access to the community'
         ]
      },
      {
         icon: <FaCrown />,
         title: 'premium plan',
         price: '$ 45',
         planList: [
            '8 hours of exercises',
            'Consultation of a private trainer',
            'Free fitness products'
         ]
      },
      {
         icon: <CgGym />,
         title: 'standard plan',
         price: '$ 30',
         planList: [
            '5 hours of exercises',
            'Free consultation of trainers',
            'Access to the minibar'
         ]
      },
   ]
   return (
      <section className='plans py-5' id='plans'>
         <div className='plansTitle py-5'>
            <span className='strokeText' >ready to go </span> your journey
            <span className='strokeText' >now with us </span>
         </div>
         <div className='container'>
            <div className='row align-item-center'>
               {plansData.map(item => (
                  <div className='col-4 d-flex align-items-center justify-content-center' key={item.title}>
                     <div className='planCardWrap w-100'>
                        <div className='planCard p-3'>
                           <div className='planIcon'>{item.icon}</div>
                           <div className='planTitle'>{item.title}</div>
                           <div className='planPrice'>{item.price}</div>
                           <ul className='planList p-0 m-0'>
                              {item.planList.map((item, index) => (
                                 <li className='planListItem' key={index}>
                                    <span className='planMark pe-3'><BsCheck2Circle /></span>
                                    {item}
                                 </li>
                              ))}
                           </ul>
                           <div className='descriptionLink py-2'>View more benefits
                              <span className='linkArrow ps-2'><FiArrowRight /></span>
                           </div>
                           <Button className='joinBtn' text='Join now' />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Plans
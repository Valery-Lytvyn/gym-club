import React from 'react';
import './reasons.scss';
import reasonImg_1 from '../../assets/images/reasons_img_1.png';
import reasonImg_2 from '../../assets/images/reasons_img_2.png';
import reasonImg_3 from '../../assets/images/reasons_img_3.png';
import reasonImg_4 from '../../assets/images/reasons_img_4.png';
import { BsCheck2Circle } from 'react-icons/bs';
import { SiNewbalance, SiAdidas, SiNike } from 'react-icons/si';


function Reasons() {
   const reasonsList = [
      "expert trainers",
      "train smarter and faster than before",
      "free program for new members",
      "trusted partners"
   ]

   const partnersLogo = [
      <SiNewbalance />,
      <SiAdidas />,
      <SiNike />
   ]
   return (
      <section className='reasons'>
         <div className="row p-0 ps-4 py-5">
            <div className="col-6 ">
               <div className="row">
                  <div className="col-4 p-0 m-0">
                     <img className='w-100 h-100 p-2 pe-0' src={reasonImg_1} alt="athlete" />
                  </div>
                  <div className="col-8 m-0 p-0">
                     <div className="row m-0 p-0 h-100">
                        <div className="col-12"><img className='w-100 h-100 p-2' src={reasonImg_2} alt="athlete" /></div>
                        <div className="col-6 "><img className='w-100 h-100 p-2 pe-0' src={reasonImg_3} alt="athlete" /></div>
                        <div className="col-6 "><img className='w-100 h-100 p-2 ps-0' src={reasonImg_4} alt="athlete" /></div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-6">
               <div className="reasonsDescription h-100">
                  <div className="reasonsSubTitle">
                     some reasons
                  </div>
                  <div className="reasonsTitle">
                     <span className='strokeText' >WHY </span> CHOOSE US?
                  </div>
                  {reasonsList.map((item, index) => (
                     <li className='reasonItem py-2' key={index}>
                        <span className='reasonMark pe-3'><BsCheck2Circle /></span>
                        {item}
                     </li>
                  ))}
                  <div className="partners py-2">
                     our partners
                  </div>
                  <div className="partnersLogo">
                     {partnersLogo.map((item, index) => (
                        <span className='sportLogo pe-4' key={index}>
                           {item}
                        </span>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Reasons
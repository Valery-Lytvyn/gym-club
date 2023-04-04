import React from 'react';
import NavBar from './navBar/NavBar';
import Button from '../button/Button';
import { BsHeartFill } from 'react-icons/bs';
import { GoGraph } from 'react-icons/go';
import './header.scss';
import athleteImg from '../../assets/images/hero_image.png';
import athleteBgImg from '../../assets/images/hero_image_back.png';

function Header() {
   const statisticsData = [
      {
         title: 'expert trainers',
         quanty: '+140'
      },
      {
         title: 'members joined',
         quanty: '+978'
      },
      {
         title: 'fitness programs',
         quanty: '+50'
      }
   ]
   return (
      <div className='header'>
         <div className='row  p-0 m-0'>
            <div className='col-9 ps-4 pt-3'>
               <div className='col-12 pb-4'>
                  <NavBar />
               </div>
               <div className='col-12 my-5'>
                  <div className='animatedLabel'>
                     <div className='labelMark'></div>
                     <span className='labelText p-3'> the best fitness club in town</span>
                  </div>
               </div>
               <div className='col-6'>
                  <div className='headerTitle'>
                     <h1>
                        <span className='strokeText'>shape </span>
                        your ideal body</h1>
                  </div>
               </div>
               <div className='col-12 py-3'>
                  <div className='headerSubtitle'>
                     Here we help you shape and build your ideal body and live life to the fullest
                  </div>
               </div>
               <div className='col-12 d-flex'>
                  <div className='statisticsTable'>
                     {statisticsData.map(item => (
                        <div className='statisticCell' key={item.title}>
                           <span className='statisticQuantity'>{item.quanty}</span>
                           <span className='statisticTitle'>{item.title}</span>
                        </div>
                     ))
                     }
                  </div>
               </div>
               <div className='col-12 py-4'>
                  <div className='btnWrap'>
                     <Button className='startedBtn' text='Get Started' />
                     <Button className='moreBtn' text='Learn More' />
                  </div>
               </div>

            </div>
            <div className='col-3 p-0 m-0'>
               <div className='orangePart'>
                  <div className='col-12 pt-3'>
                     <div className='joinBtnWrap pe-4'>
                        <Button className='joinBtn' text='Join Now' />
                     </div>
                  </div>
                  <div className='col-12 d-flex justify-content-end p-5'>
                     <div className='heartRateWrap p-3'>
                        <div className='heart'>
                           <BsHeartFill />
                        </div>
                        <span className='heartRateText'>Heart Rate</span>
                        <span className='heartRateValue'>116 bpm</span>
                     </div>
                  </div>
                  <div className='athleteImg'>
                     <img src={athleteImg} alt='athlete' />
                  </div>
                  <div className='athleteBgImg'>
                     <img src={athleteBgImg} alt='athlete background' />
                  </div>
                  <div className='caloriesCell ms-4 px-4'>
                     <div className='graph'>
                        <GoGraph />
                     </div>
                     <div className='caloriesDescription'>
                        <div className='caloriesTitle'>
                           Calories burned
                        </div>
                        <div className='caloriesQuantity'>
                           220 kcal
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Header
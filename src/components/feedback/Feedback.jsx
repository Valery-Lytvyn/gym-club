import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import './feedback.scss';
import authorPhoto_1 from '../../assets/images/author_photo_1.webp';
import authorPhoto_2 from '../../assets/images/author_photo_2.webp';
import authorPhoto_3 from '../../assets/images/author_photo_3.webp';

function Feedback() {
   const feedbackData = [
      {
         response: 'I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!',
         authorName: 'MATHEW HENDRICKSON',
         craft: 'entrepreneur',
         photo: authorPhoto_1,
      },
      {
         response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint',
         authorName: 'JOHN KEVIN',
         craft: 'coach',
         photo: authorPhoto_2,
      },
      {
         response: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem',
         authorName: 'FRANKLIN',
         craft: 'client',
         photo: authorPhoto_3,
      },
   ]
   const [currentIndex, setCurrentIndex] = useState(0);
   const maxIndex = feedbackData.length - 1;

   const decrementIndex = () => {
      if (currentIndex === 0) {
         setCurrentIndex(maxIndex)
      } else {
         setCurrentIndex(currentIndex - 1)
      }
   }

   const incrementIndex = () => {
      if (currentIndex === maxIndex) {
         setCurrentIndex(0)
      } else {
         setCurrentIndex(currentIndex + 1)
      }
   }


   return (
      <section className='feedback' id='feedback'>
         <div className='row p-4'>
            <div className='col-6'>
               <div className='feedbackDescription'>
                  <div className='feedbackSubTitle'>
                     feedback
                  </div>
                  <div className='feedbackTitle'>
                     <span className='strokeText' >WHAT THEY</span>
                     <div>SAY ABOUT US</div>
                  </div>
                  <p className='feedbackText'>{feedbackData[currentIndex].response}</p>
                  <div className='feedbackAuthor'>
                     <span className='authorName'>{feedbackData[currentIndex].authorName}</span>
                     <span>-</span>
                     <span className='authorCraft'>{feedbackData[currentIndex].craft}</span>
                  </div>
               </div>
            </div>
            <div className='col-2'>
               <div className='arrows pb-4'
                  onClick={decrementIndex}>
                  <div className='arrowPrev'>
                     <FiArrowLeft />
                  </div>
                  <div className='arrowNext'
                     onClick={incrementIndex}>
                     <FiArrowRight />
                  </div>
               </div>
            </div>
            <div className='col-4'>
               <div className='authorPhotoWrap'>
                  <div className='backgroundPhoto'>
                  </div>
                  <div className='authorPhoto'>
                     <img src={feedbackData[currentIndex].photo} alt='response author' />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Feedback
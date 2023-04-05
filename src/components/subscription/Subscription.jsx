import React, { useRef } from 'react';
import Button from '../button/Button';
import emailjs from '@emailjs/browser';
import './subscription.scss';

function Subscription() {
   const formRef = useRef()
   const subscription = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_c4nsjbk', 'template_cjroexq', formRef.current, 'vhZJkv-_dXV-apvNU')
         .then((result) => {
            alert('thanks for subscribing');
         }, (error) => {
            console.log(error.text);
         });
      formRef.current.email.value = '';
   }
   return (
      <section className='subscription' id='subscription'>
         <div className='subscriptionBorder my-5 ms-3'></div>
         <div className='row px-4 py-5'>
            <div className='col-4'>
               <h2 className='subscriptionTitle'>
                  <span className='strokeText'>ready to</span> improve
                  <span className='strokeText'>your body</span> with us ?
               </h2>
            </div>
            <div className='col-3'>
               <div className='subscriptionFormWrap'>
                  <form ref={formRef} onSubmit={subscription} className='subscriptionForm'>
                     <input type='email' name='email'
                        placeholder='enter your email address here'
                        className='subscriptionInput' />
                     <Button className='subscriptionBtn' text='Join now' />
                  </form>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Subscription
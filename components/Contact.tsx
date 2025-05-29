"use client";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = () => {
    //e.preventDefault();
    if (!form.current) {
        console.error('Form reference is null');
        return;
      }
   
    emailjs
      .sendForm('service_tldv0ba', 'template_n314jm9', form.current!, {
        publicKey: 'ZYsFQxAoL-y-JRcX4',
        
        limitRate:{
            throttle: 100000, // can't send more than one email per 100s
          }
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email Sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    
    <section className="px-8 py-16 ">
      <div className="container mx-auto mb-20 text-center">
        <div className="mb-4 text-4xl font-bold text-teal-500">
          Contact Me
        </div>
        <div className="mx-auto w-full lg:w-5/12 text-zinc-100 mt-4 text-xl">
          Ready to get started? Feel free to reach out to me through the contact form,
          and lets embark on a journey of innovation.
        </div>
      </div>
      <div>
        <div className="container mx-auto border border-gray-200 rounded-lg shadow-md p-5">
          <div className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900 text-white">
              <h4 className="mb-2">Contact Information</h4>
              <p className="mx-auto mb-8 text-base text-gray-500">
                Fill up the form and I will get back to you within 24
                hours.
              </p>
              <div className="flex gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.716 3 6V5z" />
                </svg>
                <h6 className="mb-2">+254(799) 554 223</h6>
              </div>
              <div className="flex my-2 gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h6 className="mb-2">moonyoin@gmail.com</h6>
              </div>
              <div className="flex mb-10 gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110-4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 100-4v3a2 2 0 00-2 2v3a2 2 0 01-2 2H5z" />
                </svg>
                <h6 className="mb-2">Open Support Ticket</h6>
              </div>
              <div className="flex items-center gap-5">
                <a href="#" className="text-lg text-white hover:text-blue-500">
                  <i className="fa-brands fa-facebook" />
                </a>
                <a href="#" className="text-lg text-white hover:text-blue-500">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="#" className="text-lg text-white hover:text-blue-500">
                  <i className="fa-brands fa-github" />
                </a>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form action={sendEmail} ref={form} className="focus:outline-2 focus-within:outline-indigo-100">
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  <div className="!min-w-full mb-3 md:mb-0 ">
                    <label className="block outline-none text-cream-700 text-sm font-bold mb-2" htmlFor="to_name">
                      First Name
                    </label>
                   
                    <input type="hidden" name="to_name" value={'Michael'} />
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="to_name" type="text" placeholder="eg. Lucas" />
                  </div>
                  <div className="!min-w-full">
                    <label className="block text-cream-100 text-sm font-bold mb-2" htmlFor="last-name">
                      Last Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last-name" type="text" placeholder="eg. Jones" />
                  </div>
                </div>
                <div className="!min-w-full mb-8">
                  <label className="block text-cream-700 text-sm font-bold mb-2" htmlFor="from_name">
                    Email
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="from_name" type="email" placeholder="eg. lucas@mail.com" name='from_name'/>
                </div>
                <p className="!text-teal-500 text-lg mb-2">
                  What are you interested in?
                </p>
                <div className="flex flex-row mb-14">
                  
                  <div className="flex items-center mb-4 mr-4">
                    <input id="design" type="radio" name="type" value="design" defaultChecked />
                    <label className="ml-2 text-md text-cream-600" htmlFor="design">Design</label>
                  </div>
                  <div className="flex items-center mb-4 mr-4">
                    <input id="development" type="radio" name="type" value="development" />
                    <label className="ml-2 text-md text-cream-600" htmlFor="development">Development</label>
                  </div>
                  <div className="flex items-center mb-4 mr-4">
                    <input id="support" type="radio" name="type" value="support" />
                    <label className="ml-2 text-md text-cream-600" htmlFor="support">Support</label>
                  </div>
                  <div className="flex items-center mb-4 mr-4">
                    <input id="other" type="radio" name="type" value="other" />
                    <label className="ml-2 text-md text-cream-600" htmlFor="other">Other</label>
                  </div>
                  
                </div>
                <div className="!min-w-full mb-8">
                  <label className="block text-cream-700 text-sm font-bold mb-2" htmlFor="message">
                    Your Message
                  </label>
                  <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows={5} name='message' />
                </div>
                <div className="w-full flex justify-end">
                  <button className="w-full md:w-fit bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline btn-primary" type="submit">
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
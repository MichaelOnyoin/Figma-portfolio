"use client";
import * as React from "react";
import InputField from "@/components/contact/InputField";
import TextAreaField from "@/components/contact/TextAreaField";
import emailjs from "@emailjs/browser";

function ContactForm() {
    const form = React.useRef<HTMLFormElement>(null);

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
    <div className="flex gap-8 container mx-auto items-center justify-center w-4/5 max-h-screen  mx-auto my-16 px-4">
        <div className=" flex-col items-center justify-center w-full mb-8">
        <h1 className="text-6xl font-bold text-zinc-100 mb-6 w-full">Got a project <span className="text-6xl w-full font-bold text-teal-500 mb-6">in mind?</span></h1>
        <img loading="lazy" src="Group 2372.svg" alt="Designer portrait" className="w-3/5 aspect-[0.83] max-md:mt-10 max-md:max-w-full" />
        </div>
        <form className="flex flex-col container mx-auto gap-6 items-start w-full" action={sendEmail} ref={form} >
        <div className="flex gap-6 justify-center items-start w-full max-sm:flex-col max-sm:gap-4">
            <input type="hidden" name="to_name" value={'Michael'} />
            <InputField
            label="Your name"
            type="text"
            placeholder="Name"
            
            />
            <InputField
            label="Your email"
            type="email"
            placeholder="Email"
            name="from_name"
            />
        </div>
        <TextAreaField
            label="Your Message"
            placeholder="Message"
            name="message"
        />
        <button className="px-8 py-2.5 bg-teal-400 font-semibold text-shadow-lg rounded-3xl max-md:px-5 ">
            Send Message
            {/* <div  id="my-popover" className="opacity-0 starting:open:opacity-0 ...">
   
            </div> */}
        </button>
        </form>
    </div>
  );
}

export default ContactForm;


import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Form = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_hhqpxkn', 'template_b79muoi', form.current, {
            publicKey: 'ivFFlRTErWxcweyAD',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <div>
           <div className="layout pt-20 pb-48 flex flex-col items-center justify-center">
            
            <h2 className="text-5xl font-bold text-slate-800 font-['__gellix_0bf537, __gellix_Fallback_0bf537']  pb-4">How can we help?</h2>
            <p className="mb-10 font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-slate-600">If you have any questions, reach out to our team for help</p>
            <form ref={form} onSubmit={sendEmail} className="lg:w-[600px] grid grid-cols-2 gap-5 mx-3 lg:mx-0">
            <input className="bg-[#EDEEF7] py-3 px-4 rounded-lg outline-[#7868E3]" placeholder="Full Name" type="text" name="from_name"/>
            <input className="bg-[#EDEEF7] py-3 px-4 rounded-lg outline-[#7868E3]" placeholder="Email" type="email" name="from_email"/>
            <textarea className="col-span-2 h-[150px] bg-[#EDEEF7] py-3 px-4 rounded-lg outline-[#7868E3]" placeholder="Message" name="message">
                </textarea>
                <button type="submit" className="col-span-2 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium py-4 rounded-lg text-white bg-[#7666E3]">Send Message</button>
                </form>
                </div>
        </div>
    );
};

export default Form;
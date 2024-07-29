import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

const Form = () => {

    const form = useRef();

    const diffToast = (message, isError) => {
        toast(message, {
            position: "top-center",
            className: isError ? "error-toast" : "success-toast"
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Check that any field is empty
        const formData = new FormData(form.current);
        let isEmpty = false;
        for (let pair of formData.entries()) {
            if (!pair[1]) {
                isEmpty = true;
                break;
            }
        }

        if (isEmpty) {
            // Show toast notification for empty fields with error color
            diffToast("Please fill the form carefully!", true);
            return;
        }

        // If all fields are filled, proceed to send email
        emailjs
            .sendForm('service_yxyg0tw', 'template_ccym5zl', form.current, {
                publicKey: 'Mc3Gf_cuDkLM8MI_h',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    // Clear form fields
                    form.current.reset();
                    // Show success toast notification
                    diffToast("Send Message Successfully!", false);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    // Show error toast notification
                    diffToast("Failed to send message. Please try again later.", true);
                },
            );
    };

    return (

        <div className='min-h-screen'>
            <div className="layout pt-20 pb-48 flex flex-col items-center justify-center bg-white">
                <section className="bg-[#EDEEF7] p-4 rounded-lg w-full 3xl:-mt-20 2xl:-mt-20 desktop:-mt-20 laptop:-mt-20 tablet:-mt-44 -mt-44   text-center 3xl:h-[100rem] 2xl:h-[90rem] desktop:h-[85rem]  laptop:h-[80rem] tablet:h-[75rem] h-[60rem] min-h-screen">
                    <div className='container mx-auto mt-20 tablet:mt-24 3xl:mt-[22rem] 2xl:mt-52 desktop:mt-60 laptop:mt-52'>
                        <h1 className="md:text-5xl text-3xl font-bold text-slate-800 pb-4 md:mt-24 mt-16">
                            How can we help?
                        </h1>
                        <p className="mb-10 md:text-lg font-medium text-sm text-slate-600 md:mt-6">
                            If you have any questions, reach out to our team for help.
                        </p>
                    </div>
                </section>
                <form ref={form} onSubmit={sendEmail} className="lg:w-[600px] grid grid-cols-2 gap-5 mx-3 lg:mx-0 font-roboto 3xl:-mt-[65rem] 2xl:-mt-[65rem] desktop:-mt-[58rem] laptop:-mt-[54rem] tablet:-mt-[56rem] -mt-[45rem] 3xl:mb-64 2xl:mb-64 desktop:mb-52">
                    <input className="bg-white py-3 px-4 rounded-lg outline-[#7868E3]" placeholder="Full Name" type="text" name="from_name" />
                    <input className="bg-white py-3 px-4 rounded-lg outline-[#7868E3]" placeholder="Email" type="email" name="from_email" />
                    <textarea className="col-span-2 h-[150px] bg-white py-3 px-4 rounded-lg outline-[#7868E3]" placeholder="Message" name="message"></textarea>
                    <button type="submit" className="col-span-2  font-roboto font-medium py-4 rounded-lg text-white bg-[#7666E3]">
                        Send Message
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Form;

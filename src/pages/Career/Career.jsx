import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Career.css';
import { Helmet } from 'react-helmet-async';

const Career = () => {

    const form = useRef();

    const diffToast = (message, isError) => {
        toast(message, {
            position: "top-center",
            className: isError ? "error-toast" : "success-toast"
        });
    };

    const sendEmail = (e) => {

        e.preventDefault();

        // Check that if any field is empty
        const formData = new FormData(form.current);
        let isEmpty = false;
        for (let pair of formData.entries()) {
            if (!pair[1]) {
                isEmpty = true;
                break;
            }
        }

        if (isEmpty) {
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
                    diffToast("Application Sent Successfully!", false);
                },
                (error) => {
                    console.error('FAILED...', error);
                    // Show error toast notification
                    diffToast("Failed to send application. Please try again later.", true);
                },
            );
    };

    return (

        <div className='min-h-screen'>

            <Helmet>
                <title>Prographr | Career</title>
                <meta name="description" content="Find high-quality templates for your projects at the Template Store. Choose from a variety of options including agency templates, graphics templates, and more." />
            </Helmet>

            <div className='font-raleway'>
                <div className="layout pt-20 pb-48 flex flex-col items-center justify-center bg-white ">
                    <section className="bg-[#ffffff] p-4 rounded-lg w-full -mt-[5.5rem] text-center 3xl:h-[98rem] 2xl:h-[90rem] desktop:h-[85rem] laptop:h-[80rem] tablet:h-[75rem] h-[60rem] min-h-screen font-raleway">
                        <div className='container mx-auto mt-20 tablet:mt-24 3xl:mt-[22rem] 2xl:mt-52 desktop:mt-60 laptop:mt-52'>
                            <h1 className="md:text-5xl text-3xl font-bold text-[#282A37] pb-4 md:mt-24 mt-16 font-raleway">
                                Join Our Team
                            </h1>
                            <p className="mb-10 md:text-lg font-medium text-sm text-slate-600 md:mt-6">
                                If you're interested in working with us, please fill out the form below.
                            </p>
                        </div>
                    </section>

                    <form ref={form} onSubmit={sendEmail} className="lg:w-[600px] grid grid-cols-2 gap-5 mx-3 3xl:-mt-[66rem] 2xl:-mt-[63rem] desktop:-mt-[57rem] laptop:-mt-[55rem] tablet:-mt-[57rem] -mt-[45rem]">
                        <input className="bg-[#F9F9F9] py-3 px-4 rounded-lg outline-[#7868E3]" placeholder="Full Name" type="text" name="from_name" />
                        <input className="bg-[#F9F9F9] py-3 px-4 rounded-lg outline-[#7868E3]" placeholder="Email" type="email" name="from_email" />
                        <textarea className="col-span-2 h-[150px] bg-[#F9F9F9] py-3 px-4 rounded-lg outline-[#7868E3]" placeholder="Please describe which field Do you want to work as like Graphic Designer, Digital Marketer, Web Developer" name="message"></textarea>
                        <button type="submit" className="col-span-2 font-medium py-4 rounded-lg text-white bg-[#4864EC] font-raleway">
                            Apply Now
                        </button>
                    </form>

                    <section className="bg-[#ffffff] p-4 rounded-lg w-full text-center mt-5 h-52 font-raleway">
                        <h2 className="md:text-2xl text-lg font-bold text-slate-800 md:mt-12 font-raleway">
                            You can send your CV to this email:
                        </h2>
                        <p className="mt-2 text-xl text-[#4864EC] font-medium md:pb-10">career@prographr.com</p>
                    </section>
                </div>

                <ToastContainer />

            </div>
        </div>
    );
};

export default Career;
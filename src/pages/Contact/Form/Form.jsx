import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css' // Import your CSS file with custom styles

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

        // Check if any field is empty
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
            return; // Stop execution
        }

        // If all fields are filled, proceed to send email
        emailjs
            .sendForm('service_hhqpxkn', 'template_b79muoi', form.current, {
                publicKey: 'ivFFlRTErWxcweyAD',
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
        <div>
            <div className="layout pt-20 pb-48 flex flex-col items-center justify-center">
                <h2 className="text-5xl font-bold text-slate-800 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] pb-4">How can we help?</h2>
                <p className="mb-10 font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-slate-600">If you have any questions, reach out to our team for help</p>
                <form ref={form} onSubmit={sendEmail} className="lg:w-[600px] grid grid-cols-2 gap-5 mx-3 lg:mx-0">
                    <input className="bg-[#EDEEF7] py-3 px-4 rounded-lg outline-[#7868E3]" placeholder="Full Name" type="text" name="from_name" />
                    <input className="bg-[#EDEEF7] py-3 px-4 rounded-lg outline-[#7868E3]" placeholder="Email" type="email" name="from_email" />
                    <textarea className="col-span-2 h-[150px] bg-[#EDEEF7] py-3 px-4 rounded-lg outline-[#7868E3]" placeholder="Message" name="message"></textarea>
                    <button type="submit" className="col-span-2 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium py-4 rounded-lg text-white bg-[#7666E3]">Send Message</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Form;

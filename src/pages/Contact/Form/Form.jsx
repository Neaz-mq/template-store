import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

const Form = () => {
  const form = useRef();
  const diffToast = (message, isError) => {
    toast(message, {
      position: 'top-center',
      className: isError ? 'error-toast' : 'success-toast',
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    let isEmpty = false;
    for (let pair of formData.entries()) {
      if (!pair[1]) {
        isEmpty = true;
        break;
      }
    }

    if (isEmpty) {
      diffToast('Please fill the form carefully!', true);
      return;
    }

    emailjs
      .sendForm('service_yxyg0tw', 'template_ccym5zl', form.current, {
        publicKey: 'Mc3Gf_cuDkLM8MI_h',
      })
      .then(
        () => {
          form.current.reset();
          diffToast('Send Message Successfully!', false);
        },
        (error) => {
          console.error('FAILED...', error.text);
          diffToast('Failed to send message. Please try again later.', true);
        }
      );
  };

  return (
    <div className="font-raleway min-h-screen bg-[#F9F9F9] 3xl:-mt-4 2xl:-mt-4 desktop:-mt-5 laptop:-mt-4 tablet:-mt-24 -mt-24">
      <div className="flex flex-col items-center justify-center px-4 py-12">
        <section className="text-center mt-10 md:mt-16 lg:mt-20">
          <h1 className="text-2xl md:text-4xl font-bold text-slate-800">
            How can we help?
          </h1>
          <p className="text-sm md:text-lg text-slate-600 mt-4">
            If you have any questions, reach out to our team for help.
          </p>
        </section>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-lg mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            className="bg-white py-3 px-4   outline-[#282A37] w-full"
            placeholder="Full Name"
            type="text"
            name="from_name"
          />
          <input
            className="bg-white py-3 px-4   outline-[#282A37] w-full"
            placeholder="Email"
            type="email"
            name="from_email"
          />
          <textarea
            className="col-span-1 md:col-span-2 bg-white py-3 px-4   outline-[#282A37] h-36 resize-none"
            placeholder="Message"
            name="message"
          />
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-[#282A37] text-white py-3 px-6   hover:bg-[#33364a] transition-all"
          >
            Send Message
          </button>
          <a
            href="https://wa.me/+8801303660481"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 md:col-span-2 flex items-center justify-center py-3 px-6  shadow-md text-green-600 border border-[#282A37] hover:bg-[#36394b] transition-all"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-xl mr-2"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"></path>
            </svg>
            WhatsApp
          </a>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Form;

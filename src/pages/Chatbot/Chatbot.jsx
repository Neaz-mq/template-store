import { useState, useRef } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef();

  const toggleChat = () => setIsOpen(!isOpen);

  const showToast = (message, isError) => {
    toast(message, {
      position: "top-center", // Makes sure it appears at the top
      className: isError ? "error-toast" : "success-toast",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    let isEmpty = false;

    for (let pair of formData.entries()) {
      if (!pair[1]) {
        isEmpty = true;
        break;
      }
    }

    if (isEmpty) {
      showToast("⚠️ Please fill in all fields!", true);
      return;
    }

    emailjs
      .sendForm("service_fx24x9m", "template_b79muoi", formRef.current, {
        publicKey: "ivFFlRTErWxcweyAD",
      })
      .then(
        () => {
          formRef.current.reset();
          showToast("✅ Message sent successfully!", false);
        },
        (error) => {
          console.error("Email send failed:", error.text);
          showToast("❌ Failed to send message. Try again!", true);
        }
      );
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {isOpen && (
        <div className="w-80 shadow-xl border rounded-xl bg-white mb-4 relative">
          {/* Toast Notification Inside Chat */}
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            className="absolute top-2 left-1/2 transform -translate-x-1/2 z-50 w-full"
          />
          
          {/* Chat Header */}
          <div className="flex justify-between items-center bg-blue-500 text-white p-3 rounded-t-xl">
            <span>Chat Support</span>
            <FaTimes className="cursor-pointer" onClick={toggleChat} />
          </div>

          {/* Chat Body */}
          <div className="p-4 space-y-3">
            <p className="text-gray-700">Fill the form, and we’ll reply via email!</p>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-2">
              <input
                className="w-full p-2 border rounded-lg"
                placeholder="Full Name"
                type="text"
                name="from_name"
              />
              <input
                className="w-full p-2 border rounded-lg"
                placeholder="Email"
                type="email"
                name="from_email"
              />
              <textarea
                className="w-full p-2 border rounded-lg h-20"
                placeholder="Message"
                name="message"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
      <button
        onClick={toggleChat}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
      >
        {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
      </button>
    </div>
  );
}



const Form = () => {
    return (
        <div>
           <div className="layout pt-20 pb-48 flex flex-col items-center justify-center">
            
            <h2 className="text-5xl font-bold text-slate-800 font-['__gellix_0bf537, __gellix_Fallback_0bf537']  pb-4">How can we help?</h2>
            <p className="mb-10 font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-slate-600">If you have any questions, reach out to our team for help</p>
            <form className="lg:w-[600px] grid grid-cols-2 gap-5 mx-3 lg:mx-0">
            <input className="bg-[#EDEEF7] py-3 px-4 rounded-lg outline-[#7868E3]" placeholder="Full Name" type="text"/>
            <input className="bg-[#EDEEF7] py-3 px-4 rounded-lg outline-[#7868E3]" placeholder="Email" type="email"/>
            <textarea className="col-span-2 h-[150px] bg-[#EDEEF7] py-3 px-4 rounded-lg outline-[#7868E3]" placeholder="Message">
                </textarea>
                <button className="col-span-2 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium py-4 rounded-lg text-white bg-[#7666E3]">Send Message</button>
                </form>
                </div>
        </div>
    );
};

export default Form;
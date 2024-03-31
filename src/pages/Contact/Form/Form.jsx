

const Form = () => {
    return (
        <div>
           <div className="layout pt-20 pb-48 flex flex-col items-center justify-center">
            
            <h2 className="text-5xl font-bold text-accent pb-4">How can we help?</h2>
            <p className="mb-10">If you have any questions, reach out to our team for help</p>
            <form className="lg:w-[600px] grid grid-cols-2 gap-5">
            <input className="bg-neutral py-3 px-4 rounded-lg outline-primary" placeholder="Full Name" type="text"/>
            <input className="bg-neutral py-3 px-4 rounded-lg outline-primary" placeholder="Email" type="email"/>
            <textarea className="col-span-2 h-[150px] bg-neutral py-3 px-4 rounded-lg outline-primary" placeholder="Message">
                </textarea>
                <button className="col-span-2 py-4 rounded-lg text-white bg-primary">Send Message</button>
                </form>
                </div>
        </div>
    );
};

export default Form;
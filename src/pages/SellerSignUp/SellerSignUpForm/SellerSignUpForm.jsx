import './SellerSignUpForm.css'

const SellerSignUpForm = () => {
    return (
        <div>
            <div className="lg:min-h-[calc(100vh-450px)] flex items-center justify-center mb-20 mt-4 ">
                <form className="lg:w-fit w-80 min-h-[400px] bg-[#EDEEF7] text-center px-10 py-6 rounded-[30px] mt-10  lg:-ml-0">
                    <h3 className="text-xl font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-slate-800 mb-6">Sign Up</h3>
                    <div className="flex flex-col gap-3 mb-3">
                        <div className="max-w-72 lg:max-w-[350px] flex gap-3">
                            <input className="inputField hidden lg:block lg:w-full rounded-lg outline-[#7666E3]" placeholder="First Name" type="text" />
                            <input className="lg:hidden w-28 lg:w-full rounded-lg outline-[#7666E3] p-3" placeholder="First Name" type="text" />
                            <input className="inputField  w-28 hidden lg:block lg:w-full  rounded-lg outline-[#7666E3]" placeholder="Last Name" type="text" />
                            <input className="lg:hidden w-28 lg:w-full  rounded-lg outline-[#7666E3] p-3" placeholder="Last Name" type="text" />
                        </div>
                        <input className="inputField hidden lg:block lg:w-96 w-36 py-2.5 rounded-lg" placeholder="Email" type="email" />
                        <input className="lg:hidden p-3 rounded-lg" placeholder="Email" type="email" />
                        <input className="inputField lg:w-96 w-36 py-2.5 hidden lg:block rounded-lg " placeholder="Password" type="password" />
                        <input className="lg:hidden p-3 rounded-lg" placeholder="Password" type="password" />

                        <input className="inputField lg:w-96  py-2.5 hidden lg:block rounded-lg" placeholder="Confirm Password" type="password" />
                        <input className="lg:hidden p-3 rounded-lg" placeholder="Confirm Password" type="password" />
                    </div>
                    <div className="form-control py-3"><label className="flex gap-3">
                        <input className="checkbox checkbox-primary" type="checkbox" /><span className="label-text font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-slate-800">I agree with all the <a href="#" className="text-blue-500 underline">terms and services</a></span></label>
                    </div>
                    <button className="btn bg-[#6658C5]  font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] hover:bg-[#4936c3] capitalize text-white rounded-full gap-4 w-full mt-3 py-3 shadow-none"><span className="-mt-1">Sign Up</span><svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
                </form>
            </div>
        </div>
    );
};

export default SellerSignUpForm;
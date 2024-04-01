import './SellerSignUpForm.css'

const SellerSignUpForm = () => {
    return (
        <div>
            <div className="min-h-[calc(100vh-450px)] flex items-center justify-center mb-20 mt-4 ">
                <form className="w-fit min-h-[400px] bg-[#EDEEF7] text-center px-10 py-6 rounded-[30px] mt-10">
                    <h3 className="text-xl font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-slate-800 mb-6">Sign Up</h3>
                    <div className="flex flex-col gap-3 mb-3">
                        <div className="max-w-[280px] lg:max-w-[350px] flex gap-3">
                            <input className="inputField w-full" placeholder="First Name" type="text" />
                            <input className="inputField w-full" placeholder="Last Name" type="text" />
                        </div><input className="inputField" placeholder="Email" type="email" />
                        <input className="inputField" placeholder="Password" type="password" />
                        <input className="inputField" placeholder="Confirm Password" type="password" />
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
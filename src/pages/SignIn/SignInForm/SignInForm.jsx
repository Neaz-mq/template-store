import './SignInForm.css'

const SignInForm = () => {
    return (
        <div className='mb-16'>
           <div className="min-h-[calc(100vh-450px)] flex items-center justify-center">
            
            <form className="w-fit min-h-[400px] mt-10 bg-[#EDEEF7] text-center px-10 py-6 rounded-[30px]">
                <h3 className="text-xl font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-slate-600 mb-6">Sign In</h3><input className="inputField" placeholder="Email" type="email"/>
                <br/>
                <input className="inputField mt-4" placeholder="Password" type="password"/><br/><br/>

                <button className="btn btn-primary font-light capitalize text-white rounded-full gap-4 w-full mt-3 py-3 shadow-none"><span className="-mt-1">Sign in</span><svg stroke="currentColor" fill="none"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
                <br/><br/>

                <button className="btn bg-white hover:bg-gray-100 font-light capitalize text-accent rounded-full gap-4 w-full py-3 shadow-none"><span className="-mt-1">Sign in With Facebook</span> <svg stroke="currentColor" fill="none" 
                 viewBox="0 0 24 24" 
                   height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button></form></div>
        </div>
    );
};

export default SignInForm;
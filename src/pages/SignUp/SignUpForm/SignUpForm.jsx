import { Helmet } from "react-helmet-async";


const SignUpForm = () => {
    return (
        
        <div>
             <Helmet>
                <title>Template Store | Sign-Up-As</title>
            </Helmet>
           <div className="layout min-h-[calc(100vh-500px)] flex items-center my-16">
            <div className="w-fit mx-auto flex flex-col items-center">
                <h3 className="text-3xl font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-slate-800">Sign up as a</h3>
                <div className="flex gap-4 mt-10"><a href="/sign-up">
                    <button className="btn bg-[#6658C5] font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] hover:bg-[#4936c3] capitalize text-white rounded-full gap-4 px-10 py-3 text-lg"><span className="-mt-1">Seller</span>
                    </button>
                    </a>
                    <a href="/sign-up"><button className="btn bg-[#6658C5] font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] hover:bg-[#4936c3]  capitalize text-white rounded-full gap-4 px-10 py-3 text-lg"><span className="-mt-1">Buyer</span></button></a></div>
                    </div>
                    </div>
        </div>
    );
};

export default SignUpForm;
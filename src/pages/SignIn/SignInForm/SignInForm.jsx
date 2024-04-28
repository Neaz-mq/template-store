import { useContext, useState } from 'react';
import './SignInForm.css';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SignInForm = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            });
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const inputType = passwordVisible ? 'text' : 'password';

    return (
        <div className='mb-16'>
            <div className="lg:min-h-[calc(100vh-450px)] flex items-center justify-center">
                <form onSubmit={handleLogin} className="lg:w-fit min-h-[400px] mt-10 bg-[#EDEEF7] text-center px-10 py-6 rounded-[30px] ">
                    <h3 className="text-xl font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-slate-600 mb-6">Sign In</h3>
                    <input className="lg:w-96 w-64 rounded-lg py-2.5 input" placeholder="Email" name="email" type="email" />
                    <br />
                    <div className="relative">
                        <input className="lg:w-96 w-64 rounded-lg py-2.5 input mt-4" placeholder="Password" type={inputType} name="password" />
                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center mt-4">
                            {passwordVisible ? (
                                <FaEye onClick={togglePasswordVisibility} className="text-gray-400 cursor-pointer" />
                            ) : (

                                <FaEyeSlash onClick={togglePasswordVisibility} className="text-gray-400 cursor-pointer" />
                            )}
                        </span>
                    </div>
                    <br /><br />
                    <button className="btn bg-[#6658C5] capitalize text-white rounded-full gap-4 w-full mt-3 py-3 shadow-none font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] hover:bg-[#4936c3]">
                        <span className="-mt-1">Sign in</span>
                        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                    <br /><br />
                    {/* Google Sign-in Button */}
                    <button className="btn btn-google bg-white hover:bg-gray-100  capitalize text-black rounded-full gap-4 w-full mt-3 py-3 shadow-none font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] ">
                        <FaGoogle className="text-xl mr-2 text-red-600" />
                        Sign in with Google
                        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button> <br /><br />
                    <button className="btn bg-[#6658C5] capitalize text-white rounded-full gap-4 w-full mt-3 py-3 shadow-none font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] hover:bg-[#4936c3]">
                        <span className="-mt-1">Sign in with Facebook</span>
                        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;

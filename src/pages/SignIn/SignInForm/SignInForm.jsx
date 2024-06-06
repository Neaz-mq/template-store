import { useContext, useState } from 'react';
import { useEffect } from 'react'; // Import useEffect for SEO purposes
import './SignInForm.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../SocialLogin/SocialLogin';

const SignInForm = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [passwordVisible, setPasswordVisible] = useState(false);

    useEffect(() => {
        document.title = "Prographr | Sign In"; // Set document title for better SEO
    }, []);

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
                // Handle successful login
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
                    <h3 className="text-xl font-medium text-slate-600 mb-6">Sign In</h3>
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

                    <button className="btn bg-[#6658C5] capitalize text-white rounded-full gap-4 w-full mt-6 py-3 shadow-none font-medium hover:bg-[#4936c3]">
                        <span className="-mt-1">Sign in</span>
                        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                    <br /> <br /> <br />
                    {/* Google Sign-in Button */}
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;

import { useContext, useState } from 'react';
import { useEffect } from 'react';
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
        document.title = "Prographr | Sign In";
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

        <div className='min-h-screen 3xl:h-[60rem] 2xl:h-[40rem] desktop:h-[35rem] laptop:h-[10rem] tablet:h-[10rem] h-[10rem] font-raleway  '>

            <div className='mb-16 bg-[#fbfbfb] min-h-screen 3xl:-mt-4 2xl:-mt-4 desktop:-mt-5 laptop:-mt-4 tablet:-mt-24 -mt-24'>

                <div className="flex items-center justify-center container">

                    <form onSubmit={handleLogin} className="lg:w-fit  mt-10 3xl:mt-[17rem] bg-[#F9F9F9] text-center px-10 py-6  rounded-[30px] container mb-28  font-roboto    ">
                        <h3 className="text-xl font-medium text-slate-600 mb-6 mt-6  ">Sign In</h3>
                        <input className="3xl:w-96 2xl:w-96 desktop:w-96 laptop:w-96 tablet:w-96 w-52 rounded-lg py-2.5 input bg-[#ffffff]" placeholder="Email" name="email" type="email" />
                        <br />
                        <div className="relative">
                            <input className="3xl:w-96 2xl:w-96 desktop:w-96 laptop:w-96 tablet:w-96 w-52 rounded-lg py-2.5 input mt-4 bg-[#ffffff]" placeholder="Password" type={inputType} name="password" />
                            <span className="absolute inset-y-0 right-0 pr-3 flex items-center mt-4  tablet:mr-36 3xl:mr-0 2xl:mr-0 desktop:mr-0 laptop:mr-0 mr-7 ">
                                {passwordVisible ? (
                                    <FaEye onClick={togglePasswordVisibility} className="text-gray-400 cursor-pointer" />
                                ) : (
                                    <FaEyeSlash onClick={togglePasswordVisibility} className="text-gray-400 cursor-pointer" />
                                )}
                            </span>
                        </div>

                        <button className="btn bg-[#4864EC] capitalize text-white rounded-full gap-4 3xl:w-full 2xl:w-full desktop:w-full laptop:w-full w-52 tablet:w-96 mt-6 py-3 shadow-none font-medium hover:bg-[#4864EC]">
                            <span className="-mt-1">Sign in</span>
                            <svg className="hidden 3xl:block 2xl:block desktop:block laptop:block tablet:block" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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
        </div>
    );
};

export default SignInForm;

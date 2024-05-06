import { useForm } from 'react-hook-form';
import './SignUp.css';
import { FaEye, FaEyeSlash} from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import SocialLogin from '../../SocialLogin/SocialLogin';


const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, watch, formState: { errors, isValid }, reset } = useForm({ mode: 'onChange' });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [termsChecked, setTermsChecked] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                        }
                        axiosPublic.post('/users', userInfo)
                        .then(res => {
                            if(res.data.insertedId){
                                console.log('user added to the database');
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'User created successfully.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/');
                            }
                        })
                        // console.log('user profile info updated');
                        // Reset the form after submission
                        
                    })
                    .catch(error => console.log(error))
            })

    };

    const password = watch("password", "");

    return (
        <>
            <div>
                <Helmet>
                    <title>Template Store | Sign-Up</title>
                </Helmet>
            </div>
            <div className="lg:min-h-[calc(100vh-450px)] flex items-center justify-center mb-20 mt-4">
                <form onSubmit={handleSubmit(onSubmit)} className="lg:w-[450px] w-80 min-h-[400px] bg-[#EDEEF7] text-center px-10 py-6 rounded-[30px] mt-10  lg:-ml-0">
                    <h3 className="text-xl font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-slate-800 mb-6">Sign Up</h3>
                    <div className="flex flex-col gap-3 mb-3">
                        <div className="max-w-72 lg:max-w-[350px] flex gap-4">
                            <div className="form-control">
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    name="name"
                                    placeholder="First Name"
                                    className="input input-bordered  inputField w-28   lg:w-44 rounded-lg outline-[#7666E3]"
                                />
                                {errors.name && <span className="text-red-600 "> First Name is required</span>}
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    {...register("last", { required: true })}
                                    name="last"
                                    placeholder="Last Name"
                                    className="input input-bordered inputField  w-28  lg:w-44  rounded-lg outline-[#7666E3]"
                                />
                                {errors.last && <span className="text-red-600 "> Last Name is required</span>}
                            </div>
                        </div>
                        <div className="form-control">
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                name="email"
                                placeholder="Email"
                                className="input input-bordered inputField"
                            />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })}
                                placeholder="Password"
                                className="input input-bordered inputField pr-12"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-300"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        </div>
                        <div className="form-control relative">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                {...register("confirm", {
                                    required: true,
                                    validate: value => value === password // Custom validation to check if confirm password matches password
                                })}
                                placeholder="Confirm password"
                                className="input input-bordered inputField pr-12"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-300"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                            {errors.confirm?.type === 'required' && <p className="text-red-600">Confirm Password is required</p>}
                            {errors.confirm?.type === 'validate' && <p className="text-red-600">Passwords do not match</p>} {/* Error message for password mismatch */}
                        </div>
                    </div>
                    <div className="form-control py-3">
                        <label className="flex gap-3">
                            <input
                                className="checkbox checkbox-primary"
                                type="checkbox"
                                onChange={(e) => setTermsChecked(e.target.checked)}
                            />
                            <span className="label-text font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-slate-800">
                                I agree with all the <a href="#" className="text-blue-500 underline">terms and services</a>
                            </span>
                        </label>
                    </div>
                    <div className="form-control -mt-5">
                        <button
                            className="btn bg-[#6658C5]  font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] hover:bg-[#4936c3] capitalize text-white rounded-full gap-4 w-full mt-8 py-3 shadow-none"
                            type="submit"
                            disabled={!termsChecked || !isValid}
                        >
                            <span className="-mt-1">Sign Up</span>
                            <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                        <br /> <br />
                        {/* Google Sign-in Button */}
                        <SocialLogin></SocialLogin> <br /> 
                        <button className="btn bg-[#6658C5] capitalize text-white rounded-full gap-4 w-full mt-3 py-3 shadow-none font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] hover:bg-[#4936c3]">
                        <span className="-mt-1">Sign in with Facebook</span>
                        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUp;
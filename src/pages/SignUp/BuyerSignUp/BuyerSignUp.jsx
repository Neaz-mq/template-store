import { useForm } from 'react-hook-form';
import './BuyerSignUp.css'
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';


const BuyerSignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };


    const onSubmit = data => {

        console.log(data);

    };

    return (
        <>
        <div>
            <Helmet>
            <title>Template Store | Sign-Up-here</title>
            </Helmet>
        </div>
            <div className="lg:min-h-[calc(100vh-450px)] flex items-center justify-center mb-20 mt-4">
                <form onSubmit={handleSubmit(onSubmit)} className="lg:w-[450px] w-80 min-h-[400px] bg-[#EDEEF7] text-center px-10 py-6 rounded-[30px] mt-10  lg:-ml-0">
                    <h3 className="text-xl font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-slate-800 mb-6">Sign Up</h3>
                    <div className="flex flex-col gap-3 mb-3">
                        <div className="max-w-72 lg:max-w-[350px] flex gap-4">
                        <div className="form-control"> 
                         
                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="First Name" className="input input-bordered  inputField hidden lg:block lg:w-44 rounded-lg outline-[#7666E3]" /> 
                            {errors.name && <span className="text-red-600 hidden lg:block"> First Name is required</span>}

                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="First Name" className="input input-bordered lg:hidden w-28 lg:w-3/4 rounded-lg outline-[#7666E3] p-3" />
                            {errors.name && <span className="text-red-600 lg:hidden"> First Name is required</span>}
                            </div>
                            <div className="form-control"> 

                                <input type="text"  {...register("last", { required: true })} name="last" placeholder="Last Name" className="input input-bordered inputField  w-28 hidden lg:block lg:w-44  rounded-lg outline-[#7666E3]" />
                                {errors.last && <span className="text-red-600 hidden lg:block"> Last Name is required</span>}

                                <input type="text"  {...register("last", { required: true })} name="last" placeholder="Last Name" className="input input-bordered lg:hidden w-28 lg:w-full  rounded-lg outline-[#7666E3] p-3" />
                                {errors.last && <span className="text-red-600 lg:hidden"> Last Name is required</span>}
                            </div>
                        </div>

                        <div className="form-control">

                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered inputField" />
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
                            {errors.password && <span className="text-red-600 ">Password is required</span>}
                        </div>
                        <div className="form-control relative">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                {...register("confirm", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
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
                            {errors.confirm && <span className="text-red-600 ">Confirm Password is required</span>}
                        </div>
                        <div className="form-control py-3"><label className="flex gap-3">
                            <input className="checkbox checkbox-primary" type="checkbox" /><span className="label-text font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-slate-800">I agree with all the <a href="#" className="text-blue-500 underline">terms and services</a></span></label>
                        </div>
                        <div className="form-control -mt-5">
                            <button className="btn bg-[#6658C5]  font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] hover:bg-[#4936c3] capitalize text-white rounded-full gap-4 w-full mt-5 py-3 shadow-none" type="submit"><span className="-mt-1">Sign Up</span><svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
                            <br /> <br />
                            {/* Google Sign-in Button */}
                            <button className="btn btn-google bg-white hover:bg-gray-100  capitalize text-black rounded-full gap-4 w-full -mt-4 py-3 shadow-none font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] ">
                                <FaGoogle className=" text-base mr-2 text-red-600" />Sign up with Google
                                <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>

                    </div>

                </form>




            </div>


        </>
    );
};

export default BuyerSignUp;
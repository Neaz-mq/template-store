import { FaGoogle } from "react-icons/fa";
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {

        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName

                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
    }

    return (

        <div>

            <button onClick={handleGoogleSignIn} className="btn btn-google mb-6 bg-[#EDEEF7] hover:bg-gray-100 capitalize text-black rounded-full gap-4 3xl:w-full 2xl:w-full desktop:w-full laptop:w-full tablet:w-96  -mt-4 py-3 shadow-none font-medium font-roboto">

                <FaGoogle className=" text-base
                            mr-2 text-red-600" />Sign up with Google
                <svg className="hidden 3xl:block 2xl:block desktop:block laptop:block tablet:block" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </button>
        </div>
    );
};

export default SocialLogin;
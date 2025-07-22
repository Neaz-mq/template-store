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
                // Logging the result to debug
                console.log(result.user);

                // Fallback for photoURL if not available
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photoURL: result.user?.photoURL || 'https://via.placeholder.com/150', // Default photo if none
                };

                // Posting the user data to your backend
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');  // Navigate to the home page or dashboard after successful login
                    })
                    .catch(error => {
                        console.error("Error during user data submission:", error);
                        alert("Something went wrong while saving your user data.");
                    });
            })
            .catch(error => {
                console.error("Google Sign-In failed:", error);
                alert("Google sign-in failed. Please try again.");
            });
    };

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-google mb-6 bg-[#EDEEF7] hover:bg-gray-100 capitalize text-black  gap-4 3xl:w-full 2xl:w-full desktop:w-full laptop:w-full tablet:w-96 -mt-4 py-3 shadow-none font-medium ">
                <FaGoogle className=" 3xl:text-base 2xl:text-base desktop:text-base laptop:text-base tablet:text-base text-xs mr-2 text-red-600" />
                Sign up with Google
                <svg className="hidden 3xl:block 2xl:block desktop:block laptop:block tablet:block" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </button>
        </div>
    );
};

export default SocialLogin;

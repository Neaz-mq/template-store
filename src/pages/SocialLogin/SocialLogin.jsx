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
            <button onClick={handleGoogleSignIn} className="btn btn-google bg-white hover:bg-gray-100  capitalize text-black rounded-full gap-4 w-full -mt-4 py-3 shadow-none font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] ">
                <FaGoogle className=" text-base
                            mr-2 text-red-600" />Sign up with Google
                <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </button>
        </div>
    );
};

export default SocialLogin;
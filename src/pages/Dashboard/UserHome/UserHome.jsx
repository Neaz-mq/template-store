import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <div>
            <Helmet>
                <title>Prographr | User</title>
                <meta name="description" content="Discover a wide range of templates for your creative projects at Template Store. Explore community ideas, guidelines, testimonials, and more." />
                <meta name="keywords" content="templates, creativity, community, guidelines, ideas, testimonials" />
                <link rel="canonical" href="https://www.prographr.com/user" />
            </Helmet>
            </div>
            <h2 className="text-3xl">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
        </div>
    );
};

export default UserHome;
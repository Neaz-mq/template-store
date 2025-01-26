import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative">
      <Helmet>
        <title>Prographr | User</title>
        <meta
          name="description"
          content={`Welcome ${user?.displayName || "back"} to Prographr! Discover templates for creative projects and more.`}
        />
        <meta
          name="keywords"
          content="templates, creativity, community, guidelines, ideas, testimonials"
        />
        <link rel="canonical" href="https://www.prographr.com/user" />
      </Helmet>

      {user?.photoURL && (
        <img
          src={user.photoURL}
          alt={`${user.displayName || "User"}'s profile`}
          className="w-16 h-16 rounded-full mb-4"
        />
      )}

      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        <span>{getGreeting()}, Welcome </span>
        {user?.displayName || "Back"}
      </h2>

      <p className="text-gray-600">
        Explore your dashboard and manage your account here.
      </p>  
    </div>
  );
};

export default UserHome;

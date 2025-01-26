import { Helmet } from "react-helmet-async";
import SignInForm from "./SignInForm/SignInForm";

const SignIn = () => {

    return (

        <div>
            <Helmet>
                <title>Prographr | Sign-In</title>
                <meta name="description" content="Sign in to Template Store to access your account and manage your orders." />
            </Helmet>
            <SignInForm></SignInForm>
        </div>
    );
};

export default SignIn;
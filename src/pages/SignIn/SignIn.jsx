import { Helmet } from "react-helmet-async";
import SignInForm from "./SignInForm/SignInForm";

const SignIn = () => {
    return (
        <div>
            <Helmet>
                <title>Template Store | Sign-In</title>
            </Helmet>
            <SignInForm></SignInForm>
        </div>
    );
};

export default SignIn;
import { Helmet } from "react-helmet-async";
import SellerSignUpForm from "./SellerSignUpForm/SellerSignUpForm";

const SellerSignUp = () => {
    return (
        <div>
             <Helmet>
                <title>Template Store | Sign-Up</title>
            </Helmet>
            <SellerSignUpForm></SellerSignUpForm>
        </div>
    );
};

export default SellerSignUp;
import { Helmet } from "react-helmet-async";
import BuyerSignUpForm from "./BuyerSignUpForm/BuyerSignUpForm";

const BuyerSignUp = () => {
    return (
        <div>
             <Helmet>
                <title>Template Store | Sign-Up</title>
            </Helmet>
            <BuyerSignUpForm></BuyerSignUpForm>
        </div>
    );
};

export default BuyerSignUp;
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: add publishable key

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
           <h2 className="text-3xl font-bold text-center mb-10">Payment Now</h2>
            <div>
            <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements> 
            </div>
        </div>
    );
};

export default Payment;
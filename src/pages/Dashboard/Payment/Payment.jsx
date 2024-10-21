import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    return (

        <div>

            <div>
            <Helmet>
                <title>Prographr | Payment</title>
                <meta name="description" content="Discover a wide range of templates for your creative projects at Template Store. Explore community ideas, guidelines, testimonials, and more." />
                <meta name="keywords" content="templates, creativity, community, guidelines, ideas, testimonials" />
                <link rel="canonical" href="https://www.prographr.com/payment" />
            </Helmet>
            </div>

            <h2 className="text-3xl font-bold text-center mb-10">Payment Now</h2>
            
           

        </div>
    );
};

export default Payment;
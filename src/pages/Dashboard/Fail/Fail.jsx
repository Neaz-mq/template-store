import React from 'react';

const Fail = () => {
    return (
        <div>
            <h2 className="text-center text-2xl">Payment Failed</h2>
            <p className="text-center">Unfortunately, your payment could not be processed. Please try again.</p>
            <a href="http://localhost:5173/dashboard/cart" className="text-center">Return to Cart</a>
        </div>
    );
};

export default Fail;

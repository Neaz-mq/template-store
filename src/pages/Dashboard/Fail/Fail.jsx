import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const Fail = () => {
    useEffect(() => {
        // Show the alert as soon as the component loads
        Swal.fire({
            title: 'Payment Failed',
            text: 'Unfortunately, your payment could not be processed. Please try again.',
            icon: 'error',
            confirmButtonText: 'Return to Cart',
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to cart when the user clicks "Return to Cart"
                window.location.href = 'http://localhost:5173/dashboard/cart';
            }
        });
    }, []);
    return null; // No need to render any other elements
};

export default Fail;

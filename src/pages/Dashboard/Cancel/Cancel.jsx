import  { useEffect } from 'react';
import Swal from 'sweetalert2';

const Cancel = () => {
    useEffect(() => {
        // Show the alert as soon as the component loads
        Swal.fire({
            title: 'Payment Canceled',
            text: 'Your payment was canceled. Please try again.',
            icon: 'warning',
            confirmButtonText: 'Return to Cart',
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to cart when the user clicks "Return to Cart"
                window.location.href = 'https://prographr.com/dashboard/cart';
            }
        });
    }, []);

    return null; // No need to render any other elements
};

export default Cancel;

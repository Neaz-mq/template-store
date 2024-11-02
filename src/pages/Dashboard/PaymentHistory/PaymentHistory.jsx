import React, { useEffect, useRef } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom'; // Import useLocation

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [cart, refetchCart] = useCart(); // Renamed for clarity
    const location = useLocation(); // Get the current location

    // State to track if the success alert has been shown
    const hasShownSuccessAlertRef = useRef(false);
    

    const { data: payments = [], isLoading, isError, error } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    });

    useEffect(() => {
        // Reset state on component mount
        hasShownSuccessAlertRef.current = false;

        if (isLoading || isError) return;

        const hasSuccessfulPayments = payments.some(payment => payment.status === "success");
        

        // Show alert for failed payments
      

        // Show alert for successful payments only if the query param is present
        const queryParams = new URLSearchParams(location.search);
        const fromPaymentSuccess = queryParams.get('fromPaymentSuccess');

        // Show alert only if coming from a successful payment
        if (fromPaymentSuccess && hasSuccessfulPayments && !hasShownSuccessAlertRef.current) {
            hasShownSuccessAlertRef.current = true; // Set ref to true
            Swal.fire({
                title: 'Payment Successful',
                text: 'Your payment has been processed successfully!',
                icon: 'success'
            }).then(() => {
                clearCart(); // Clear cart after showing alert
            });
        }
    }, [isLoading, isError, payments, location]);

    const clearCart = async () => {
        if (!user.email) {
            console.error("User email is not available");
            return;
        }

        try {
            const response = await axiosSecure.post('/clear-cart', { email: user.email });

            // Check if the cart was cleared successfully
            if (response.data.success) {
                console.log('Cart cleared successfully on backend');
                // Refetch cart state after clearing
                refetchCart(); 
            } else {
                throw new Error(response.data.message || 'Failed to clear cart on the backend');
            }
        } catch (error) {
            console.error('Error clearing cart:', error);
            Swal.fire('Error', 'Could not clear the cart', 'error');
        }
    };

    if (isLoading) {
        return <div>Loading payments...</div>; // Loading state
    }

    if (isError) {
        console.error('Error fetching payments:', error);
        return <div>Error fetching payments: {error.message}</div>; // Error handling
    }

    const filteredPayments = payments.filter(payment => payment.status === "success");

    return (
        <div>
            <h2 className="md:text-3xl text-xl md:mb-5 ml-2">Total Payments: {filteredPayments.length}</h2>

            <div className="overflow-x-auto w-full lg:w-full">
                <table className="hidden lg:table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Price</th>
                            <th>Payment Id</th>
                            <th>Status</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPayments.map((payment, index) => (
                            <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>${parseFloat(payment.amount).toFixed(2)}</td>
                                <td className="break-all">{payment.paymentId}</td>
                                <td>{payment.status}</td>
                                <td>
  <button className="bg-[#4864EC] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
    Click Here
  </button>
</td>

                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="lg:hidden grid grid-cols-1 gap-4">
                    {filteredPayments.map((payment, index) => (
                        <div key={payment._id} className="p-4 border rounded-md">
                            <h3>{index + 1}</h3>
                            <p>Price: ${parseFloat(payment.amount).toFixed(2)}</p>
                            <p>Payment ID: {payment.paymentId}</p>
                            <p>Status: {payment.status}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;
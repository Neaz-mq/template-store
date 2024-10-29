import React, { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [, refetchCart] = useCart(); // Renamed for clarity
    
    const [hasShownSuccessAlert, setHasShownSuccessAlert] = useState(false);
    const [hasFailedPayments, setHasFailedPayments] = useState(false);

    const { data: payments = [], isLoading, isError, error } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    });

    useEffect(() => {
        if (isLoading || isError) return;

        const hasSuccessfulPayments = payments.some(payment => payment.status === "success");
        const hasFailedPaymentsInData = payments.some(payment => payment.status === "failed");

        // Show alert for failed payments
        if (hasFailedPaymentsInData && !hasFailedPayments) {
            setHasFailedPayments(true);
            Swal.fire('Payment Failed', 'Unfortunately, your payment could not be processed. Please try again.', 'error');
        }
        
        // Show alert for successful payments only once
        if (hasSuccessfulPayments && !hasShownSuccessAlert) {
            setHasShownSuccessAlert(true);
            Swal.fire({
                title: 'Payment Successful',
                text: 'Your payment has been processed successfully!',
                icon: 'success'
            }).then(() => {
                clearCart();
            });
        }
    }, [isLoading, isError, payments, hasShownSuccessAlert, hasFailedPayments]);

    const clearCart = async () => {
        try {
            await axiosSecure.post('/clear-cart', { email: user.email });
            console.log('Cart cleared successfully on backend');
            refetchCart(); // Refresh cart state
        } catch (error) {
            console.error('Error clearing cart:', error);
            Swal.fire('Error', 'Could not clear the cart', 'error');
        }
    };

    if (isLoading) {
        return <div>Loading payments...</div>;
    }

    if (isError) {
        console.error('Error fetching payments:', error);
        return <div>Error fetching payments: {error.message}</div>;
    }

    const filteredPayments = payments.filter(payment => payment.status === "success" || payment.status === "failed");

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
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPayments.map((payment, index) => (
                            <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>${parseFloat(payment.amount).toFixed(2)}</td>
                                <td className="break-all">{payment.paymentId}</td>
                                <td>{payment.status}</td>
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

import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import { useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';
import { useEffect } from "react";

const PaymentHistory = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [, refetch] = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the cart on the frontend after payment success
    refetch(); // Refetches the cart from the backend

    // Display a success message
    Swal.fire('Success', 'Your payment was successful, and your cart has been cleared!', 'success');
  }, [refetch]);

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    });
    

    return (

        <div>

            <h2 className="md:text-3xl text-xl md:mb-5 ml-2">Total Payments: {payments.length}</h2>

            <div className="overflow-x-auto w-full lg:w-full">
                <table className="hidden lg:table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Price</th>
                            <th>Payment Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>${parseFloat(payment.amount).toFixed(2)}</td> {/* Aligning with MongoDB field `amount` */}
                                <td className="break-all">{payment.paymentId}</td> {/* Aligning with MongoDB field `paymentId` */}
                                <td>{payment.status}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>

                <div className="lg:hidden grid grid-cols-1 gap-4">
                {payments.map((payment, index) => (
                            <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>${parseFloat(payment.amount).toFixed(2)}</td> {/* Aligning with MongoDB field `amount` */}
                                <td className="break-all">{payment.paymentId}</td> {/* Aligning with MongoDB field `paymentId` */}
                                <td>{payment.status}</td>
                            </tr>
                        ))}
                </div>
            </div>

        </div>
    );
};

export default PaymentHistory;

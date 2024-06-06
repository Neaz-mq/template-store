import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

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
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>${payment.price.toFixed(2)}</td>
                                <td className="break-all">{payment.transactionId}</td>
                                <td>{payment.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="lg:hidden grid grid-cols-1 gap-4">
                    {payments.map((payment, index) => (
                        <div key={payment._id} className="card bg-base-100 shadow-md p-4">
                            <h3 className="font-bold">Payment {index + 1}</h3>
                            <p><span className="font-semibold">Price:</span> ${payment.price.toFixed(2)}</p>
                            <p className="break-all"><span className="font-semibold">Transaction Id:</span> {payment.transactionId}</p>
                            <p><span className="font-semibold">Status:</span> {payment.status}</p>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default PaymentHistory;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentsHistory = () => {
    const [payments, setPayments] = useState([]);

    // Fetch payments data from the backend
    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await axios.get('https://template-store-server.vercel.app/payments');
                setPayments(response.data); // Assume response.data contains an array of payment objects
            } catch (error) {
                console.error('Error fetching payments:', error);
            }
        };

        fetchPayments();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Payment History</h1>
            <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">No.</th>
                        <th className="border border-gray-300 px-4 py-2">Customer Email</th>
                        <th className="border border-gray-300 px-4 py-2">Payment ID</th>
                        <th className="border border-gray-300 px-4 py-2">Amount</th>
                        <th className="border border-gray-300 px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) => (
                        <tr key={payment._id}>
                            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                            <td className="border border-gray-300 px-4 py-2">{payment.cus_email}</td>
                            <td className="border border-gray-300 px-4 py-2">{payment.paymentId}</td>
                            <td className="border border-gray-300 px-4 py-2">{payment.amount}</td>
                            <td
                                className={`border border-gray-300 px-4 py-2 ${
                                    payment.status === 'success'
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                }`}
                            >
                                {payment.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentsHistory;

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [cart, refetchCart] = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const hasShownSuccessAlertRef = useRef(false);

  const { data: payments = [], isLoading, isError, error } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  useEffect(() => {
    hasShownSuccessAlertRef.current = false;
    if (isLoading || isError) return;
    const hasSuccessfulPayments = payments.some(
      (payment) => payment.status === "success"
    );
    const queryParams = new URLSearchParams(location.search);
    const fromPaymentSuccess = queryParams.get("fromPaymentSuccess");

    if (fromPaymentSuccess && hasSuccessfulPayments && !hasShownSuccessAlertRef.current) {
      hasShownSuccessAlertRef.current = true;
      Swal.fire({
        title: "Payment Successful",
        text: "Your payment has been processed successfully!",
        icon: "success",
      }).then(() => {
        clearCart();
        const newSearchParams = new URLSearchParams(location.search);
        newSearchParams.delete("fromPaymentSuccess");
        navigate(`${location.pathname}?${newSearchParams.toString()}`, { replace: true });
      });
    }
  }, [isLoading, isError, payments, location, navigate]);

  const clearCart = async () => {
    if (!user.email) return console.error("User email is not available");
    try {
      const response = await axiosSecure.post("/clear-cart", { email: user.email });
      if (response.data.success) refetchCart();
      else throw new Error(response.data.message || "Failed to clear cart");
    } catch (error) {
      Swal.fire("Error", "Could not clear the cart", "error");
    }
  };

  if (isLoading) return <div className="text-center text-lg">Loading payments...</div>;
  if (isError) return <div className="text-red-500">Error: {error.message}</div>;

  const filteredPayments = payments.filter((payment) => payment.status === "success");

  const handleFileSelection = (url) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-5"
    >
      <h2 className="md:text-3xl text-xl font-bold text-gray-800 mb-5 ml-2">
        Total Payments: {filteredPayments.length}
      </h2>

      <motion.div className="overflow-x-auto w-full lg:w-full">
        <motion.table
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden lg:table table-auto border rounded-md shadow-lg"
        >
          <thead className="bg-blue-500 ">
            <tr className="text-white">
              <th className="p-3">#</th>
              <th className="p-3">Price</th>
              <th className="p-3">Payment Id</th>
              <th className="p-3">Status</th>
              <th className="p-3">Download</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((payment, index) => (
              <motion.tr
                key={payment._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="hover:bg-gray-100 transition-all duration-300"
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3">${parseFloat(payment.amount).toFixed(2)}</td>
                <td className="p-3 break-all">{payment.paymentId}</td>
                <td className="p-3 text-green-600 font-semibold">{payment.status}</td>
                <td className="p-3">
                  <select
                    className="p-2 border rounded-md bg-white text-blue-500 transition-all duration-300 hover:bg-blue-100"
                    onChange={(e) => handleFileSelection(e.target.value)}
                    defaultValue=""
                  >
                    <option value="" disabled>Select File</option>
                    {payment.records.map((link, idx) => (
                      <option key={idx} value={link}>Template {idx + 1} - Open</option>
                    ))}
                  </select>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>

        <div className="lg:hidden grid grid-cols-1 gap-4">
          {filteredPayments.map((payment, index) => (
            <motion.div
              key={payment._id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 border rounded-md shadow-md bg-white hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-bold">#{index + 1}</h3>
              <p className="text-gray-700">Price: ${parseFloat(payment.amount).toFixed(2)}</p>
              <p className="text-gray-700 break-all">Payment ID: {payment.paymentId}</p>
              <p className="text-green-600 font-semibold">Status: {payment.status}</p>
              <div className="mt-2">
                <select
                  className="p-2 border rounded-md bg-white text-blue-500 transition-all duration-300 hover:bg-blue-100"
                  onChange={(e) => handleFileSelection(e.target.value)}
                  defaultValue=""
                >
                  <option value="" disabled>Select File</option>
                  {payment.records.map((link, idx) => (
                    <option key={idx} value={link}>Template {idx + 1} - Open</option>
                  ))}
                </select>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PaymentHistory;

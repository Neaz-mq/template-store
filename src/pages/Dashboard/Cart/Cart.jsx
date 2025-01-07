import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";


const Cart = () => {
    const [cart, refetch] = useCart();

    // Calculate total price based on the type of item
    const totalPrice = cart.reduce((total, temp) => {
        const itemPrice = temp.price === "free" ? 0 : parseFloat(temp.price);
        return isNaN(itemPrice) ? total : total + itemPrice;
    }, 0);

    const { user } = useAuth();

    const handleBuyNow = async () => {
        if (totalPrice <= 0) {
            Swal.fire('Invalid Amount', 'Total price must be greater than zero.', 'error');
            return;
        }
        try {
            const response = await axios.post('https://template-store-server.vercel.app/create-payment', {
                amount: totalPrice,
                customerName: user.name,
                customerEmail: user.email,
                successUrl: 'http://localhost:5173/dashboard/paymentHistory', // Ensure this matches your route
                failUrl: 'http://localhost:5173/dashboard/fail-payment',
                cancelUrl: 'http://localhost:5173/dashboard/cancel-payment',
            });
            
            if (response.data.paymentUrl) {
                window.location.href = response.data.paymentUrl; // Redirect to SSLCommerz payment gateway
            }
        } catch (error) {
            console.error('Error during payment initiation:', error);
        }
    };

    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your template has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };

    return (
        <div>
            <div>
                <Helmet>
                    <title>Prographr | Cart</title>
                </Helmet>
            </div>

            <div className="px-4 lg:px-0">
                <div className="flex flex-col items-center mb-8 space-y-4 lg:space-y-0 lg:flex-row lg:justify-evenly lg:items-center">
                    <h2 className="text-xl lg:text-4xl">Templates: {cart.length}</h2>
                    <h2 className="text-xl lg:text-4xl">Total Price: ${totalPrice.toFixed(2)}</h2>
                    {cart.length ? (
                        <button onClick={handleBuyNow} className="btn btn-primary">Buy Now</button>
                    ) : (
                        <button disabled className="btn btn-primary">Buy Now</button>
                    )}
                </div>

                {/* Table view for larger screens */}
                <div className="hidden lg:block overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Type</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((temp, index) => (
                                <tr key={temp._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={temp.image} alt={temp.name} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{temp.type}</td>
                                    <td>${temp.price}</td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(temp._id)}
                                            className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-red-600" />
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Card view for smaller screens */}
                <div className="lg:hidden space-y-4">
                    {cart.map((temp, index) => (
                        <div key={temp._id} className="card bg-base-100 shadow-xl p-4">
                            <div className="flex items-center gap-4">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={temp.image} alt={temp.name} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-sm font-bold">{temp.name}</h2>
                                    <p className="text-sm">Price: ${temp.price}</p>
                                    <div className="flex justify-end mt-2">
                                        <button
                                            onClick={() => handleDelete(temp._id)}
                                            className="btn btn-ghost btn-sm">
                                            <FaTrashAlt className="text-red-600" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cart;
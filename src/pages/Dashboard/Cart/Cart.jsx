import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart();
    
    // Calculate total price based on the type of item
    const totalPrice = cart.reduce((total, temp) => {
        // Check if the price is "free" or numeric
        const itemPrice = temp.price === "free" ? 0 : parseFloat(temp.price);
        // Check if itemPrice is a valid number, otherwise add 0
        return isNaN(itemPrice) ? total : total + itemPrice;
    }, 0);


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
                    })
            }
        });
    }
    
   
    return (
        <div>
            <div className="flex justify-evenly mb-8">
                <h2 className="text-4xl">Templates: {cart.length}</h2>
                <h2 className="text-xl lg:text-4xl">Total Price: ${totalPrice.toFixed(2)}</h2>
                <button className="btn btn-primary">Pay</button>
            </div>
            <div className="overflow-x-auto w-1/2 lg:w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
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
                                                <img src={temp.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{temp.name}</td>
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
        </div>
    );
};

export default Cart;

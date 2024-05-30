import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    }

    const handleDeleteUser = user => {
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
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    }

    return (
        <div className="px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center sm:flex-row sm:justify-between mb-6">
                <h2 className="hidden md:block text-2xl sm:text-3xl font-semibold">All Users</h2>
                <h2 className="text-xl sm:text-3xl font-semibold">Total users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <div className="max-w-full overflow-hidden">
                    {users.length > 0 && (
                        <div className="grid grid-cols-1 sm:hidden gap-6">
                            {users.map((user, index) => (
                                <div key={user._id} className="p-6 border border-gray-200 rounded-lg shadow-md">
                                    <div className="mb-4 text-sm text-left mr-2 -ml-4">
                                        <strong>No.:</strong> {index + 1}
                                    </div>
                                    <div className="mb-4 text-sm text-left mr-2 -ml-4">
                                        <strong>Name:</strong> {user.name}
                                    </div>
                                    <div className="mb-4 text-sm text-left mr-2 -ml-4">
                                        <strong>Role:</strong> {user.role === 'admin' ? 'Admin' : (
                                            <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="btn btn-sm bg-orange-500 text-white mt-2 md:mt-0">
                                                <FaUsers />
                                            </button>
                                        )}
                                    </div>
                                    <div className="text-sm text-left mr-2 -ml-2">
                                        <button
                                            onClick={() => handleDeleteUser(user)}
                                            className="btn btn-ghost btn-sm text-red-600">
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {users.length > 0 && (
                        <table className="min-w-full divide-y divide-gray-200 hidden sm:table">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Email</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {users.map((user, index) => (
                                    <tr key={user._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">{user.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {user.role === 'admin' ? 'Admin' : (
                                                <button
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className="btn btn-sm bg-orange-500 text-white">
                                                    <FaUsers />
                                                </button>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button
                                                onClick={() => handleDeleteUser(user)}
                                                className="btn btn-ghost btn-sm text-red-600">
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllUsers;

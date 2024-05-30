import React, { useState } from "react";
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

    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

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

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const nextPage = () => {
        if (currentPage < Math.ceil(users.length / usersPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center sm:flex-row sm:justify-between mb-6">
                <h2 className="hidden md:block text-2xl sm:text-3xl font-semibold">All Users</h2>
                <h2 className="text-xl sm:text-3xl font-semibold">Total users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <div className="max-w-full overflow-hidden">
                    {currentUsers.length > 0 && (
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {currentUsers.map((user, index) => (
                                    <tr key={user._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">{indexOfFirstUser + index + 1}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
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
            {/* Pagination */}
            <div className="pagination mt-8 flex justify-center">
                <button
                    onClick={prevPage}
                    className={`px-2 py-2 mx-1 rounded-full focus:outline-none focus:shadow-outline ${currentPage === 1
                            ? 'bg-gray-200 text-gray-700 cursor-not-allowed'
                            : 'bg-blue-500 text-white'
                        }`}
                    disabled={currentPage === 1}
                >
                    <span className="mr-1">Previous</span>
                </button>

                {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => paginate(i + 1)}
                        className={`px-4 py-2 mx-1 rounded-full focus:outline-none focus:shadow-outline ${currentPage === i + 1
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800'
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    onClick={nextPage}
                    className={`px-4 py-2 mx-1 rounded-full focus:outline-none focus:shadow-outline ${currentPage === Math.ceil(users.length / usersPerPage)
                            ? 'bg-gray-200 text-gray-700 cursor-not-allowed'
                            : 'bg-blue-500 text-white'
                        }`}
                    disabled={currentPage === Math.ceil(users.length / usersPerPage)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AllUsers;

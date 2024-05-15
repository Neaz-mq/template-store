
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllAdmins = () => {
    const axiosSecure = useAxiosSecure();
    const { data: admins, error, isLoading } = useQuery({
        queryKey: 'admins',
        queryFn: async () => {
            try {
                const response = await axiosSecure.get('/admins');
                return response.data;
            } catch (error) {
                console.error('Error fetching admin users:', error);
                throw new Error('Error fetching admin users');
            }
        }
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <div className="flex justify-evenly my-4 pb-8">
                <h2 className="text-3xl font-semibold">All Admins</h2>
                <h2 className="text-3xl font-semibold">Total Admins: {admins.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>


                        </tr>
                    </thead>
                    <tbody>
                        {admins.map((admin, index) => (
                            <tr key={admin._id} className="border-b-2 border-gray-200">
                                <th className="py-4">{index + 1}</th>
                                <td className="py-4">{admin._id}</td>
                                <td className="py-4">{admin.name}</td>
                                <td className="py-4">{admin.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllAdmins;

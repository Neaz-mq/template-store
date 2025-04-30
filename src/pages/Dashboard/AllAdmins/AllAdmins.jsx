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

        <div className="p-4 md:p-8 bg-white rounded-lg shadow-lg overflow-x-hidden">
            <div className="flex flex-col md:flex-row justify-between items-center my-4 pb-8 space-y-4 md:space-y-0">
                <h2 className="hidden md:block text-2xl md:text-3xl font-semibold text-center md:text-left">All Admins</h2>
                <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">Total Admins: {admins.length}</h2>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="hidden md:table table-auto w-full">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">No.</th>
                            <th className="py-3 px-6 text-left">ID</th>
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left">Email</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {admins.map((admin, index) => (
                            <tr key={admin._id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap font-medium">{index + 1}</td>
                                <td className="py-3 px-6 text-left break-all font-medium">{admin._id}</td>
                                <td className="py-3 px-6 text-left font-medium">{admin.name}</td>
                                <td className="py-3 px-6 text-left break-all font-medium">{admin.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="md:hidden space-y-6">
                    {admins.map((admin, index) => (
                        <div key={admin._id} className="border border-gray-200 rounded-lg p-4 shadow-sm">
                            <div className="flex justify-between items-center text-sm">
                                <span className="font-semibold">No.</span>
                                <span>{index + 1}</span>
                            </div>
                            <div className="mt-2 text-sm">
                                <span className="font-semibold">ID:</span>
                                <span className="block break-all">{admin._id}</span>
                            </div>
                            <div className="mt-2 text-sm">
                                <span className="font-semibold">Name:</span>
                                <span className="block">{admin.name}</span>
                            </div>
                            <div className="mt-2 text-sm">
                                <span className="font-semibold">Email:</span>
                                <span className="block break-all">{admin.email}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllAdmins;

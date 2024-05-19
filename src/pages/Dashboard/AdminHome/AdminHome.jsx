import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaBook, FaList, FaUsers } from 'react-icons/fa';

const StatCard = ({ icon, title, value }) => (
    <div className="stat flex flex-col items-center w-full lg:w-1/5 p-4 bg-white rounded-lg shadow-lg border-4 border-transparent hover:border-gradient-to-r hover:from-purple-400 hover:to-blue-400 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 transition-all duration-300">
        <div className="stat-figure text-secondary mb-2">
            {icon}
        </div>
        <div className="stat-title text-lg font-semibold mb-1">{title}</div>
        <div className="stat-value text-2xl lg:text-3xl font-bold">{value}</div>
    </div>
);

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = {}, error, isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading stats</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-xl lg:text-3xl mb-4">
                <span>Hi, Welcome </span>
                {user?.displayName ? user.displayName : 'Back'}
            </h2>
            <div className="stats flex flex-col lg:flex-row justify-center lg:justify-between gap-4 mt-6 lg:space-x-4">
                <StatCard
                    icon={<FaUsers className='text-3xl lg:text-4xl text-blue-500' />}
                    title="Users"
                    value={stats.users}
                />
                <StatCard
                    icon={<FaBook className='text-3xl lg:text-4xl text-green-500' />}
                    title="Templates"
                    value={stats.templates}
                />
                <StatCard
                    icon={<FaList className='text-3xl lg:text-4xl text-red-500' />}
                    title="Free Templates"
                    value={stats.free}
                />
                <StatCard
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 lg:w-10 lg:h-10 stroke-current text-yellow-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>}
                    title="Orders"
                    value={stats.orders}
                />
                <StatCard
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 lg:w-10 lg:h-10 stroke-current text-purple-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m4 0h-1v-4h-1m1-4H8a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2v-7h-1V4a2 2 0 00-2-2zm-1 0h-4"></path></svg>}
                    title="Revenue"
                    value={`$${stats.revenue}`}
                />
            </div>
        </div>
    );
};

export default AdminHome;

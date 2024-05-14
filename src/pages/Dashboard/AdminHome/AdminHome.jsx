import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaBook,  FaList, FaUsers } from 'react-icons/fa';



const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        }
    })



     
      
     

    return (
        <div>
            <h2 className=" text-xl lg:text-3xl">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <div className="stats shadow w-1/2 lg:w-full mt-6 ">

                <div className="stat w-1/2">
                    <div className="stat-figure text-secondary">
                       
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${stats.revenue}</div>
                    
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className='text-3xl'></FaUsers>
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{stats.users}</div>
                    
                </div>


                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaBook className='text-3xl'></FaBook>
                    </div>
                    <div className="stat-title">Templates</div>
                    <div className="stat-value">{stats.templates}</div>
                    
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaList className='text-3xl'></FaList>
                    </div>
                    <div className="stat-title">Free Templates</div>
                    <div className="stat-value">{stats.free}</div>
                    
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                  
                </div>

            </div>

           
            </div>
            
        
    );
};

export default AdminHome;
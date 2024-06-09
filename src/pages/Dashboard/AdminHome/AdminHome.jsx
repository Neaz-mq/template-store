import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaBook, FaBullseye, FaList, FaUsers } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
    const currentMonth = new Date().toLocaleString('default', { month: 'short' });
    const [selectedMonth, setSelectedMonth] = useState("This Month");

    const { data: stats = {}, error, isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    const data = [
        { name: 'Jan', orders: 4000, earning: 2400 },
        { name: 'Feb', orders: 3000, earning: 1398 },
        { name: 'Mar', orders: 2000, earning: 9800 },
        { name: 'Apr', orders: 2780, earning: 3908 },
        { name: 'May', orders: 1890, earning: 4800 },
        { name: 'Jun', orders: 2390, earning: 3800 },
        { name: 'Jul', orders: 3490, earning: 4300 },
        { name: 'Aug', orders: 4000, earning: 2400 },
        { name: 'Sep', orders: 3000, earning: 1398 },
        { name: 'Oct', orders: 2000, earning: 9800 },
        { name: 'Nov', orders: 2780, earning: 3908 },
        { name: 'Dec', orders: 1890, earning: 4800 },
    ];

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    const filteredData = selectedMonth === "This Month" 
        ? data.filter(d => d.name === currentMonth)
        : data.filter(d => d.name === selectedMonth);

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen">Error loading stats: {error.message}</div>;
    }

    return (
        <div>
            <Helmet>
                <title>Prographr | Admin</title>
                <meta name="description" content="Find high-quality templates for your projects at the Template Store. Choose from a variety of options including agency templates, graphics templates, and more." />
            </Helmet>
            <div className="md:flex hidden justify-end mr-8 mb-2 -mt-2">
                <select value={selectedMonth} onChange={handleMonthChange} className="pt-2 pb-2 pl-4 pr-4 border rounded-md">
                    <option value="This Month">This Month</option>
                    {data.map(d => (
                        <option key={d.name} value={d.name}>{d.name}</option>
                    ))}
                </select>
            </div>

            <div className='-mt-16'>
                <h2 className="-ml-2 lg:text-2xl text-xl font-medium text-[#2F1C6A] mt-10 md:mt-0">Good day! Prographr</h2>
                <p className="text-gray-400 font-medium md:text-lg text-base -ml-2 mt-2">Wish you have less work today!</p>
            </div>
           
            <div className="stats flex flex-col lg:flex-row justify-center lg:justify-between gap-4  lg:space-x-4 bg-[#F3F4F6] p-4 rounded-lg mr-4 -ml-6 ">
                <StatCard
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 lg:w-10 lg:h-10 stroke-current text-yellow-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>}
                    title="Product Sold"
                    value={stats.orders}
                />
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
                    icon={<FaBullseye className='text-3xl lg:text-4xl text-black-500' />}
                    title="Product View"
                    value="256"
                />
                <div className='hidden'>
                    <StatCard
                        icon={<FaList className='text-3xl lg:text-4xl text-red-500' />}
                        title="Free Templates"
                        value={stats.free}
                    />
                </div>
                <StatCard
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 lg:w-10 lg:h-10 stroke-current text-purple-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m4 0h-1v-4h-1m1-4H8a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2v-7h-1V4a2 2 0 00-2-2zm-1 0h-4"></path></svg>}
                    title="Total Earning"
                    value={`$${stats.revenue}`}
                />
            </div>

            <div className=" md:hidden justify-end mr-10 -ml-2 mb-2 mt-4 mb-4 ">
                <select value={selectedMonth} onChange={handleMonthChange} className="pt-2 pb-2 pl-4 pr-4 border rounded-md">
                    <option value="This Month">This Month</option>
                    {data.map(d => (
                        <option key={d.name} value={d.name}>{d.name}</option>
                    ))}
                </select>
            </div>

            <div className='hidden md:block w-full -mt-4'>
            <div className="bg-white p-3  rounded-lg shadow-lg md:mr-8 md:mt-10 md:-ml-1">
                <h4 className="text-base font-semibold text-gray-700 mb-4  ">Monthly Statistics</h4>
              
               <div className='ml-16'>

               <ResponsiveContainer width="80%" height={232}>
                    <BarChart data={filteredData} margin={{ top: 6, right: 30, left: 40, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="orders" fill="#8884d8" />
                        <Bar dataKey="earning" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
               </div>
            </div>
            </div>

            <div className='md:hidden w-full -mt-4 -ml-4'>
      <div className="bg-white p-3 rounded-lg shadow-lg mt-10">
        <h4 className="text-base font-semibold text-gray-700 mb-4">Monthly Statistics</h4>
        <div className='w-full flex justify-center'>
          <div className='w-full md:w-3/4'>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={filteredData} margin={{ top: 6, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="orders" fill="#8884d8" />
                <Bar dataKey="earning" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
            </div>
            
    );
};

export default AdminHome;

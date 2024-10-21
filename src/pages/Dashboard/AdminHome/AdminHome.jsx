import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaBook, FaList, FaUsers } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const StatCard = ({ icon, title, value }) => (
    <div className="stat flex flex-col items-center w-full lg:w-1/5 p-4 bg-white rounded-lg shadow-lg border-4 border-transparent hover:border-gradient-to-r hover:from-purple-400 hover:to-blue-400 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 transition-all duration-300 font-roboto">
        <div className="stat-figure text-secondary mb-2">
            {icon}
        </div>
        <div className="stat-title text-lg font-medium mb-1">{title}</div>
        <div className="stat-value text-2xl lg:text-3xl font-medium">{value}</div>
    </div>
);

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // Default to current month
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Default to current year

    // Fetch all-time stats including visits count
    const { data: allTimeStats = {}, error: allTimeError, isLoading: isAllTimeLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    useEffect(() => {
        if (sessionStorage.getItem('visit') === null) {
            axios.post('http://localhost:5000/api/visit')
                .then(response => {
                    console.log('Visit count updated:', response.data.visits);
                })
                .catch(error => {
                    console.error('Error updating visit count:', error);
                });
            sessionStorage.setItem('visit', 'true');
        }
    }, []);


    // Fetch monthly stats
    const { data: monthlyStats = {}, error: monthlyError, isLoading: isMonthlyLoading } = useQuery({
        queryKey: ['monthly-stats', { month: selectedMonth, year: selectedYear }],
        queryFn: async () => {
            const res = await axiosSecure.get('/monthly-stats', {
                params: { month: selectedMonth, year: selectedYear }
            });
            return res.data;
        },
        enabled: !!selectedMonth && !!selectedYear // Ensure query is enabled only if month and year are selected
    });

    // If either query is loading
    if (isAllTimeLoading || isMonthlyLoading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    // If either query fails
    if (allTimeError || monthlyError) {
        return <div className="flex justify-center items-center h-screen">Error loading stats: {allTimeError?.message || monthlyError?.message}</div>;
    }

    const monthlyChartData = [
        {
            name: `0${selectedMonth}/${selectedYear}`,
            orders: monthlyStats.orders,
            earning: monthlyStats.revenue,
        }
    ];

    return (
        <div className="relative">
            <Helmet>
                <title>Prographr | Admin</title>
                <meta name="description" content="Admin dashboard for Prographr, view monthly statistics and performance." />
            </Helmet>

            {/* Greeting Section */}
            <div className='-mt-12 font-roboto'>
                <h2 className="-ml-2 lg:text-2xl text-xl font-medium text-[#2F1C6A] mt-10 md:mt-16">Good day! Prographr</h2>
                <p className="text-gray-400 font-medium md:text-lg text-base -ml-2 mt-2">Wish you have less work today!</p>
            </div>

            {/* Statistics Cards */}
            <div className="stats flex flex-col lg:flex-row justify-center lg:justify-between gap-1 lg:space-x-2 bg-[#F3F4F6] p-4 rounded-lg mr-4 -ml-6 mt-12">

                <StatCard
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 lg:w-10 lg:h-10 stroke-current text-yellow-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>}
                    title="Product Sold"
                    value={allTimeStats.orders}
                />

                <StatCard
                    icon={<FaUsers className='text-3xl lg:text-4xl text-blue-500' />}
                    title="Users"
                    value={allTimeStats.users}
                />

                <StatCard
                    icon={<FaBook className='text-3xl lg:text-4xl text-green-500' />}
                    title="Templates"
                    value={allTimeStats.templates}
                />

                <StatCard
                    icon={<FaList className='text-3xl lg:text-4xl text-red-500' />}
                    title="Free Templates"
                    value={allTimeStats.free}
                />

                <StatCard
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 lg:w-10 lg:h-10 stroke-current text-purple-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m4 0h-1v-4h-1m1-4H8a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2v-7h-1V4a2 2 0 00-2-2zm-1 0h-4"></path></svg>}
                    title="Total Earning"
                    value={`$${allTimeStats.revenue}`}
                />

                <StatCard
                    icon={<FaUsers className='text-3xl lg:text-4xl text-teal-500' />}
                    title="Total Visits"
                    value={allTimeStats.visits}
                />
            </div>

            {/* Monthly Statistics Chart */}
            <div className="w-full mt-8">
                <div className="bg-white p-3 rounded-lg shadow-lg md:mr-8 md:mt-10 md:-ml-1">
                    <h4 className="text-base font-roboto font-semibold text-gray-700 mb-4">Monthly Statistics</h4>
                    <div className='ml-16'>
                        <ResponsiveContainer width="80%" height={232}>
                            <BarChart data={monthlyChartData} margin={{ top: 6, right: 30, left: 40, bottom: 5 }}>
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

            {/* Month and Year Selector */}

            <div className="absolute top-0 right-0 p-4 -mt-2 mr-3">
                <div className="bg-gradient-to-r from-purple-300 to-green-300 p-1 rounded-lg shadow-lg">
                    <div className="bg-white p-4 rounded-lg">
                        <div className="flex space-x-4">
                            <div className="flex flex-col">
                                <label htmlFor="month" className="font-medium text-gray-700 mb-1">Select Month:</label>
                                <select
                                    id="month"
                                    value={selectedMonth}
                                    onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                                    className="p-2 border rounded-lg focus:outline-none transition-all duration-200 hover:shadow-lg focus:ring-2 focus:ring-blue-400"
                                >
                                    {[...Array(12)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {new Date(0, i).toLocaleString('en', { month: 'long' })}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="year" className="font-medium text-gray-700 mb-1">Select Year:</label>
                                <select
                                    id="year"
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                                    className="p-2 border rounded-lg focus:outline-none transition-all duration-200 hover:shadow-lg focus:ring-2 focus:ring-blue-400"
                                >
                                    {[...Array(5)].map((_, i) => (
                                        <option key={i} value={new Date().getFullYear() - i}>
                                            {new Date().getFullYear() - i}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AdminHome;
import React, { useEffect, useState } from 'react';
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TemplateDownload = () => {
    const { user } = useAuth(); // Access logged-in user's information
    const axiosSecure = useAxiosSecure();
    const [purchasedTemplates, setPurchasedTemplates] = useState([]);

    useEffect(() => {
        // Fetch purchased templates for the logged-in user
        const fetchPurchasedTemplates = async () => {
            try {
                const response = await axiosSecure.get(`/purchased-templates/${user.email}`);
                setPurchasedTemplates(response.data);
            } catch (error) {
                console.error("Error fetching purchased templates:", error);
            }
        };

        fetchPurchasedTemplates();
    }, [axiosSecure, user.email]);

    return (
        <div>
            <h1 className='text-4xl'>Download Template</h1>
            
            <div className="overflow-x-auto w-full lg:w-full mt-16">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Id</th>
                            <th>Type</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchasedTemplates.map((template, index) => (
                            <tr key={template._id}>
                                <td>{index + 1}</td>
                                <td>{template._id}</td>
                                <td>{template.type}</td>
                                <td>${parseFloat(template.amount).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TemplateDownload;

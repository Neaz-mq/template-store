import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TemplateDownload = () => {
    const { paymentId } = useParams(); // Get paymentId from the URL
    const [paymentData, setPaymentData] = useState(null); // Initialize state as null for loading state
    const [loading, setLoading] = useState(true); // State to track loading status
    const [error, setError] = useState(null); // State to track any errors

    useEffect(() => {
        const fetchPaymentData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/payments/${paymentId}`);
                console.log("Fetched Payment Data:", response.data); // Log the response data for debugging
                setPaymentData(response.data);
            } catch (error) {
                console.error('Error fetching payment data:', error);
                setError('Error fetching payment data. Please try again later.'); // Set error message
            } finally {
                setLoading(false); // Set loading to false regardless of success or failure
            }
        };

        fetchPaymentData();
    }, [paymentId]);

    if (loading) {
        return <div>Loading payment data...</div>; // Loading state
    }

    if (error) {
        return <div>{error}</div>; // Display error message if there's an error
    }

    // Safeguard to check if tempId and types are defined and are arrays
    if (!paymentData || !Array.isArray(paymentData.tempId) || !Array.isArray(paymentData.types)) {
        return <div>No templates found for this payment.</div>; // Show message if data is not as expected
    }

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
                        </tr>
                    </thead>
                    <tbody>
                        {paymentData.tempId.map((tempId, idx) => (
                            <tr key={`${paymentData._id}-${idx}`}>
                                <td>{idx + 1}</td>
                                <td>{tempId}</td>
                                <td>{paymentData.types[idx] || 'N/A'}</td> {/* Use 'N/A' if types[idx] is undefined */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TemplateDownload;

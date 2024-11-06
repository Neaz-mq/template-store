import { useLoaderData } from 'react-router-dom';

const TemplateDownload = () => {
    const paymentData = useLoaderData(); // Fetch payment data from the loader

    if (!paymentData) {
        return <div>No payment data found.</div>; // Handle the case if no payment data is found
    }

    // Handle the case of multiple templates being part of a single payment
    const renderTemplateRows = (tempIds, types) => {
        return tempIds.map((tempId, idx) => (
            <tr key={`${paymentData._id}-${idx}`}>
                <td>{idx + 1}</td>
                <td>{tempId}</td>
                <td>{types[idx] || 'N/A'}</td>
            </tr>
        ));
    };

    return (
        <div>
            <h1 className='text-4xl'>Download Template</h1>

            <div className="overflow-x-auto w-full lg:w-full mt-16">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Template ID</th>
                            <th>Type</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentData.tempId && paymentData.tempId.length > 0
                            ? renderTemplateRows(paymentData.tempId, paymentData.types)
                            : <tr><td colSpan="3">No templates found for this payment.</td></tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TemplateDownload;

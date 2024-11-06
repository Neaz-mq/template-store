import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const TemplateDownload = () => {
    const paymentData = useLoaderData(); // Fetch payment data from the loader
    const [selectedFile, setSelectedFile] = useState({}); // State to track selected file for each template

    if (!paymentData) {
        return <div>No payment data found.</div>; // Handle the case if no payment data is found
    }

    // Handle the case of multiple templates being part of a single payment
    const handleFileSelection = (tempId, file) => {
        setSelectedFile(prevState => ({
            ...prevState,
            [tempId]: file
        }));
    };

    const renderTemplateRows = (tempIds, types, records) => {
        return tempIds.map((tempId, idx) => (
            <tr key={`${paymentData._id}-${idx}`}>
                <td>{idx + 1}</td>
                <td>{tempId}</td>
                <td>{types[idx] || 'N/A'}</td>
                <td>
                    {/* Dropdown for selecting a file */}
                    <select
                        onChange={(e) => handleFileSelection(tempId, e.target.value)}
                        defaultValue="Select File"
                    >
                        <option disabled>Select File</option>
                        <option value="All files">All files</option>
                        {/* Render file options from records */}
                        {Array.isArray(records) &&
                            records.map((file, fileIdx) => (
                                <option key={`${tempId}-file-${fileIdx}`} value={file}>
                                    {file}
                                </option>
                            ))}
                    </select>

                    {/* Trigger automatic download when a file is selected */}
                    {selectedFile[tempId] && selectedFile[tempId] !== "All files" && (
                        <a
                            href={`/downloads/${encodeURIComponent(selectedFile[tempId])}`} // Correct path for download
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download {selectedFile[tempId]}
                        </a>
                    )}
                </td>
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
                            ? renderTemplateRows(paymentData.tempId, paymentData.types, paymentData.records)
                            : <tr><td colSpan="4">No templates found for this payment.</td></tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TemplateDownload;

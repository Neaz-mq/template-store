import { useLoaderData } from 'react-router-dom';

const TemplateDownload = () => {
    const paymentData = useLoaderData();

    const handleFileSelection = (file) => {
        // If a valid file is selected, trigger the download
        if (file && file !== "Select File") {
            const fileUrl = `/downloads/${encodeURIComponent(file)}`;

            // Check if the file exists in the `public/downloads/` directory
            fetch(fileUrl)
                .then(response => {
                    if (response.ok) {
                        // The file exists, trigger the download
                        const downloadLink = document.createElement("a");
                        downloadLink.href = fileUrl;
                        downloadLink.download = file; // This will trigger the download
                        downloadLink.style.display = "none"; // Hide the link
                        document.body.appendChild(downloadLink);
                        downloadLink.click();  // Trigger the click
                        document.body.removeChild(downloadLink); // Clean up the DOM
                    } else {
                        alert("File not found, please try again.");
                    }
                })
                .catch(() => {
                    alert("Something went wrong while trying to download the file.");
                });
        }
    };

    const renderTemplateRows = (tempIds, types, records) => {
        return tempIds.map((tempId, idx) => (
            <tr key={`${paymentData._id}-${idx}`} className="hover:bg-gray-100">
                <td className="py-4 px-6 text-center font-semibold text-gray-700">{idx + 1}</td>
                <td className="py-4 px-6 text-center text-blue-600 font-medium">{tempId}</td>
                <td className="py-4 px-6 text-center text-gray-600">{types[idx] || 'N/A'}</td>
                <td className="py-4 px-6 text-center">
                    <select
                        onChange={(e) => handleFileSelection(e.target.value)}
                        defaultValue="Select File"
                        className="bg-blue-100 text-blue-700 border border-blue-300 px-2 py-1 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                    >
                        <option disabled>Select File</option>
                        {Array.isArray(records) && records.map((file, fileIdx) => (
                            <option key={`${tempId}-file-${fileIdx}`} value={file}>
                                {file}
                            </option>
                        ))}
                    </select>
                </td>
            </tr>
        ));
    };

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Download Template</h1>
            <div className="overflow-x-auto w-full">
                <table className="table-auto w-full border border-gray-200 rounded-lg shadow-lg bg-white">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="py-3 px-4 text-center">#</th>
                            <th className="py-3 px-4 text-center">Template ID</th>
                            <th className="py-3 px-4 text-center">Type</th>
                            <th className="py-3 px-4 text-center">Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentData.tempId && paymentData.tempId.length > 0
                            ? renderTemplateRows(paymentData.tempId, paymentData.types, paymentData.records)
                            : (
                                <tr>
                                    <td colSpan="4" className="py-4 text-center text-gray-500">
                                        No templates found for this payment.
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TemplateDownload;

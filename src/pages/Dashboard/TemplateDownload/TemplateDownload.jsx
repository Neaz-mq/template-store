import { useLoaderData } from 'react-router-dom';

const TemplateDownload = () => {
    const paymentData = useLoaderData();

    const handleFileSelection = (file) => {
        if (file && file.data && file.name) {
            // Extract base64 data and MIME type
            const base64String = file.data.split(',')[1];
            const mimeType = file.data.split(';')[0].split(':')[1] || 'application/octet-stream';

            // Decode the base64 string
            const byteCharacters = atob(base64String);
            const byteArrays = [];

            for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
                const slice = byteCharacters.slice(offset, offset + 1024);
                const byteNumbers = new Array(slice.length);
                for (let i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
                byteArrays.push(new Uint8Array(byteNumbers));
            }

            // Create a Blob from the byte array
            const blob = new Blob(byteArrays, { type: mimeType });

            // Create a download link with the filename from MongoDB
            const downloadLink = document.createElement("a");
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = file.name; // Use the file name from the MongoDB record
            downloadLink.click();
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
                        onChange={(e) => {
                            const selectedFile = records[e.target.selectedIndex - 1];
                            handleFileSelection(selectedFile);
                        }}
                        defaultValue="Select File"
                        className="bg-blue-100 text-blue-700 border border-blue-300 px-2 py-1 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                    >
                        <option disabled>Select File</option>
                        {Array.isArray(records) && records.map((file, fileIdx) => (
                            <option key={`${tempId}-file-${fileIdx}`} value={file.name}>
                                {file.name} {/* Display the actual file name */}
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
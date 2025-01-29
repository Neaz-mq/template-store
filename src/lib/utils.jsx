// utils.jsx

// Utility function to format the message time
export function formatMessageTime(date) {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }
  
  // Default export (if you still want to export a default component)
  const Utils = () => {
    return (
      <div>
        {/* You can add some JSX here if needed */}
      </div>
    );
  };
  
  export default Utils;
import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import axios from "axios";

const Sidebar = ({ onSelectUser }) => {
    const [contacts, setContacts] = useState([]);
    const [showOnlineOnly, setShowOnlineOnly] = useState(false);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/users", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                    },
                });
                setContacts(response.data);
            } catch (error) {
                console.error("Failed to fetch contacts:", error);
            }
        };

        fetchContacts();
    }, []);

    const filteredContacts = showOnlineOnly
        ? contacts.filter((contact) => contact.status === "Online")
        : contacts;

    return (
        <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col bg-base-100">
            {/* Contacts Header */}
            <div className="border-b border-base-300 p-5">
                <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-medium hidden lg:block">Contacts</span>
                </div>

                {/* Online Filter Toggle */}
                <div className="mt-3 hidden lg:flex items-center gap-2">
                    <label className="cursor-pointer flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="checkbox checkbox-sm"
                            checked={showOnlineOnly}
                            onChange={() => setShowOnlineOnly(!showOnlineOnly)}
                        />
                        <span className="text-sm">Show online only</span>
                    </label>
                    <span className="text-xs text-zinc-500">
                        ({filteredContacts.filter((c) => c.status === "Online").length} online)
                    </span>
                </div>
            </div>

            {/* Contact List */}
            <div className="flex-1 overflow-y-auto py-3">
                <ul className="space-y-2">
                    {filteredContacts.map((contact) => (
                        <li
                            key={contact._id}
                            onClick={() => onSelectUser(contact)}
                            className="flex items-center gap-3 px-4 py-2 hover:bg-base-200 cursor-pointer"
                        >
                            <img
                                src={contact.photoURL || "https://via.placeholder.com/40"}
                                alt={`${contact.name}'s profile`}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="hidden lg:block">
                                <span className="font-medium">{contact.name}</span>
                                <span className="text-xs text-zinc-500 ml-3">{contact.role || "User"}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;

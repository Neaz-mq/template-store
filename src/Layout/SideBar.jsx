import { Users } from "lucide-react";

const Sidebar = () => {
    const contacts = [
        {
            name: "Abir Hasan",
            status: "Offline",
            picture: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
            name: "Niloy Khan",
            status: "Offline",
            picture: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
            name: "Mahmud Hasan",
            status: "Offline",
            picture: "https://randomuser.me/api/portraits/men/3.jpg",
        },
        {
            name: "Shakib Al Hasan",
            status: "Offline",
            picture: "https://randomuser.me/api/portraits/men/4.jpg",
        },
        {
            name: "Tamim Iqbal",
            status: "Offline",
            picture: "https://randomuser.me/api/portraits/men/5.jpg",
        },
        {
            name: "Sabbir Rahman",
            status: "Offline",
            picture: "https://randomuser.me/api/portraits/men/6.jpg",
        },
    ];

    return (
        <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200 bg-base-100">
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
                        />
                        <span className="text-sm">Show online only</span>
                    </label>
                    <span className="text-xs text-zinc-500">(0 online)</span>
                </div>
            </div>

            {/* Contact List */}
            <div className="flex-1 overflow-y-auto py-3">
                <ul className="space-y-2">
                    {contacts.map((contact, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-3 px-4 py-2 hover:bg-base-200 transition-colors cursor-pointer"
                        >
                            <img
                                src={contact.picture}
                                alt={`${contact.name}'s profile`}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="hidden lg:block">
                                <span className="font-medium text-sm">{contact.name}</span>
                                <span className="text-xs text-zinc-500 ml-3">{contact.status}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;

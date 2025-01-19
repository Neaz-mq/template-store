import { useState } from "react";
import { Users } from "lucide-react";
import NoConnectSelected from "../NoConnectSelected/NoConnectSelected";


const Connect = () => {
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  // Sample data for users
  const users = [
    {
      _id: "1",
      fullName: "John Doe",
      profilePic:
        "https://res.cloudinary.com/dzi3u164c/image/upload/v1736931115/pqjp9joyeprx49idafy0.jpg",
      isOnline: true,
    },
    {
      _id: "2",
      fullName: "Jane Smith",
      profilePic:
        "https://res.cloudinary.com/dzi3u164c/image/upload/v1736931071/dymx37ychwdggwpxhdtj.jpg",
      isOnline: false,
    },
    {
      _id: "3",
      fullName: "Michael Brown",
      profilePic:
        "https://res.cloudinary.com/dzi3u164c/image/upload/v1736851541/as8c9nvbs3bc2pniwkxm.jpg",
      isOnline: true,
    },
  ];

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => user.isOnline)
    : users;

  return (
    <div className="h-full flex">
      {/* Left Column: User List */}
      <div className="w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
        {/* Header Section */}
        <div className="border-b border-base-300 w-full p-5">
          <div className="flex items-center gap-2">
            <Users className="size-6" />
            <span className="font-medium hidden lg:block">Contact</span>
          </div>

          <div className="mt-3 hidden lg:flex items-center gap-2">
            <label className="cursor-pointer flex items-center gap-2">
              <input
                type="checkbox"
                checked={showOnlineOnly}
                onChange={(e) => setShowOnlineOnly(e.target.checked)}
                className="checkbox checkbox-sm"
                aria-label="Show online users only"
              />
              <span className="text-sm">Show online only</span>
            </label>
            <span className="text-xs text-zinc-500">
              ({users.filter((u) => u.isOnline).length} online)
            </span>
          </div>
        </div>

        {/* User List */}
        <div className="overflow-y-auto w-full py-3">
          {filteredUsers.map((user) => (
            <div
              key={user._id}
              className="w-full p-3 flex items-center gap-3 hover:bg-base-300 transition-colors"
            >
              <div className="relative mx-auto lg:mx-0">
                <img
                  src={user.profilePic || "/avatar.png"}
                  alt={`${user.fullName}'s profile picture`}
                  className="size-12 object-cover rounded-full"
                />
                {user.isOnline && (
                  <span
                    className="absolute bottom-0 right-0 size-3 bg-green-500 
                  rounded-full ring-2 ring-zinc-900"
                  />
                )}
              </div>

              <div className="hidden lg:block text-left min-w-0">
                <div className="font-medium truncate">{user.fullName}</div>
                <div className="text-sm text-zinc-400">
                  {user.isOnline ? "Online" : "Offline"}
                </div>
              </div>
            </div>
          ))}

          {filteredUsers.length === 0 && (
            <div className="text-center text-zinc-500 py-4">
              {showOnlineOnly ? "No online users" : "No users available"}
            </div>
          )}
        </div>
      </div>

      {/* Right Column: Placeholder for No Connection Selected */}
      <div className="flex-1">
        <NoConnectSelected />
      </div>
    </div>
  );
};

export default Connect;

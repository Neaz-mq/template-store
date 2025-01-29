import { create } from "zustand";
import toast from "react-hot-toast";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useChatStore = create((set, get) => {
  const axiosSecure = useAxiosSecure(); // Initialize hook outside store functions
  const { socket } = useAuth(); // Properly use useAuth to get socket connection

  return {
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,

    getUsers: async () => {
      set({ isUsersLoading: true });
      try {
        const res = await axiosSecure.get("/messages/users");
        set({ users: res.data });
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to fetch users");
      } finally {
        set({ isUsersLoading: false });
      }
    },

    getMessages: async (userId) => {
      set({ isMessagesLoading: true });
      try {
        const res = await axiosSecure.get(`/messages/${userId}`);
        set({ messages: res.data });
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to fetch messages");
      } finally {
        set({ isMessagesLoading: false });
      }
    },

    sendMessage: async (messageData) => {
      const { selectedUser, messages } = get();
      if (!selectedUser) return;
      try {
        const res = await axiosSecure.post(
          `/messages/send/${selectedUser._id}`,
          messageData
        );
        set({ messages: [...messages, res.data] });
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to send message");
      }
    },

    subscribeToMessages: () => {
      const { selectedUser } = get();
      if (!selectedUser || !socket) return;

      socket.on("newMessage", (newMessage) => {
        if (newMessage.senderId !== selectedUser._id) return;
        set({ messages: [...get().messages, newMessage] });
      });
    },

    unsubscribeFromMessages: () => {
      if (!socket) return;
      socket.off("newMessage");
    },

    setSelectedUser: (selectedUser) => set({ selectedUser }),
  };
});

export default useChatStore;

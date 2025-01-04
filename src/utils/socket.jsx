// src/utils/socket.js
import { io } from "socket.io-client";

// Create a new socket connection to the server
const socket = io("https://template-store-server.vercel.app", {
    autoConnect: false, // Prevent auto-connect until explicitly called
});

export default socket;

// src/utils/socket.js
import { io } from "socket.io-client";

// Create a new socket connection to the server
const socket = io("http://localhost:5000", {
    autoConnect: false, // Prevent auto-connect until explicitly called
});

export default socket;

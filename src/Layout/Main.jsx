import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import axios from "axios";

const Main = () => {
    useEffect(() => {
        // Check if the visit has already been recorded in this session
        if (sessionStorage.getItem('visit') === null) {
            // Send a request to increment the visit count
            axios.post('http://localhost:5000/api/visit')
                .then(response => {
                    console.log('Visit count updated:', response.data.visits);
                })
                .catch(error => {
                    console.error('Error updating visit count:', error);
                });
            
            // Store a flag in sessionStorage to prevent multiple increments in the same session
            sessionStorage.setItem('visit', 'true');
        }
    }, []);

    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;

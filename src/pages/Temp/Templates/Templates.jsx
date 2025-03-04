import AgencyTemplate from "../../Home/AgencyTemplate/AgencyTemplate";
import GraphicsTemplate from "../../Home/GraphicsTemplate/GraphicsTemplate";
import PresentationTemplate from "../../Home/PresentationTemplate/PresentationTemplate";
import Marketplace from "../Marketplace/Marketplace";
import Shop from "../Shop/Shop";
import { Helmet } from 'react-helmet-async';
import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Ensure you're using React Router

const Templates = () => {
     const location = useLocation();
    
      useEffect(() => {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 50); // Delay for smoother effect
      }, [location.pathname]); // Runs on page change

    return (
        <div>
            <Helmet>
                <title>Prographr | Template</title>
                <meta name="description" content="Find high-quality templates for your projects at the Template Store. Choose from a variety of options including agency templates, graphics templates, and more." />
            </Helmet>
            <Shop></Shop>
            <AgencyTemplate></AgencyTemplate>
            <GraphicsTemplate></GraphicsTemplate>
            <PresentationTemplate></PresentationTemplate>
            <Marketplace></Marketplace>
        </div>
    );
};

export default Templates;
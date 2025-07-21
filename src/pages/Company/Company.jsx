import Creativity from '../Home/Creativity/Creativity';
import PresentationTemplate from '../Home/PresentationTemplate/PresentationTemplate';
import Testimonial from '../Home/Testimonial/Testimonial';
import About from './About/About';
import { Helmet } from 'react-helmet-async';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Company = () => {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50); 
  }, [location.pathname]); 
  return (
    <div>
      <Helmet>
        <title>Prographr | Company</title>
      </Helmet>
      <About></About>
      <Creativity></Creativity>
      <Testimonial></Testimonial>
      <PresentationTemplate></PresentationTemplate>
    </div>

  );
};

export default Company;
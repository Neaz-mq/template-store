import { Helmet } from "react-helmet-async";
import Community from "../Community/Community";
import Template from "../Template/Template";
import Exclusive from "../Exclusive/Exclusive";
// import Free from "../Free/Free";
import Promote from "../Promote/Promote";
// import Package from "../Package/Package";
import Deal from "../Deal/Deal";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Ensure you're using React Router
import TawkMessenger from "../../TawkMessenger/TawkMessenger";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50); // Delay for smoother effect
  }, [location.pathname]); // Runs on page change

  return (
    <div>
      <Helmet>
        <title>Prographr | Home</title>
        <meta
          name="description"
          content="Discover a wide range of templates for your creative projects at Template Store. Explore community ideas, guidelines, testimonials, and more."
        />
        <meta
          name="keywords"
          content="templates, creativity, community, guidelines, ideas, testimonials"
        />
        <link rel="canonical" href="https://www.prographr.com/home" />
      </Helmet>

      <main>
        <section id="deal">
          <Deal />
        </section>
        <section id="templates">
          <Template />
        </section>
        <section id="exclusive">
          <Exclusive />
        </section>
        {/* <section id="free">
          <Free />
        </section> */}
       
        {/* <section id="package">
          <Package />
        </section> */}
        <section id="community">
          <Community />
        </section>

        <section id="promote">
          <Promote />
        </section>
      </main>
    
      
        <TawkMessenger />
    
    </div>
  );
};

export default Home;

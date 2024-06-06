import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Community from '../Community/Community';
import Creativity from '../Creativity/Creativity';
import Guideline from '../Guideline/Guideline';
import Ideas from '../Ideas/Ideas';
import Template from '../Template/Template';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Prographr | Home</title>
                <meta name="description" content="Discover a wide range of templates for your creative projects at Template Store. Explore community ideas, guidelines, testimonials, and more." />
                <meta name="keywords" content="templates, creativity, community, guidelines, ideas, testimonials" />
                <link rel="canonical" href="https://www.prographr.com/home" />
            </Helmet>
            <main>
                <section id="banner">
                    <Banner />
                </section>
                <section id="templates">
                    <Template />
                </section>
                <section id="creativity">
                    <Creativity />
                </section>
                <section id="guidelines">
                    <Guideline />
                </section>
                <section id="ideas">
                    <Ideas />
                </section>
                <section id="testimonials">
                    <Testimonial />
                </section>
                <section id="community">
                    <Community />
                </section>
            </main>
        </div>
    );
};

export default Home;

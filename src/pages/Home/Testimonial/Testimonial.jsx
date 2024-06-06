import { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import './Testimonial.css';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('http://localhost:5000/testimonials');
                const data = await response.json();
                setTestimonials(data);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();

        const swiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            on: {
                slideChange: function () {
                    const bullets = document.querySelectorAll('.swiper-pagination-bullet');
                    bullets.forEach((bullet, index) => {
                        if (index === this.realIndex) {
                            bullet.classList.add('swiper-pagination-bullet-active');
                        } else {
                            bullet.classList.remove('swiper-pagination-bullet-active');
                        }
                    });
                },
            },
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <div className='lg:mx-24 lg:-mt-14 lg:mb-20 overflow-hidden' style={{ overflowX: 'hidden' }}>
            <div className="mb-28 lg:mx-24 mx-3.5">
                <div className="layout mt-14 mb-14  lg:mt-24">
                    <h1 className="lg:text-4xl text-3xl text-[#2F1C6A] text-center">Clients <strong>Testimonials</strong></h1>
                </div>

                {/* Render Swiper only on smaller screens */}
                <div className="swiper-container mt-20 lg:hidden">
                    <div className="swiper-wrapper flex gap-8">
                        {/* Testimonial items */}
                        {testimonials.map((testimonial) => (
                            <div className="swiper-slide -ml-2 -mr-3" key={testimonial._id}>
                                <div className="max-w-[450px] h-[326px] mt-10 bg-white text-slate-800 font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium border border-gray-50 shadow rounded-[30px] p-7 relative mr-6 ml-5">
                                    <div className="p-5 -mt-14 w-fit mx-auto bg-[#7666E3] text-2xl text-white rounded-full">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571
                    .571 0 0 0-.064-.537z"></path></svg>
                                    </div>
                                    <div className="h-full flex flex-col justify-between">
                                        <p className="pt-4 text-sm">{testimonial.details}</p>
                                        <div className="flex gap-4 pt-4">
                                            <img src={testimonial.image} alt={`Photo of ${testimonial.name}`} loading="lazy" width="442" height="442" decoding="async" className="w-[100px] h-[100px] rounded-full" />
                                            <div className="mt-3">
                                                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                                <p className="mt-1">{testimonial.company}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add pagination bullet points */}
                    <div className='flex items-center justify-center mt-8'>
                        <div className="swiper-pagination"></div>
                    </div>

                    {/* Add navigation buttons */}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>

            {/* Render cards in grid-cols-3 layout on larger screens */}
            <div className="hidden lg:grid grid-cols-3 gap-10 overflow-hidden" data-aos="fade-up" data-aos-duration="700">
                {/* Testimonial cards */}
                {testimonials.map((testimonial) => (
                    <div className="max-w-[450px] h-[326px] mt-10 bg-white text-slate-800 border border-gray-200 shadow-sm font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium rounded-[30px] p-7 relative" key={testimonial._id}>
                        <div className="p-5 -mt-14 w-fit mx-auto bg-[#7666E3] text-2xl text-white rounded-full">
                            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z"></path>
                            </svg>
                        </div>
                        <div className="h-full flex flex-col justify-between">
                            <p className="pt-4 text-sm">{testimonial.details}</p>
                            <div className="flex gap-4 pt-4">
                                <img src={testimonial.image} alt={`Photo of ${testimonial.name}`} loading="lazy" width="442" height="442" decoding="async" className="w-[100px] h-[100px] rounded-full" />
                                <div className="mt-3">
                                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                    <p className="mt-1">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;

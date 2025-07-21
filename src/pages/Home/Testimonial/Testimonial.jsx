import { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import './Testimonial.css'

const Testimonial = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {

        fetch('https://template-store-server.vercel.app/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data))
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
        <section className='container mx-auto overflow-hidden font-raleway'>
            <div className='lg:mt-9 lg:mb-14 overflow-hidden'>
                <div className="mb-4 lg:mx-24">
                    <div className="layout mt-10 mb-14 lg:mt-24">
                        <h2 className="text-lg tablet:text-lg laptop:text-lg 3xl:text-2xl 2xl:text-2xl desktop:text-xl text-[#282A37] 3xl:ml-3 2xl:ml-3 desktop:-ml-3 font-raleway desktop:-mt-6 laptop:-ml-[0.7rem] tablet:ml-16 tablet:mt-16 ml-10 mt-16">Clients <strong>testimonial</strong></h2>
                    </div>

                    {/* Render Swiper only on smaller screens */}
                    <div className="swiper-container tablet:mt-5 -mt-10  lg:hidden" >
                        <div className="swiper-wrapper flex gap-44 tablet:-ml-[4.6rem]">
                            {/* Testimonial items */}
                            <div className="swiper-slide">
                                <article className="w-[230px] h-[380px] tablet:w-[300px] tablet:h-[386px] mt-10 tablet:ml-56 bg-white text-slate-800 font-raleway font-medium border border-gray-50  shadow p-7 relative mr-2 ml-9">

                                    <div className="h-full flex flex-col justify-between">
                                        <p className="pt-4 text-[10px] ml-3">We have been using Prographr marketplace for over 5 years now and has been instrumental in our branding, packaging and all creative design projects. They are always available, has very strong work ethic and integrity. Great quality and exceeds our expectations</p>
                                        <div className="">
                                            <img alt="Stuff" loading="lazy" width="442" height="442" decoding="async" data-nimg="1" className="w-[90px] h-[90px] ml-11 tablet:ml-20  " src="https://prographr.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.12e50714.png&w=640&q=75" style={{ color: 'transparent' }} />
                                            <div className="mt-8">
                                                <h3 className="text-[8px] font-semibold ml-12 mt-4 tablet:ml-20">Suresh Kanthaswamy</h3>
                                                <p className="text-[8px] font-normal ml-16 tablet:ml-24">Envelor Inc.</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>

                            <div className="swiper-slide">
                                <div className="w-[220px] h-[380px] tablet:w-[300px] tablet:h-[350px] mt-10 tablet:ml-10 bg-white text-slate-800 font-raleway font-medium border border-gray-50  shadow p-7 relative -ml-36">

                                    <div className="h-full flex flex-col justify-between">
                                        <p className="pt-4 text-[10px]">I have worked now with Prographr now for nearly a year, with a total of over 50 projects. I can say that with every project, we gets better and better. Reliable and ALWAYS on time!</p>
                                        <div className="">
                                            <img alt="Stuff" loading="lazy" width="442" height="442" decoding="async" data-nimg="1" className="w-[90px] h-[90px] ml-11 tablet:ml-20" src="https://prographr.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.511feac8.png&w=640&q=75" style={{ color: 'transparent' }} />
                                            <div className="mt-8">
                                                <h3 className="text-[8px] font-semibold ml-16 tablet:ml-28">Kaleb Held</h3>
                                                <p className="text-[8px] font-normal ml-16 tablet:ml-28">Industrolux</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="w-[220px] h-[380px] tablet:w-[300px] tablet:h-[326px] mt-10 bg-white text-slate-800 font-raleway font-medium border border-gray-50  shadow p-7 relative  -ml-[19.5rem] tablet:-ml-[9rem]">
                               <div className="h-full flex flex-col justify-between">
                                        <p className="pt-4 text-[10px]">Doing real estate business without business card was difficult for me. I found a business card template here and modified by the design owner. The designer did a fantastic job for me. Thanks...</p>
                                        <div className="ml-20">
                                            <img alt="Stuff" loading="lazy" width="442" height="442" decoding="async" data-nimg="1" className="w-[80px] h-[80px]  -ml-9 tablet:ml-2" src="https://prographr.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.b967d41d.png&w=640&q=75" style={{ color: 'transparent' }} />
                                            <div className="mt-3">
                                                <h3 className="text-[8px] font-semibold -ml-6 tablet:ml-2">Charles A. Cameron</h3>
                                                <p className="text-[8px] font-normal -ml-6 tablet:ml-4">Blue Real Esate</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Add pagination bullet points */}
                        <div className='flex items-center justify-center mt-8 '>
                            <div className="swiper-pagination swiper-pagination-bullet swiper-pagination-bullet-active"></div>
                            <div className="swiper-pagination swiper-pagination-bullet swiper-pagination-bullet-active"></div>
                            <div className="swiper-pagination swiper-pagination-bullet swiper-pagination-bullet-active"></div>
                        </div>

                        {/* Add navigation buttons */}
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>

                {/* Render cards in grid-cols-3 layout on larger screens */}
                <div className="hidden lg:grid grid-cols-3 gap-10 overflow-hidden 3xl:ml-20 3xl:mr-[13rem] 3xl:gap-0 3xl:pt-0 2xl:ml-20 2xl:mr-[16rem] 2xl:gap-0 2xl:pt-7 desktop:ml-14 desktop:mr-[7.5rem] desktop:gap-0 desktop:pt-7 laptop:ml-[5.5rem] laptop:mr-[4.4rem] laptop:gap-2 laptop:pt-7 3xl:-mt-1 2xl:-mt-2 desktop:-mt-2 laptop:-mt-8" data-aos="fade-up" data-aos-duration="700" >
 
                    {
                        testimonials.map(testimonial =>
                            <div className="3xl:max-w-[385px] 3xl:ml-8 3xl:mr-2 2xl:max-w-[385px] 2xl:ml-8 2xl:mr-2 desktop:max-w-[420px] desktop:ml-8 desktop:mr-2 laptop:max-w-[400px] laptop:ml-0 laptop:mr-2 text-slate-800 border border-gray-200  shadow-sm font-raleway font-medium   p-7 relative bg-[#F9F9F9]"
                                key={testimonial._id}

                            >
                                <div className="p-5 -mt-20 w-fit mx-auto text-2xl text-white  "><svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z"></path></svg>
                                </div>
                                <div className="h-full flex flex-col justify-between">
                                    <p className="text-[13px] mt-10 desktop:mt-10 laptop:mt-4 tablet:mt-0 3xl:mt-5">{testimonial.details}</p>
                                    <div className="flex gap-4 pt-4 mt-7">
                                        <img src={testimonial.image} alt="Stuff" loading="lazy" width="442" height="442" decoding="async" data-nimg="1" className="w-[100px] h-[100px]" />

                                        <div className="mt-3">
                                            <h3 className=" font-semibold text-[12px] mt-6">{testimonial.name}</h3>
                                            <p className="mt-1 text-[11px]">{testimonial.company}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;


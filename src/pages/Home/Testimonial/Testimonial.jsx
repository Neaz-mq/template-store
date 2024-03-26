import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import './Testimonial.css'

const Testimonial = () => {
    useEffect(() => {
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
        <div className='lg:mx-24 lg:-mt-14 lg:mb-20' style={{ overflowX: 'hidden' }}>
            <div className="mb-28 lg:mx-24 mx-6">
                <div className="layout mt-14 mb-14  lg:mt-24">
                    <h2 className="lg:text-4xl text-3xl text-[#2F1C6A] text-center">Clients <strong>testimonial</strong></h2>
                </div>

                {/* Render Swiper only on smaller screens */}
                <div className="swiper-container mt-20 lg:hidden ">
                    <div className="swiper-wrapper flex gap-10">
                        {/* Testimonial items */}
                        <div className="swiper-slide">
                            <div className="max-w-[450px] h-[326px] mt-10 bg-white  text-slate-800 font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium border border-gray-50 shadow rounded-[30px] p-7 relative mr-6 ml-5">
                                <div className="p-5 -mt-14 w-fit mx-auto bg-[#7666E3] text-2xl text-white rounded-full"><svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z"></path></svg>
                                </div>
                                <div className="h-full flex flex-col justify-between">
                                    <p className="pt-4 text-sm">We have been using Prographr marketplace for over 5 years now and has been instrumental in our branding, packaging and all creative design projects. They are always available, has very strong work ethic and integrity. Great quality and exceeds our expectations</p>
                                    <div className="flex gap-4 pt-4">
                                        <img alt="Stuff" loading="lazy" width="442" height="442" decoding="async" data-nimg="1" className="w-[100px] h-[100px] rounded-full" src="https://prographr.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.12e50714.png&w=640&q=75" style={{ color: 'transparent' }} />
                                        <div className="mt-3">
                                            <h3 className="text-lg font-semibold">Suresh Kanthaswamy</h3>
                                            <p className="mt-1">Envelor Inc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="max-w-[450px] h-[326px] mt-10 bg-white text-slate-800 font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium border border-gray-50 shadow rounded-[30px] p-7 relative mr-16 -ml-1 ">
                                <div className="p-5 -mt-14 w-fit mx-auto bg-[#7666E3] text-2xl text-white rounded-full"><svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z"></path></svg>
                                </div>
                                <div className="h-full flex flex-col justify-between">
                                    <p className="pt-4 text-sm">I have worked now with Prographr now for nearly a year, with a total of over 50 projects. I can say that with every project, we gets better and better. Reliable and ALWAYS on time!</p>
                                    <div className="flex gap-4 pt-4">
                                        <img alt="Stuff" loading="lazy" width="442" height="442" decoding="async" data-nimg="1" className="w-[100px] h-[100px] rounded-full" src="https://prographr.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.511feac8.png&w=640&q=75" style={{ color: 'transparent' }} />
                                        <div className="mt-3">
                                            <h3 className="text-lg font-semibold">Kaleb Held</h3>
                                            <p className="mt-1">Industrolux</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="max-w-[450px] h-[326px] mt-10 bg-white text-slate-800 font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium border border-gray-50 shadow rounded-[30px] p-7 relative mr-24 -ml-12">
                                <div className="p-5 -mt-14 w-fit mx-auto bg-[#7666E3] text-2xl text-white rounded-full"><svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z"></path></svg>
                                </div>
                                <div className="h-full flex flex-col justify-between">
                                    <p className="pt-4 text-sm">Doing real estate business without business card was difficult for me. I found a business card template here and modified by the design owner. The designer did a fantastic job for me. Thanks...</p>
                                    <div className="flex gap-4 pt-4">
                                        <img alt="Stuff" loading="lazy" width="442" height="442" decoding="async" data-nimg="1" className="w-[100px] h-[100px] rounded-full" src="https://prographr.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.b967d41d.png&w=640&q=75" style={{ color: 'transparent' }} />
                                        <div className="mt-3">
                                            <h3 className="text-lg font-semibold">Charles A. Cameron</h3>
                                            <p className="mt-1">Blue Real Esate</p>
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
            <div className="hidden lg:grid grid-cols-3 gap-10">
                {/* Testimonial cards */}
                <div className="max-w-[450px] h-[326px] mt-10 bg-white text-slate-800 border border-gray-100  font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium   rounded-[30px] p-7 relative">
                    <div className="p-5 -mt-14 w-fit mx-auto bg-[#7666E3] text-2xl text-white rounded-full"><svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z"></path></svg>
                    </div>
                    <div className="h-full flex flex-col justify-between">
                        <p className="pt-4 text-sm">We have been using Prographr marketplace for over 5 years now and has been instrumental in our branding, packaging and all creative design projects. They are always available, has very strong work ethic and integrity. Great quality and exceeds our expectations</p>
                        <div className="flex gap-4 pt-4">
                            <img alt="Stuff" loading="lazy" width="442" height="442" decoding="async" data-nimg="1" className="w-[100px] h-[100px] rounded-full" src="https://prographr.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.12e50714.png&w=640&q=75" style={{ color: 'transparent' }} />
                            <div className="mt-3">
                                <h3 className="text-lg font-semibold">Suresh Kanthaswamy</h3>
                                <p className="mt-1">Envelor Inc.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[450px] h-[326px] mt-10 bg-white text-slate-800 border border-gray-100  font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium   rounded-[30px] p-7 relative">
                    <div className="p-5 -mt-14 w-fit mx-auto bg-[#7666E3] text-2xl text-white rounded-full"><svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z"></path></svg>
                    </div>
                    <div className="h-full flex flex-col justify-between">
                        <p className="pt-4 text-sm">I have worked now with Prographr now for nearly a year, with a total of over 50 projects. I can say that with every project, we gets better and better. Reliable and ALWAYS on time!</p>
                        <div className="flex gap-4 pt-4">
                            <img alt="Stuff" loading="lazy" width="442" height="442" decoding="async" data-nimg="1" className="w-[100px] h-[100px] rounded-full" src="https://prographr.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.511feac8.png&w=640&q=75" style={{ color: 'transparent' }} />
                            <div className="mt-3">
                                <h3 className="text-lg font-semibold">Kaleb Held</h3>
                                <p className="mt-1">Industrolux</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-[450px] h-[326px] mt-10 bg-white text-slate-800 border border-gray-100  font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium   rounded-[30px] p-7 relative">
                    <div className="p-5 -mt-14 w-fit mx-auto bg-[#7666E3] text-2xl text-white rounded-full"><svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z"></path></svg>
                    </div>
                    <div className="h-full flex flex-col justify-between">
                        <p className="pt-4 text-sm">Doing real estate business without business card was difficult for me. I found a business card template here and modified by the design owner. The designer did a fantastic job for me. Thanks...</p>
                        <div className="flex gap-4 pt-4">
                            <img alt="Stuff" loading="lazy" width="442" height="442" decoding="async" data-nimg="1" className="w-[100px] h-[100px] rounded-full" src="https://prographr.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.b967d41d.png&w=640&q=75" style={{ color: 'transparent' }} />
                            <div className="mt-3">
                                <h3 className="text-lg font-semibold">Charles A. Cameron</h3>
                                <p className="mt-1">Blue Real Esate</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Testimonial;
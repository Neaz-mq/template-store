import './Banner.css';
import { useEffect } from 'react';

const Banner = () => {

    useEffect(() => {
        // Lazy load images when they enter the viewport
        const images = document.querySelectorAll('.lazy-load');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        }, options);

        images.forEach(img => {
            observer.observe(img);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (

        <section className="w-full bg-[#EDEEF7]">

            <div className="layout pb-10 lg:pb-0 lg:h-[780px] lg:grid lg:gap-16 lg:grid-cols-12">

                <div className="lg:col-span-5 pt-12 lg:pt-0 flex flex-col gap-3 items-center lg:items-start justify-center lg:ml-24">
                    <p className="tracking-[0.5rem] text-sm text-primary mb-3">
                        <span className="bg-[#7666E3] px-2 py-1 rounded-[4px] tracking-widest text-white text-center lg:-ml-1">PRO</span> PREMIUM
                    </p>
                    <h1 className="text-4xl lg:text-6xl text-[#2F1C6A] font-extrabold lg:font-bold leading-[50px] text-center lg:text-start mb-3 lg:-ml-1">
                        A design for <br />your business promotion
                    </h1>
                    <p className="max-w-[350px] font-medium text-center lg:text-start lg:max-w-[500px] text-[#203e4e] mt-2">
                        Create professional-looking designs without starting from scratch, saving time and effort in the design process.
                    </p>
                    <button className="btn bg-[#8276d3] font-medium capitalize text-white rounded-full gap-4 w-fit px-8 py-4 mt-6 lg:-ml-2">
                        <span className="-mt-1">Learn More</span>
                    </button>
                </div>

                <div className="hidden lg:col-span-7 lg:flex items-center">
                    <div className="scroll_wrapper__5yHC8">

                        <section className="scroll_section__WwdTn scroll_scrolling__mlJTJ">
                            <img src="https://i.ibb.co/GtL3624/1.jpg" alt="Design example 1" />
                            <img src="https://i.ibb.co/WWqZ87h/2.jpg" alt="Design example 2" />
                            <img src="https://i.ibb.co/mSkQcRq/3.jpg" alt="Design example 3" />
                            <img src="https://i.ibb.co/wygHX9R/4.jpg" alt="Design example 4" />
                            <img src="https://i.ibb.co/yFsgRSH/5.jpg" alt="Design example 5" />
                            <img src="https://i.ibb.co/KKkQ7zq/6.jpg" alt="Design example 6" />
                            <img src="https://i.ibb.co/mSdYgC1/7.jpg" alt="Design example 7" />
                            <img src="https://i.ibb.co/6NVCqvH/8.jpg" alt="Design example 8" />
                            <img src="https://i.ibb.co/sbtqzwN/9.jpg" alt="Design example 9" />
                            <img src="https://i.ibb.co/tQf0zSY/10.jpg" alt="Design example 10" />
                            <img src="https://i.ibb.co/CHk5qwv/11.jpg" alt="Design example 11" />
                        </section>

                        <section className="scroll_section__WwdTn scroll_scrolling2__yKLja">
                            <img src="https://i.ibb.co/mSdYgC1/7.jpg" alt="Design example 7" />
                            <img src="https://i.ibb.co/sbtqzwN/9.jpg" alt="Design example 9" />
                            <img src="https://i.ibb.co/6NVCqvH/8.jpg" alt="Design example 8" />
                            <img src="https://i.ibb.co/CHk5qwv/11.jpg" alt="Design example 11" />
                            <img src="https://i.ibb.co/tQf0zSY/10.jpg" alt="Design example 10" />
                            <img src="https://i.ibb.co/GtL3624/1.jpg" alt="Design example 1" />
                            <img src="https://i.ibb.co/WWqZ87h/2.jpg" alt="Design example 2" />
                            <img src="https://i.ibb.co/mSkQcRq/3.jpg" alt="Design example 3" />
                            <img src="https://i.ibb.co/wygHX9R/4.jpg" alt="Design example 4" />
                            <img src="https://i.ibb.co/yFsgRSH/5.jpg" alt="Design example 5" />
                            <img src="https://i.ibb.co/KKkQ7zq/6.jpg" alt="Design example 6" />
                        </section>

                        <section className="scroll_section__WwdTn scroll_scrolling3__QmJJF">
                            <img src="https://i.ibb.co/tQf0zSY/10.jpg" alt="Design example 10" />
                            <img src="https://i.ibb.co/CHk5qwv/11.jpg" alt="Design example 11" />
                            <img src="https://i.ibb.co/6NVCqvH/8.jpg" alt="Design example 8" />
                            <img src="https://i.ibb.co/KKkQ7zq/6.jpg" alt="Design example 6" />
                            <img src="https://i.ibb.co/mSdYgC1/7.jpg" alt="Design example 7" />
                            <img src="https://i.ibb.co/GtL3624/1.jpg" alt="Design example 1" />
                            <img src="https://i.ibb.co/WWqZ87h/2.jpg" alt="Design example 2" />
                            <img src="https://i.ibb.co/mSkQcRq/3.jpg" alt="Design example 3" />
                            <img src="https://i.ibb.co/wygHX9R/4.jpg" alt="Design example 4" />
                            <img src="https://i.ibb.co/yFsgRSH/5.jpg" alt="Design example 5" />
                            <img src="https://i.ibb.co/KKkQ7zq/6.jpg" alt="Design example 6" />
                            <img src="https://i.ibb.co/sbtqzwN/9.jpg" alt="Design example 9" />
                        </section>
                    </div>
                </div>
                
            </div>

        </section>
    );
};

export default Banner;

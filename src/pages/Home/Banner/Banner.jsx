import './Banner.css';
import { useEffect } from 'react';

const Banner = () => {

  useEffect(() => {

    // Lazy load images when user enter the viewport
    const images = document.querySelectorAll('.lazy-load');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
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

    <section className="w-full bg-[#EDEEF7] font-roboto 3xl:-mt-[0.6rem] 2xl:-mt-1 desktop:-mt-1 laptop:-mt-1 -mt-24">
      <div className='container mx-auto 2xl:overflow-x-hidden 3xl:overflow-x-hidden'>
        <div className="layout pb-10 lg:pb-0 lg:h-[780px] lg:grid lg:gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 pt-12 lg:-mt-36 flex flex-col gap-3 items-center lg:items-start justify-center lg:ml-24 3xl:ml-60 2xl:ml-60 3xl:mt-2 2xl:mt-2">
            <p className="tracking-[0.5rem] text-sm text-primary mb-3 laptop:-mt-16 tablet:-mt-0">
              <span className="bg-[#7666E3] px-2 py-1 rounded-[4px] tracking-widest text-white text-center lg:-ml-1">PRO</span> PREMIUM
            </p>
            <h1 className="text-4xl lg:text-6xl text-[#2F1C6A] font-extrabold lg:font-bold leading-[50px] text-center lg:text-start md:mt-3 mb-3 lg:-ml-1">
              A design for <br />your business promotion
            </h1>
            <p className="max-w-[350px] font-medium text-center lg:text-start lg:max-w-[500px] text-[#15141ce7] md:mt-6">
              Create professional-looking designs without starting from scratch, saving time and effort in the design process.
            </p>
            <button className="hidden btn bg-[#8276d3] font-medium capitalize text-white rounded-full gap-4 w-fit px-8 py-4 mt-6 lg:-ml-2">
              <span className="-mt-1">Learn More</span>
            </button>
          </div>

          <div className="hidden lg:col-span-7 lg:flex items-center 3xl:-ml-7 3xl:mr-36 3xl:pl-16   2xl:-ml-16 2xl:mr-44 2xl:pl-5">

            <div className="scroll_wrapper__5yHC8">

              <section className="scroll_section__WwdTn scroll_scrolling__mlJTJ">
                <img className="lazy-load" data-src="https://i.ibb.co/GtL3624/1.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/WWqZ87h/2.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/mSkQcRq/3.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/wygHX9R/4.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/yFsgRSH/5.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/KKkQ7zq/6.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/mSdYgC1/7.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/6NVCqvH/8.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/sbtqzwN/9.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/tQf0zSY/10.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/CHk5qwv/11.jpg" alt="" loading="lazy" />
              </section>

              <section className="scroll_section__WwdTn scroll_scrolling2__yKLja">
                <img className="lazy-load" data-src="https://i.ibb.co/mSdYgC1/7.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/sbtqzwN/9.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/6NVCqvH/8.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/CHk5qwv/11.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/tQf0zSY/10.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/GtL3624/1.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/WWqZ87h/2.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/mSkQcRq/3.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/wygHX9R/4.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/yFsgRSH/5.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/KKkQ7zq/6.jpg" alt="" loading="lazy" />
              </section>

              <section className="scroll_section__WwdTn scroll_scrolling3__QmJJF">
                <img className="lazy-load" data-src="https://i.ibb.co/tQf0zSY/10.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/CHk5qwv/11.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/6NVCqvH/8.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/KKkQ7zq/6.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/mSdYgC1/7.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/GtL3624/1.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/WWqZ87h/2.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/mSkQcRq/3.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/wygHX9R/4.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/yFsgRSH/5.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/KKkQ7zq/6.jpg" alt="" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/sbtqzwN/9.jpg" alt="" loading="lazy" />
              </section>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

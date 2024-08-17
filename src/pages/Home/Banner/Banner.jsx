import './Banner.css';
import { useEffect } from 'react';

const Banner = () => {

  useEffect(() => {
    // Lazy load images when they enter the viewport
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
          img.classList.remove('lazy-load'); // Optional: Remove class after loading
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

    <section className="w-full bg-[#EDEEF7] font-roboto pb-[4rem] pt-6 3xl:-mt-4 2xl:-mt-4 desktop:-mt-5 laptop:-mt-4 tablet:-mt-24 -mt-24 ">
      <div className='container mx-auto overflow-x-hidden'>
        <div className="layout pb-10 lg:pb-0 lg:h-[780px] lg:grid lg:gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 pt-12 lg:-mt-36 flex flex-col gap-3 items-center lg:items-start justify-center lg:ml-24 3xl:ml-60 2xl:ml-60 3xl:mt-2 2xl:mt-2">
            <p className="tracking-[0.5rem] text-sm text-primary mb-3 laptop:-mt-16 tablet:-mt-0">
              <span className="bg-[#7666E3] px-2 py-1 rounded-[4px] tracking-widest text-white text-center lg:-ml-1">PRO</span> PREMIUM
            </p>
            <h1 className="text-3xl lg:text-6xl text-[#2F1C6A] font-extrabold lg:font-bold leading-[50px] text-center lg:text-start md:mt-3 mb-3 lg:-ml-1">
              A design for <br />your business promotion
            </h1>
            <p className="max-w-[350px] font-medium text-center lg:text-start lg:max-w-[500px] text-[#15141ce7] md:mt-6">
              Create professional-looking designs without starting from scratch, saving time and effort in the design process.
            </p>
            <a href="#learn-more" className="hidden btn bg-[#8276d3] font-medium capitalize text-white rounded-full gap-4 w-fit px-8 py-4 mt-6 lg:-ml-2">
              <span className="-mt-1">Learn More</span>
            </a>
          </div>

          <div className="hidden lg:col-span-7 lg:flex items-center 3xl:-ml-7 3xl:mr-36 3xl:pl-16 2xl:-ml-16 2xl:mr-44 2xl:pl-5">
            <div className="scroll_wrapper__5yHC8" aria-label="Scrolling gallery of images for business promotion designs">
              <section className="scroll_section__WwdTn scroll_scrolling__mlJTJ">
                <img className="lazy-load" data-src="https://i.ibb.co/CwrFb2M/1.jpg" alt="Business promotion design example 1" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/3cfC2Bv/15.jpg" alt="Business promotion design example 2" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/T8x897w/2.jpg" alt="Business promotion design example 3" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/G2C4WPd/3.jpg" alt="Business promotion design example 4" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/GQXdj44/4.jpg" alt="Business promotion design example 5" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/PD6mgF0/5.jpg" alt="Business promotion design example 6" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/P61Y6VS/10.jpg" alt="Business promotion design example 7" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/FhK7LHw/13.jpg" alt="Business promotion design example 8" loading="lazy" />
              </section>

              <section className="scroll_section__WwdTn scroll_scrolling2__yKLja">
                <img className="lazy-load" data-src="https://i.ibb.co/xzCkxqs/7.jpg" alt="Business promotion design example 9" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/rfX9hfx/9.jpg" alt="Business promotion design example 10" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/3cYzzPX/8.jpg" alt="Business promotion design example 11" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/5kk478p/20.jpg" alt="Business promotion design example 12" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/t3XZc8Y/25.jpg" alt="Business promotion design example 13" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/B4SSy9j/16.jpg" alt="Business promotion design example 14" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/CwrFb2M/1.jpg" alt="Business promotion design example 15" loading="lazy" />
              </section>

              <section className="scroll_section__WwdTn scroll_scrolling3__QmJJF">
                <img className="lazy-load" data-src="https://i.ibb.co/JFnQfxd/24.jpg" alt="Business promotion design example 16" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/ygRhtnW/11.jpg" alt="Business promotion design example 17" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/rHnzJFY/26.jpg" alt="Business promotion design example 18" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/VLqXsFR/14.jpg" alt="Business promotion design example 19" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/0KXBJ2y/6.jpg" alt="Business promotion design example 20" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/rfX9hfx/9.jpg" alt="Business promotion design example 21" loading="lazy" />
                <img className="lazy-load" data-src="https://i.ibb.co/3cfC2Bv/15.jpg" alt="Business promotion design example 22" loading="lazy" />
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Banner;
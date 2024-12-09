import './Banner.css';
import { useEffect } from 'react';

const Banner = () => {

  useEffect(() => {
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
          img.classList.remove('lazy-load'); 
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

    <section className="w-full bg-[#ffffff] font-raleway 3xl:pb-[7rem] 2xl:pb-[7rem] desktop:pb-[7rem] laptop:pb-[7rem] pt-6 3xl:-mt-4 2xl:-mt-4 desktop:-mt-5 -mt-16">
      <div className='container mx-auto overflow-x-hidden'>
        <div className="layout lg:h-[780px] lg:grid lg:gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 flex flex-col gap-3 items-center lg:items-start justify-center lg:ml-[7.5rem] 3xl:ml-60 2xl:ml-60 3xl:-mt-14 2xl:mt-2 desktop:ml-[6.2rem] desktop:mt-4 laptop:mt-6">
            <p className="tracking-[0.2rem] text-sm text-primary mb-3 laptop:-mt-16 tablet:-mt-0 font-medium">
              <span className="bg-[#4864EC] px-2 3xl:py-1.5 2xl:py-1.5 desktop:py-1.5 laptop:py-1.5 py-0.5  text-white text-center lg:-ml-1">PRO</span> <span className='text-[#4864EC]'>PREMIUM</span>
            </p>
            <h1 className="text-3xl lg:text-6xl text-[#282A37] font-extrabold lg:font-bold leading-[50px] text-center lg:text-start md:mt-1 mb-3 lg:-ml-1">
              A design that <br />match your business here
            </h1>
            <p className=" font-medium text-center lg:text-start text-[#282A37]  text-[15px]">
              Create professional-looking designs without starting from scratch, saving time and effort in the design process.
            </p>
            <a href="#learn-more" className="hidden btn bg-[#8276d3] font-medium capitalize text-white rounded-full gap-4 w-fit px-8 py-4 mt-6 lg:-ml-2">
              <span className="-mt-1">Learn More</span>
            </a>
          </div>

          <div className="hidden lg:col-span-7 lg:flex items-center 3xl:-ml-4 3xl:mr-48 3xl:pl-16 2xl:-ml-16 2xl:mr-52 2xl:pl-5 desktop:-ml-16 desktop:mr-6">
            <div className="scroll_wrapper__5yHC8 3xl:ml-8 2xl:ml-7 desktop:ml-7" aria-label="Scrolling gallery of images for business promotion designs">
              <section className="scroll_section__WwdTn scroll_scrolling__mlJTJ">
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725943321/1_ggnznm.jpg" alt="Business promotion design example 1" loading="lazy" />
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725943390/15_yd0cqf.jpg" alt="Business promotion design example 2" loading="lazy" />
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725943694/2_c2kafr.jpg" alt="Business promotion design example 3" loading="lazy" />
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725943738/3_xukkuu.jpg" alt="Business promotion design example 4" loading="lazy" />
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725943767/4_xdobit.jpg" alt="Business promotion design example 5" loading="lazy" />
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725943798/5_wpq43l.jpg" alt="Business promotion design example 6" loading="lazy" />
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725943830/10_l7ij9n.jpg" alt="Business promotion design example 7" loading="lazy" />
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725943871/13_m7cl8p.jpg" alt="Business promotion design example 8" loading="lazy" />
              </section>

              <section className="scroll_section__WwdTn scroll_scrolling2__yKLja">
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725943895/7_gecfyu.jpg" alt="Business promotion design example 9" loading="lazy" />
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725943925/9_lihhtf.jpg" alt="Business promotion design example 10" loading="lazy" />
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725943960/8_dpmbyv.jpg" alt="Business promotion design example 11" loading="lazy" />
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725943993/20_h41u28.jpg" alt="Business promotion design example 12" loading="lazy" />
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725944023/25_acpkgl.jpg" alt="Business promotion design example 13" loading="lazy" />
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725944050/16_htvkwd.jpg" alt="Business promotion design example 14" loading="lazy" />
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725943321/1_ggnznm.jpg" alt="Business promotion design example 15" loading="lazy" />
              </section>

              <section className="scroll_section__WwdTn scroll_scrolling3__QmJJF">
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725944122/24_amwg6n.jpg" alt="Business promotion design example 16" loading="lazy" />
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725944184/11_comqiv.jpg" alt="Business promotion design example 17" loading="lazy" />
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725944224/26_mcqeqh.jpg" alt="Business promotion design example 18" loading="lazy" />
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725944267/14_qncylu.jpg" alt="Business promotion design example 19" loading="lazy" />
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725944318/6_zqlmrf.jpg" alt="Business promotion design example 20" loading="lazy" />
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725943925/9_lihhtf.jpg" alt="Business promotion design example 21" loading="lazy" />
                <img className="lazy-load" data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725943390/15_yd0cqf.jpg" alt="Business promotion design example 22" loading="lazy" />
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Banner;
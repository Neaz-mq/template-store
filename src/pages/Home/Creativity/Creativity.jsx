import { useEffect } from 'react';

const Creativity = () => {
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
    <div className="font-raleway">
      <div className="container mx-auto overflow-x-hidden 2xl:overflow-x-hidden 3xl:overflow-x-hidden desktop:overflow-x-hidden laptop:overflow-x-hidden">
        <header>
          <h1 className="text-lg tablet:text-lg laptop:text-lg 3xl:text-2xl 2xl:text-2xl desktop:text-xl  2xl:mt-28  3xl:mt-32 3xl:ml-60 2xl:ml-60 3xl:mb-12 desktop:ml-24 laptop:mt-28 desktop:mt-32 tablet:mt-24 tablet:mb-6 mt-16 ml-7 mb-4 text-[#282A37] font-raleway laptop:ml-24 laptop:mb-4 tablet:ml-16">
            What makes us <strong> better</strong>
          </h1>
        </header>
        <main className="-ml-2 tablet:ml-14 tablet:mr-0 grid place-items-center desktop:gap-0 tablet:grid-cols-2 laptop:grid-cols-3 gap-4 tablet:gap-2 laptop:gap-0 2xl:gap-0 3xl:gap-0 3xl:ml-48 2xl:-mr-4   2xl:ml-48 3xl:-mr-6 desktop:-mr-9 desktop:ml-20 laptop:mr-10 laptop:ml-9 mt-10 2xl:mt-12 desktop:mt-12 laptop:mt-12">
          <section className="w-full flex justify-center 3xl:mr-10 3xl:-ml-20 2xl:mr-10 2xl:-ml-20 desktop:mr-16 desktop:-ml-16">
            <article className="bg-[#F9F9F9] desktop:max-w-[340px] laptop:h-[250px] 2xl:max-w-[330px] desktop:h-[290px] laptop:max-w-[250px] tablet:max-w-[350px] tablet:h-[280px] max-w-[320px] h-[260px]  p-6  3xl:max-w-[380px] 3xl:h-[290px] 3xl:ml-[7rem] 3xl:mr-4 3xl:mb-12 2xl:ml-[7rem] 2xl:mr-0 2xl:mb-12 desktop:ml-20 laptop:ml-16 desktop:mr-0 desktop:mb-12 font-raleway ">
              <div className="flex items-center justify-between">
                <h2 className="3xl:text-xl 2xl:text-xl desktop:text-lg laptop:text-base tablet:text-base text-base font-medium text-[#15141ce7]">Creativity</h2>
                <div className="w-[60px]  h-[60px] laptop:hidden 3xl:block 2xl:block desktop:block tablet:block overflow-hidden bg-[#4864EC] text-white flex items-center justify-center text-2xl">
                  <img
                    className="lazy-load decoration-transparent scale-125 3xl:mt-6 3xl:ml-5 2xl:mt-6 2xl:ml-5 desktop:mt-6 desktop:ml-5 laptop:mt-6 laptop:ml-5 tablet:mt-6 tablet:ml-5 "
                    data-src="/Group 286.svg"
                    alt="Creativity Icon"
                    width="20"
                    height="20"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <p className="py-8 text-sm text-[#15141ce7] mt-5">
                We are pushing boundaries, exploring possibilities, and delivering visually striking, functional, meaningful, and impactful designs.
              </p>
              <a href="#" title="Learn more about our team collaboration" className="hidden">
                <button className="btn bg-white hover:bg-gray-100 font-medium capitalize text-[#15141ce7]  gap-4 mt-5">
                  <span className="-mt-1">Learn More</span>
                  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </button>
              </a>
            </article>
          </section>

          <section className="w-full flex justify-center 3xl:mr-[12.7rem] 2xl:mr-[13.6rem] desktop:mr-[12.7rem]">
            <article className="bg-[#F9F9F9] desktop:max-w-[340px] laptop:h-[250px] 2xl:max-w-[330px] desktop:h-[290px] laptop:max-w-[250px] tablet:max-w-[350px] tablet:h-[280px] max-w-[320px] h-[240px]  p-6  3xl:max-w-[380px] 3xl:h-[290px] 3xl:ml-0 3xl:mr-5 3xl:mb-12 2xl:ml-8 2xl:mr-4 2xl:mb-12 desktop:ml-14 laptop:ml-3 desktop:mr-1 desktop:mb-12 font-raleway ">
              <div className="flex items-center justify-between">
                <h2 className="3xl:text-xl 2xl:text-xl desktop:text-lg laptop:text-base tablet:text-base text-base font-medium text-[#15141ce7]">Team Collaboration</h2>
                <div className="w-[60px]  h-[60px] laptop:hidden 3xl:block 2xl:block desktop:block tablet:block overflow-hidden bg-[#4864EC] text-white flex items-center justify-center text-2xl">
                  <img
                    className="lazy-load decoration-transparent scale-125 3xl:mt-0 3xl:ml-0 2xl:mt-1 2xl:ml-0 desktop:mt-0 desktop:ml-0 laptop:mt-6 laptop:ml-5 tablet:mt-0 tablet:ml-0"
                    data-src="/35-01.svg"
                    alt="Team Collaboration Icon"
                    width="60"
                    height="60"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <p className="py-8 text-sm text-[#15141ce7] mt-5">
                Working together effectively and efficiently to achieve common goals or objectives of any business.
              </p>
              <a href="#" title="Learn more about our team collaboration" className="hidden">
                <button className="btn bg-white hover:bg-gray-100 font-medium capitalize text-[#15141ce7]  gap-4 mt-5">
                  <span className="-mt-1">Learn More</span>
                  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </button>
              </a>
            </article>
          </section>

          <section className="w-full flex justify-center 3xl:mr-72 2xl:mr-72 desktop:mr-44">
            <article className="bg-[#F9F9F9] desktop:max-w-[340px] 2xl:max-w-[330px] laptop:max-w-[245px] desktop:h-[290px] laptop:h-[250px] tablet:max-w-[340px] tablet:h-[280px] max-w-[320px] h-[260px]  p-6  desktop:mr-28 3xl:max-w-[400px] 3xl:mr-28 desktop:mb-12 3xl:mb-12 2xl:mr-28 2xl:mb-12 laptop:mr-10 font-raleway ">
              <div className="flex items-center justify-between">
                <h2 className="3xl:text-xl 2xl:text-xl desktop:text-lg laptop:text-base tablet:text-base text-base font-medium text-[#15141ce7]">Professionalism</h2>
                <div className="w-[60px] h-[60px] laptop:hidden  overflow-hidden bg-[#4864EC] text-white flex items-center justify-center text-2xl laptop:ml-2 3xl:block 2xl:block desktop:block tablet:block ml-1">
                  <img
                    className="lazy-load decoration-transparent scale-125 3xl:mt-0 3xl:ml-0 2xl:mt-1 2xl:ml-0 desktop:mt-0 desktop:ml-0 laptop:mt-6 laptop:ml-5 tablet:mt-0 tablet:ml-0"
                    data-src="/34-01-01.svg"
                    alt="Professionalism Icon"
                    width="60"
                    height="60"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <p className="py-8 text-sm text-[#15141ce7] mt-5">
                Professional designers collaborate closely with clients to understand their goals, preferences, and requirements.
              </p>
              <a href="#" title="Learn more about our professionalism" className="hidden">
                <button className="btn bg-white hover:bg-gray-100 font-medium capitalize text-[#4a465b]  gap-4 mt-5">
                  <span className="-mt-1">Learn More</span>
                  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </button>
              </a>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Creativity;
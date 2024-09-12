import { useEffect } from 'react';

const Creativity = () => {
  useEffect(() => {
    // Lazy load images when user enters the viewport
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
    <div className="layout font-roboto">
      <div className="container mx-auto overflow-x-hidden 2xl:overflow-x-hidden 3xl:overflow-x-hidden desktop:overflow-x-hidden laptop:overflow-x-hidden">
        <header>
          <h1 className="text-2xl tablet:text-3xl laptop:text-3xl 3xl:text-3xl 2xl:mt-12 2xl:text-3xl 3xl:mt-36 3xl:mb-10 laptop:mt-0 desktop:mt-10 tablet:mt-6 tablet:mb-6 mt-2 text-[#2F1C6A] text-center laptop:mb-4">
            What <strong>makes us better</strong>
          </h1>
        </header>

        <main className="py-6 -ml-1  tablet:ml-2 tablet:mr-3 grid place-items-center desktop:gap-0 tablet:grid-cols-2 laptop:grid-cols-3 gap-4 tablet:gap-6 laptop:gap-0 2xl:gap-0 3xl:gap-0 3xl:ml-48 2xl:-mr-6 2xl:ml-48 3xl:-mr-6 desktop:-mr-10 desktop:ml-28 laptop:mr-10 laptop:ml-9">
          <section className="w-full flex justify-center 3xl:mr-10 3xl:-ml-20 2xl:mr-10 2xl:-ml-20 desktop:mr-16 desktop:-ml-16">
            <article className="bg-[#EDEEF7] 2xl:max-w-[300px] desktop:max-w-[340px] laptop:max-w-[250px] laptop:h-[380px] desktop:h-[290px] p-6 rounded-[30px] 3xl:max-w-[400px] 3xl:ml-28 desktop:ml-20 2xl:ml-28 laptop:ml-16 3xl:mb-12 2xl:mb-12 desktop:mb-12 place-items-center mx-auto">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-medium text-[#15141ce7]">Creativity</h2>
                <div className="w-[80px] h-[80px] laptop:hidden rounded-full overflow-hidden bg-primary text-white flex items-center justify-center text-2xl 3xl:block 2xl:block desktop:block tablet:block">
                  <img
                    className="lazy-load decoration-transparent scale-125"
                    data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725945988/Screenshot_1_u2llv1.png"
                    alt="Creativity Icon"
                    width="80"
                    height="80"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <p className="py-8 text-base text-[#15141ce7] mt-5">
                We are pushing boundaries, exploring possibilities, and delivering visually striking, functional, meaningful, and impactful designs.
              </p>
              <a href="#" title="Learn more about our creativity" className="hidden">
                <button className="btn bg-white hover:bg-gray-100 font-medium capitalize text-[#15141ce7] rounded-full gap-4 mt-5">
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
            <article className="bg-[#EDEEF7] desktop:max-w-[300px] laptop:h-[380px] 2xl:max-w-[300px] desktop:h-[290px] laptop:max-w-[250px] p-6 rounded-[30px] 3xl:max-w-[380px] 3xl:h-[290px] 3xl:ml-4 3xl:mr-4 3xl:mb-12 2xl:ml-4 2xl:mr-4 2xl:mb-12 desktop:ml-16 laptop:ml-3 desktop:mr-1 desktop:mb-12">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-medium text-[#15141ce7]">Team Collaboration</h2>
                <div className="w-[80px] h-[80px] laptop:hidden 3xl:block 2xl:block desktop:block tablet:block rounded-full overflow-hidden bg-primary text-white flex items-center justify-center text-2xl">
                  <img
                    className="lazy-load decoration-transparent scale-125"
                    data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725946124/team_pgcefs.png"
                    alt="Team Collaboration Icon"
                    width="80"
                    height="80"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <p className="py-8 text-base text-[#15141ce7] mt-5">
                Working together effectively and efficiently to achieve common goals or objectives of any business.
              </p>
              <a href="#" title="Learn more about our team collaboration" className="hidden">
                <button className="btn bg-white hover:bg-gray-100 font-medium capitalize text-[#15141ce7] rounded-full gap-4 mt-5">
                  <span className="-mt-1">Learn More</span>
                  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </button>
              </a>
            </article>
          </section>

          <section className="w-full flex justify-center 3xl:mr-72 2xl:mr-72 desktop:mr-36">
            <article className="bg-[#EDEEF7] desktop:max-w-[340px] 2xl:max-w-[300px] laptop:max-w-[245px] desktop:h-[290px] laptop:h-[380px] p-6 rounded-[30px] desktop:mr-28 3xl:max-w-[400px] 3xl:mr-28 desktop:mb-12 3xl:mb-12 2xl:mr-28 2xl:mb-12 laptop:mr-10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-medium text-[#15141ce7]">Professionalism</h2>
                <div className="w-[80px] h-[80px] laptop:hidden rounded-full overflow-hidden bg-primary text-white flex items-center justify-center text-2xl laptop:ml-2 3xl:block 2xl:block desktop:block tablet:block ml-1">
                  <img
                    className="lazy-load decoration-transparent scale-125"
                    data-src="https://res.cloudinary.com/dzi3u164c/image/upload/v1725946315/professional_vvxtp2.png"
                    alt="Professionalism Icon"
                    width="80"
                    height="80"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <p className="py-8 text-base text-[#15141ce7] mt-5">
                Professional designers collaborate closely with clients to understand their goals, preferences, and requirements.
              </p>
              <a href="#" title="Learn more about our professionalism" className="hidden">
                <button className="btn bg-white hover:bg-gray-100 font-medium capitalize text-[#4a465b] rounded-full gap-4 mt-5">
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

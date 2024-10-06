const Promote = () => {
    return (
      <div className="bg-[#4864EC] h-[14.5rem] w-auto -mt-14 overflow-hidden">
        <div className="container mx-auto">
          <div className="relative flex flex-col 3xl:flex-row 2xl:flex-row desktop:flex-row laptop:flex-row tablet:flex-row items-center justify-start 3xl:ml-[15.8rem] 2xl:ml-[15.8rem] desktop:ml-[7.3rem] laptop:ml-[7.3rem] tablet:ml-[1.3rem]">
            <div>
              <h1 className="3xl:text-3xl 2xl:text-3xl desktop:text-3xl laptop:text-3xl text-2xl font-semibold text-left 3xl:leading-[2.8rem] 2xl:leading-[2.8rem] desktop:leading-[2.8rem] laptop:leading-[2.8rem] leading-[2.3rem] text-white font-raleway 3xl:-mt-20 2xl:-mt-12 desktop:-mt-2 laptop:mt-8 tablet:mt-16 mt-6 ml-4">
                Looking to <br /> <span className="italic">promote</span> <br /> <span>your business?</span>
              </h1>
            </div>
  
            <div className="lazy-load">
              <img 
                className="3xl:w-[72rem] 2xl:w-[60rem] desktop:w-[50rem] laptop:w-[38rem] tablet:hidden 3xl:block 2xl:block desktop:block laptop:block 3xl:-ml-7 3xl:-mt-8 2xl:-ml-7 2xl:-mt-2 desktop:-ml-7 desktop:-mt-0 w-[20rem] laptop:mt-2 tablet:mt-2 -mt-24 opacity-75" 
                src="/Line Art.svg" 
                alt="" 
              />
            </div>
  
            <a className="3xl:-mt-24 2xl:-mt-16 desktop:-mt-2 laptop:mt-6 tablet:mt-14 relative z-10" href="/template">
              <button className="bg-white text-[#4864EC] py-3 px-12 font-bold 3xl:-ml-[46rem] 2xl:-ml-[42rem] desktop:-ml-[33rem] laptop:-ml-[30rem] tablet:ml-44 mt-6">
                Get your template now
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Promote;
  
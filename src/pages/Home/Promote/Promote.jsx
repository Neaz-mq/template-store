const Promote = () => {
  return (
    <div className="bg-[#F9F9F9] h-[14.5rem] w-auto 3xl:-mt-60 2xl:-mt-14 desktop:-mt-14 laptop:-mt-14 tablet:-mt-14 -mt-32 overflow-hidden font-raleway">
      <div className="container mx-auto">
        <div className="relative flex flex-col 3xl:flex-row 2xl:flex-row desktop:flex-row laptop:flex-row tablet:flex-row items-center justify-start 3xl:ml-[6rem] 2xl:ml-[6.7rem] desktop:ml-[5rem] laptop:ml-[6rem] tablet:ml-[2.3rem]">
          <div>
            <h1 className="3xl:text-3xl 2xl:text-3xl desktop:text-3xl laptop:text-2xl text-2xl font-semibold text-left 3xl:leading-[2.8rem] 2xl:leading-[2.8rem] desktop:leading-[2.8rem] laptop:leading-[2.8rem] leading-[2.2rem] text-[#282A37] font-raleway 3xl:-mt-20 2xl:-mt-12 desktop:-mt-2 laptop:mt-8 tablet:mt-16 mt-6 ml-4">
              Looking to <span className="italic">promote</span> <br /> <span>your business?</span>
            </h1>
          </div>

          <div className="lazy-load">
            <img
              className="3xl:w-[72rem] 2xl:w-[60rem] desktop:w-[50rem] laptop:w-[38rem] tablet:hidden 3xl:block 2xl:block desktop:block laptop:block 3xl:-ml-7 3xl:-mt-8 2xl:-ml-7 2xl:-mt-2 desktop:-ml-7 desktop:-mt-0 w-[20rem] laptop:mt-2 tablet:mt-2 -mt-24 opacity-75 "
              src="/Line Art.svg"
              alt=""
            />
          </div>

          <a className="3xl:-mt-24 2xl:-mt-16 desktop:-mt-2 laptop:mt-6 tablet:mt-14 relative z-10" href="https://graphicriver.net/user/prographr/portfolio">
            <button className="bg-[#282A37] text-white 3xl:py-3 3xl:px-10 2xl:py-3 2xl:px-10 desktop:py-3 desktop:px-8 laptop:py-3 laptop:px-10 tablet:py-2 tablet:px-8 py-2 px-7 font-bold 3xl:-ml-[20rem] 2xl:-ml-[20rem] desktop:-ml-[20rem] laptop:-ml-[20rem] tablet:ml-24 mt-6 whitespace-nowrap 3xl:text-lg 2xl:text-lg desktop:text-base laptop:text-base tablet:text-base text-sm">
              Get your template now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Promote;

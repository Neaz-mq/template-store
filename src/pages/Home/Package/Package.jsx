const Package = () => {
  return (
    <div className='container mx-auto overflow-hidden font-raleway'>
      <div className="flex bg-[#F9F9F9] flex-col 3xl:flex-row 2xl:flex-row desktop:flex-row laptop:flex-row tablet:flex-row space-x-[12rem] 3xl:ml-[16rem] 2xl:ml-[16rem] desktop:ml-[7.5rem] laptop:ml-[7.1rem] tablet:ml-[1rem] mt-28 3xl:w-[72.7rem] 2xl:w-[62rem] desktop:w-[64.4rem] laptop:w-[49rem] tablet:w-[43.5rem] w-[18rem] 3xl:h-[20rem] 2xl:h-[20rem] desktop:h-[20rem] laptop:h-[20rem] tablet:h-[20rem] h-[42.5rem] mb-16 3xl:mb-24 2xl:mb-20 desktop:mb-20 laptop:mb-20 tablet:mb-20">
        {/* Left Section */}
        <div className="space-y-2 mt-14 ml-3 w-72">
          <div className="text-sm font-bold text-[#4864EC] pb-3">
            <span className="bg-[#4864EC] px-2 py-1 tracking-widest text-white text-center 3xl:ml-10 2xl:ml-10 desktop:ml-10 laptop:ml-10 tablet:ml-10 ml-16">PACKAGE</span> <span className='text-black px-1 tracking-widest'>OFFER</span>
          </div>
          <div>
            <h1 className="text-[36px] font-semibold text-[#4864EC] font-raleway italic 3xl:ml-9 2xl:ml-9 desktop:ml-9 laptop:ml-9 -mt-3 ml-[3.5rem]">
              Premium <br />
              <div className='-mt-4'>
                <span className="not-italic 3xl:text-[28px] 2xl:text-[24px] desktop:text-[20px] laptop:text-[20px] tablet:text-[20px] text-[20px] text-black font-medium inline-block">Graphic Assets</span>
              </div>
            </h1>
          </div>
          <div className='3xl:pt-12 2xl:pt-12 desktop:pt-12 laptop:pt-12 tablet:pt-12 pt-5 3xl:pb-7 2xl:pb-7 desktop:pb-7 laptop:pb-7 tablet:pb-7 pb-12 3xl:ml-10 2xl:ml-10 desktop:ml-10 laptop:ml-10 tablet:ml-10 ml-[3.7rem]'>
            <a href="/template">
              <button className="bg-[#4864EC] text-white py-2 3xl:px-14 2xl:px-9 desktop:px-9 laptop:px-9 tablet:px-9 font-semibold px-9">
                Get It Now
              </button>
            </a>
          </div>
          <div className="3xl:hidden 2xl:hidden desktop:hidden laptop:hidden tablet:hidden block top-1/4 right-10 w-36 h-36 bg-yellow-400 rounded-full text-center text-black font-bold shadow-lg overflow-hidden ml-[4rem]">
            {/* Top section: Darker Yellow */}
            <div className="bg-[#e2b813] w-full h-1/2 flex flex-col justify-center items-center pb-2">
              <p className="text-2xl mt-2">5 <br /> FLYERS</p>
            </div>
            {/* Bottom section: Lighter Yellow */}
            <div className="bg-[#F7DC6F] w-full h-1/2 flex flex-col justify-center items-center relative pb-4">
              {/* Strikethrough $99 */}
              <div className="relative">
                <p className="text-3xl text-black font-bold diagonal-line mt-2">$10</p>
              </div>
              <p className="text-base text-black">Only $2</p>
            </div>
          </div>
          <div className='ml-4 -mr-20 pt-10 3xl:hidden 2xl:hidden desktop:hidden laptop:hidden tablet:hidden block'>
            <img src="https://res.cloudinary.com/dzi3u164c/image/upload/v1726657430/Package_Offer_2_j4r1ga.png" className='w-[15rem]' alt="" />
          </div>
        </div>

        {/* Right Section */}
        <div
          className="bg-cover bg-no-repeat 3xl:relative 2xl:relative desktop:relative laptop:relative tablet:relative 3xl:w-[52rem] 2xl:w-[52rem] desktop:w-[52rem] laptop:w-[52rem] tablet:w-[52rem] w-[20rem]"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dzi3u164c/image/upload/v1726657430/Package_Offer_2_j4r1ga.png')`,
          }}
        >
          {/* Yellow Circle with 100 Flyers */}
          <div className="3xl:relative 2xl:relative desktop:relative laptop:relative tablet:relative 3xl:mr-[32.5rem] 2xl:mr-[25.5rem] desktop:mr-[27rem] laptop:mr-[13rem] tablet:mr-[7rem] 3xl:mt-20 2xl:mt-[5rem] desktop:mt-[5rem] laptop:mt-[5rem] tablet:mt-[4.8rem] 3xl:block 2xl:block desktop:block laptop:block tablet:block hidden">

            <div className="3xl:absolute 2xl:absolute desktop:absolute laptop:absolute tablet:absolute top-1/4 right-10 w-36 h-36 bg-yellow-400 rounded-full text-center text-black font-bold shadow-lg overflow-hidden">

              {/* Top section: Darker Yellow */}

              <div className="bg-[#e2b813] w-full h-1/2 flex flex-col justify-center items-center pb-2">
                <p className="text-2xl mt-2 ">5 <br /> FLYERS</p>
              </div>

              {/* Bottom section: Lighter Yellow */}

              <div className="bg-[#F7DC6F] w-full h-1/2 flex flex-col justify-center items-center relative pb-4">

                {/* Strikethrough $99 */}

                <div className="relative">
                  <p className="text-3xl text-black font-bold diagonal-line mt-2">$10</p>
                </div>
                <p className="text-base text-black mt-1">Only $2</p>
              </div>
            </div>
          </div>

          {/* Inline CSS for Thinner Diagonal Line */}

          <style jsx>{`
            .diagonal-line {
              position: relative;
              display: inline-block;
              color: black; /* Text color updated to black */
              font-size: 2rem; /* Ensures font size */
              font-weight: bold; /* Ensures font weight */
            }
  
            .diagonal-line::before {
              content: '';
              position: absolute;
              top: 3%;
              left: -4%;
              width: 120%;
              height: 110%;
              background: linear-gradient(150deg, transparent 55%, black 58%, black 58%, transparent 60%);
              z-index: 1;
            }
  
            .diagonal-line p {
              position: relative;
              z-index: 2;
              margin: 0;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default Package;
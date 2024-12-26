const HeadBar = () => {
  return (
    <div className="w-full">
      <div className="w-full overflow-hidden">
        <div className="flex justify-center">
          {/* Marquee for the development text */}
          <div className="w-full">
            <p
              className="inline-block whitespace-nowrap text-stone-50 3xl:px-4 3xl:py-4 2xl:py-2 desktop:py-3 laptop:py-4 tablet:py-4 py-4  
                font-semibold 
                animate-marquee 
                sm:animate-marquee-sm 
                tablet:animate-marquee-tablet 
                laptop:animate-marquee-laptop 
                desktop:animate-marquee-desktop 
                2xl:animate-marquee-2xl 
                3xl:animate-marquee"
            >
              The Web Application is under Development. You can try for demo use. Our Application will be fully functional very soon. Keep patience and stay with us. We have a dedicated team
              members specialized in specific sectors, can be logo specialists, or print design specialists.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadBar;

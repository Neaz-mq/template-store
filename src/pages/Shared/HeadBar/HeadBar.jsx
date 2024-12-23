const HeadBar = () => {
    return (
      <div className="w-full ">
        <div className="w-full overflow-hidden">
          <div className="flex justify-center">
            {/* Marquee for the development text */}
            <div className="w-full">
              <p className="inline-block whitespace-nowrap animate-marquee text-stone-50 px-4 py-4 font-semibold ">
              The Web Application is under Development. You can try for demo use. Our Application will be fully functional very soon. keep patience and stay with us, We have a dedicated team
              members specialized in specific sectors, can be logo specialists, or print design specialists.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeadBar;
  
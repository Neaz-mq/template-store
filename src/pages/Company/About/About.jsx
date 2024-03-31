const About = () => {
    return (
        <div>
           <div className="layout lg:mx-24 mx-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 lg:mt-20 mt-14">
                <div className="w-[300px] h-[150px] lg:w-full lg:h-[300px] bg-[#EDEEF7] rounded-[25px] flex items-center justify-center">
                    <button className="text-4xl text-primary hover:scale-110 duration-200"><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                    </button>
                    </div>
                    <div className="lg:mb-32">
                        <h3 className="lg:text-3xl text-2xl  text-[#2F1C6A]  font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] pt-5">About <strong>Prographr</strong></h3>
                        <p className="mt-10 text-slate-600 font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium">Prographr is an online readymade graphic assets marketplace. A designer can upload their graphic assets and anyone can download any design which are premium and free. All the designs are also customizable. Customizable design have a fee. Which are negotiable with the asset owner.</p>
                        </div>
                        </div>
                        <section className="text-center mt-8 lg:pb-32 pb-14"><h3 className="lg:text-3xl text-2xl  text-[#2F1C6A]  font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] pt-5">Team <strong>Members</strong></h3>
                        <div className="mt-10 w-full h-[300px] bg-[#EDEEF7] rounded-[30px]"></div>
                        </section>
                        </div>
        </div>
    );
};

export default About;
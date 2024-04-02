const About = () => {
    return (
        <div>
           <div className="layout lg:mx-24 mx-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 lg:mt-20 mt-14">
                <div className="flex items-center justify-center">
                <iframe className="w-[300px] h-[150px] lg:w-[500px] lg:h-[300px] rounded-[25px]" src="https://www.youtube.com/embed/qfOo3vuvAb8?si=BxrOtvWRFsqcUVZ2"></iframe>
                    </div>
                    <div className="lg:mb-32">
                        <h3 className="lg:text-3xl text-2xl  text-[#2F1C6A]  font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] pt-5">About <strong>Prographr</strong></h3>
                        <p className="mt-10 text-slate-600 font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium">Prographr is an online readymade graphic assets marketplace. A designer can upload their graphic assets and anyone can download any design which are premium and free. All the designs are also customizable. Customizable design have a fee. Which are negotiable with the asset owner.</p>
                        </div>
                        </div>
                        <section className="text-center mt-8 lg:pb-32 pb-14">
    <h3 className="lg:text-3xl text-2xl text-[#2F1C6A] font-medium font-['__gellix_0bf537, __gellix_Fallback_0bf537'] pt-5">Team <strong>Members</strong></h3>
    <div className="mt-10 flex flex-col lg:flex-row justify-center items-center gap-8">
        {/* Team Member 1: CEO */}
        <div className="bg-white p-12 w-80 rounded-lg shadow-lg">
            <img src="https://i.ibb.co/vXhpcM3/pexels-justin-shaifer-1222271.jpg" alt="CEO" className="w-28 h-28 rounded-full mx-auto mb-4" />
            <div className="text-center">
                <p className="font-semibold font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-lg mt-6">CEO & Founder</p>
                <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537 font-medium my-1 text-slate-900 text-base">Mahmudul Hasan</p>
                <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537 font-medium text-slate-600 text-base">Prographr</p>
            </div>
        </div>

        {/* Team Member 2: Graphic Designer */}
        <div className="bg-white p-12 w-80 rounded-lg shadow-lg">
            <img src="https://i.ibb.co/VwgkRFw/pexels-italo-melo-2379004.jpg" alt="Graphic Designer" className="w-28 h-28 rounded-full mx-auto mb-4" />
            <div className="text-center">
                <p className="font-semibold font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-lg mt-6">Graphic Designer</p>
                <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537 font-medium my-1 text-slate-900 text-base">Adnan Habib</p>
                <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537 font-medium text-slate-600 text-base">Prographr</p>
            </div>
        </div>

        {/* Team Member 3: Web Developer */}
        <div className="bg-white p-12 w-80 rounded-lg shadow-lg">
            <img src="https://i.ibb.co/4fmxgBH/pexels-nitin-khajotia-1516680.jpg" alt="Web Developer" className="w-28 h-28 rounded-full mx-auto mb-4" />
            <div className="text-center">
                <p className="font-semibold font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-lg mt-6">Web Developer</p>
                <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537 font-medium my-1 text-slate-900 text-base">Neaz Morshed</p>
                <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537 font-medium text-slate-600 text-base">Prographr</p>
            </div>
        </div>
    </div>
</section>

                        </div>
        </div>
    );
};

export default About;
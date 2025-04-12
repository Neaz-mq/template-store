import { useEffect } from "react";
import { Link } from "react-scroll";

const Footer = () => {
    useEffect(() => {
        var currentYear = new Date().getFullYear();
        document.getElementById('currentYear').textContent = currentYear;
    }, []);

    return (
        <footer className="bg-[#282A37] relative font-raleway">
            <div className="container mx-auto overflow-x-hidden 2xl:overflow-x-hidden 3xl:overflow-x-hidden desktop:overflow-x-hidden laptop:overflow-x-hidden">
                <div className="footer p-10 text-base-content relative">
                    <aside className="3xl:ml-52 3xl:-mr-[35rem] 2xl:ml-52 2xl:-mr-[35rem] desktop:ml-[4.3rem] -ml-5 desktop:-mr-[34rem] laptop:ml-14 laptop:-mr-[25rem]">
                        <a href="/">
                            <img src="/Logo_Prographr_Semi Color 2.svg" alt="Prographr Logo" className="w-36 h-auto -mt-1 ml-5" />
                        </a>
                        <p className="text-[#ffffff] text-[15px] font-medium mt-4 font-raleway ml-5 leading-[28px]">
                            Belgari, Fapor, Bogura Sadar, <br />
                            Bogura, Bangladesh<br />
                            support@prographr.com
                        </p>

                    </aside>
                    <div className="flex flex-wrap justify-between 3xl:gap-24 3xl:-ml-7 3xl:-mr-72 2xl:gap-24 2xl:-ml-4 2xl:-mr-72 desktop:gap-16 desktop:-ml-2 desktop:-mr-96 laptop:gap-16 laptop:-ml-2 laptop:-mr-[20rem] gap-4 mx-auto">
                        <nav className="flex text-[#ffffff] flex-col flex-wrap text-[15px] font-raleway font-medium gap-4 lg:ml-32 3xl:ml-[20rem] lg:-mr-5">
                            <a href="/template" rel="noopener noreferrer" className="link link-hover">Flyers</a>
                            <a href="/template" rel="noopener noreferrer" className="link link-hover">Brochures</a>
                            <a href="/template" rel="noopener noreferrer" className="link link-hover">Logo and Branding</a>
                        </nav>
                        <nav className="flex text-[#ffffff] flex-col font-raleway font-medium flex-wrap text-[15px] gap-4 3xl:ml-5">
                            <a href="/company" rel="noopener noreferrer" className="link link-hover">About</a>
                            <a href="/contact" rel="noopener noreferrer" className="link link-hover">Contact</a>
                        </nav>
                        <nav className="flex text-[#ffffff] flex-col flex-wrap text-[15px] font-raleway font-medium gap-4 3xl:ml-5">
                            <a href="/contact" className="link link-hover 3xl:-ml-0 2xl:-ml-0 desktop:-ml-0">Customer Support</a>
                            <a href="/career" rel="noopener noreferrer" className="link link-hover 3xl:-ml-0 2xl:-ml-0 desktop:-ml-0">Career</a>
                        </nav>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center border-t-2 lg:ml-32 lg:mr-20 ml-10 mr-10 3xl:ml-[16.8rem] 2xl:ml-[16.8rem] desktop:ml-32 3xl:w-[71.5rem] 2xl:w-[61.5rem] desktop:w-[63rem]" id="footer">
                    <p className="mt-6 text-[#ffffff] pb-8 text-sm text-[17px] font-medium lg:ml-20 font-raleway">&copy; <span id="currentYear"></span> Prographr All right reserved</p>
                </div>

                {/* Up Arrow Button */}
                <div className="absolute bottom-8  right-80 md:bottom-6 md:right-24">
                    <Link to="navbar" smooth={true} duration={500} className="cursor-pointer">
                        <button className="rounded-lg border border-[#aaacbb] bg-[#aaacbb] p-0.5 text-white transition-colors enabled:[#aaacbb]disabled:text-gray-400 disabled:opacity-10 dark:border-white dark:bg-white dark:hover:bg-[#EDEEF7] outline-none focus:outline-none">
                            <span className="block" data-state="closed">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white dark:text-black hover:text-[#7868E6] h-8 w-8">
                                    <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

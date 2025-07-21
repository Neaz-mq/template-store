import { useEffect } from "react";
import { Link } from "react-scroll";

const Footer = () => {
    useEffect(() => {
        var currentYear = new Date().getFullYear();
        document.getElementById('currentYear').textContent = currentYear;
    }, []);

    return (
        <footer className="bg-[#2f3243ec] relative font-raleway">
            <div className="container mx-auto overflow-x-hidden 2xl:overflow-x-hidden 3xl:overflow-x-hidden desktop:overflow-x-hidden laptop:overflow-x-hidden">
                <div className="footer p-10 text-base-content relative">
                    <aside className="3xl:ml-14 3xl:-mr-[31rem] 2xl:ml-16 2xl:-mr-[35rem] desktop:ml-[2.1rem] -ml-1 desktop:-mr-[32rem] laptop:ml-14 laptop:-mr-[24rem]">
                        <a href="/">
                            <img src="/Logo_Prographr_Semi Color 2.svg" alt="Prographr Logo" className="3xl:w-36 2xl:w-36 desktop:w-36 laptop:w-36 tablet:w-36 w-28 h-auto -mt-1 ml-5" />
                        </a>
                        <p className="text-[#ffffff] 3xl:text-[15px] 2xl:text-[15px] desktop:text-[15px] laptop:text-[15px] tablet:text-[15px] text-[13px] font-medium mt-4 font-raleway ml-5 leading-[28px]">
                            Belgari, Fapor, Bogura Sadar, <br />
                            Bogura, Bangladesh<br />
                            support@prographr.com
                        </p>

                    </aside>
                    <div className="flex flex-wrap justify-between 3xl:gap-36 3xl:ml-52 3xl:-mr-72 2xl:gap-36 2xl:ml-72 2xl:-mr-72 desktop:gap-16 desktop:ml-20 desktop:-mr-96 laptop:gap-16 laptop:-ml-12 laptop:-mr-[20rem] gap-4 mx-auto tablet:ml-4 ml-4">
                        <nav className="flex text-[#ffffff] flex-col flex-wrap 3xl:text-[15px] 2xl:text-[15px] desktop:text-[15px] laptop:text-[15px] tablet:text-[15px] text-[13px] font-raleway font-medium gap-4 lg:ml-32 3xl:ml-[20rem] lg:-mr-5">
                            <a href="/template" rel="noopener noreferrer" className="link link-hover">Flyers</a>
                            <a href="/template" rel="noopener noreferrer" className="link link-hover">Brochures</a>
                            <a href="/template" rel="noopener noreferrer" className="link link-hover">Logo and Branding</a>
                        </nav>
                        <nav className="flex text-[#ffffff] flex-col font-raleway font-medium flex-wrap 3xl:text-[15px] 2xl:text-[15px] desktop:text-[15px] laptop:text-[15px] tablet:text-[15px] text-[13px] gap-4 3xl:ml-5">
                            <a href="/company" rel="noopener noreferrer" className="link link-hover">About</a>
                            <a href="/contact" rel="noopener noreferrer" className="link link-hover">Contact</a>
                        </nav>
                        <nav className="flex text-[#ffffff] flex-col flex-wrap 3xl:text-[15px] 2xl:text-[15px] desktop:text-[15px] laptop:text-[15px] tablet:text-[15px] text-[13px] font-raleway font-medium gap-4 3xl:ml-5">
                            <a href="/contact" className="link link-hover 3xl:-ml-0 2xl:-ml-0 desktop:-ml-0">Customer Support</a>
                            <a href="/career" rel="noopener noreferrer" className="link link-hover 3xl:-ml-0 2xl:-ml-0 desktop:-ml-0">Career</a>
                        </nav>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center border-t-2 lg:ml-32 lg:mr-20 ml-16 mr-10 3xl:ml-[7.2rem] 2xl:ml-[7.5rem] desktop:ml-24 3xl:w-[91rem] 2xl:w-[82rem] desktop:w-[67rem]" id="footer">
                    <p className="mt-6 text-[#ffffff] pb-8 text-sm text-[17px] font-medium 3xl:-ml-6 2xl:-ml-24 desktop:ml-20 laptop:ml-20 font-raleway">&copy; <span id="currentYear"></span> Prographr All right reserved</p>
                </div>

                {/* Up Arrow Button */}
                <div className="absolute bottom-28  right-3 md:bottom-24 3xl:right-20 2xl:right-20 desktop:right-20 laptop:right-20 tablet:right-20">
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

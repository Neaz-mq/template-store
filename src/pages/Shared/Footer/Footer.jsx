import { useEffect } from "react";
import { Link } from "react-scroll";

const Footer = () => {

    useEffect(() => {
        var currentYear = new Date().getFullYear();
        document.getElementById('currentYear').textContent = currentYear;
    }, []);

    return (

        <footer className="bg-[#EDEEF7] relative ">
            <div className="container mx-auto 2xl:overflow-x-hidden 3xl:overflow-x-hidden">
                <div className="footer p-10 text-base-content relative">
                    <aside className="3xl:ml-52 3xl:-mr-[35rem] 2xl:ml-48 2xl:-mr-[35rem] desktop:ml-36 desktop:-mr-[34rem] laptop:-ml-5 laptop:-mr-[25rem]">
                        <a href="/">
                            <img src="https://prographr.vercel.app/_next/static/media/logo.426fb6b7.svg" alt="Prographr Logo" />
                        </a>
                        <p className="text-[#15141ce7] text-base font-medium mt-2 font-roboto">Belgari, Fapor, Bogura Sadar, Bogura, Bangladesh<br />support@prographr.com</p>
                    </aside>
                    <div className="flex flex-wrap justify-between 3xl:gap-24 3xl:-ml-7 3xl:-mr-72 2xl:gap-24 2xl:-ml-4 2xl:-mr-72 desktop:gap-16 desktop:-ml-2 desktop:-mr-96 laptop:gap-16 laptop:-ml-2 laptop:-mr-[20rem] gap-4 mx-auto">
                        <nav className="flex text-[#15141ce7] flex-col flex-wrap text-[17px] font-roboto font-medium gap-4 lg:ml-32 3xl:ml-[20rem] lg:-mr-5">
                            <a href="#" rel="noopener noreferrer" className="link link-hover">Flyers</a>
                            <a href="#" rel="noopener noreferrer" className="link link-hover">Brochures</a>
                            <a href="#" rel="noopener noreferrer" className="link link-hover">Logo and Branding</a>
                        </nav>
                        <nav className="flex text-[#15141ce7] flex-col font-roboto font-medium flex-wrap text-[17px] gap-4 3xl:ml-5 ">
                            <Link to="sales" className="link link-hover">Sales Sheets</Link>
                            <a href="/about-us" target="_blank" rel="noopener noreferrer" className="link link-hover">About</a>
                            <a href="/contact" target="_blank" rel="noopener noreferrer" className="link link-hover">Contact</a>
                        </nav>
                        <nav className="flex text-[#15141ce7] flex-col flex-wrap text-[17px] font-roboto font-medium gap-4 3xl:ml-5">
                            <Link to="support" className="link link-hover 3xl:-ml-0 2xl:-ml-0 desktop:-ml-0">Customer Support</Link>
                            <Link to="terms" className="link link-hover 3xl:-ml-0 2xl:-ml-0 desktop:-ml-0">Terms & Conditions</Link>
                            <a href="/career" target="_blank" rel="noopener noreferrer" className="link link-hover 3xl:-ml-0 2xl:-ml-0 desktop:-ml-0">Career</a>
                        </nav>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center border-t-2 lg:ml-12 lg:mr-44 ml-10 mr-10 3xl:ml-52" id="footer">
                    <p className="mt-6 text-[#15141ce7] pb-8 text-sm text-[17px] font-medium lg:ml-20 font-roboto">&copy; <span id="currentYear"></span> Prographr All right reserved</p>
                </div>

                {/* Up Arrow Button */}
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
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

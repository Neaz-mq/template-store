import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaFacebookF, FaDribbble, FaBehance } from "react-icons/fa6";

const Footer = () => {
    const [year, setYear] = useState("");

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-[#282A37] relative font-raleway">
            <div className="container mx-auto overflow-x-hidden">
                <div className="footer p-10 text-base-content relative">
                    {/* Logo & Address */}
                    <aside className="3xl:ml-14 3xl:-mr-[31rem] 2xl:ml-16 2xl:-mr-[35rem] desktop:ml-[2.1rem] -ml-1 desktop:-mr-[32rem] laptop:ml-14 laptop:-mr-[24rem]">
                        <a href="/">
                            <img
                                src="/Logo_Prographr_White.svg"
                                alt="Prographr Logo"
                                className="w-28 tablet:w-36 laptop:w-36 desktop:w-36 2xl:w-36 3xl:w-36 h-auto -mt-1 ml-5"
                            />
                        </a>
                        <p className="text-[#e6e5e5] text-[13px] tablet:text-[15px] font-medium mt-4 ml-5 leading-[28px]">
                            Belgari, Fapor, Bogura Sadar, <br />
                            Bogura, Bangladesh <br />
                            support@prographr.com
                        </p>
                    </aside>

                    {/* Link Sections */}
                    <div className="flex flex-wrap justify-between gap-4 laptop:gap-16 desktop:gap-16 2xl:gap-36 3xl:gap-36 laptop:ml-40 desktop:ml-20 2xl:ml-72 3xl:ml-52 mx-auto tablet:ml-4 ml-4">
                        {/* Flyers */}
                        <nav className="flex flex-col gap-4 text-[#e6e5e5] text-[13px] tablet:text-[15px] font-medium font-raleway lg:ml-32 3xl:ml-[20rem]">
                            <a href="/template" className="link link-hover">Flyers</a>
                            <a href="/template" className="link link-hover">Brochures</a>
                            <a href="/template" className="link link-hover">Logo and Branding</a>
                        </nav>

                        {/* About & Contact */}
                        <nav className="flex flex-col gap-4 text-[#e6e5e5] text-[13px] tablet:text-[15px] font-medium font-raleway">
                            <a href="/company" className="link link-hover">About</a>
                            <a href="/contact" className="link link-hover">Contact</a>
                            <a href="/career" className="link link-hover">Career</a>
                        </nav>

                        {/* Portfolio and Social Icons */}
                        <div className="flex flex-col gap-4 text-[#e6e5e5] text-[13px] tablet:text-[15px] font-medium font-raleway">
                            <h6 className="footer-title text-base text-white">Portfolio</h6>
                            <div className="grid grid-flow-col gap-4 items-center">
                                <a href="https://www.facebook.com/prographr.page" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF className="text-2xl hover:text-blue-600 transition-colors" />
                                </a>
                                <a href="https://www.dribbble.com/prographr" target="_blank" rel="noopener noreferrer">
                                    <FaDribbble className="text-2xl hover:text-pink-500 transition-colors" />
                                </a>
                                <a href="https://www.behance.net/prographr" target="_blank" rel="noopener noreferrer">
                                    <FaBehance className="text-2xl hover:text-blue-500 transition-colors" />
                                </a>
                                <a href="https://www.freepik.com/author/prographr" target="_blank" rel="noopener noreferrer" aria-label="Freepik">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-white hover:fill-blue-300 transition-colors">
                                        <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224c123.8 0 224-100.3 224-224S379.8 32 256 32zm61 312c-15.4 0-28-12.6-28-28s12.6-28 28-28 28 12.6 28 28-12.5 28-28 28zm0-96c-15.4 0-28-12.6-28-28s12.6-28 28-28 28 12.6 28 28-12.5 28-28 28zm-122 96c-15.4 0-28-12.6-28-28s12.6-28 28-28 28 12.6 28 28-12.6 28-28 28zm0-96c-15.4 0-28-12.6-28-28s12.6-28 28-28 28 12.6 28 28-12.6 28-28 28z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://stock.adobe.com/contributor/211997436/prographr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Adobe Stock"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 64 64"
                                        className="w-8 h-8 transition-transform hover:scale-110"
                                    >
                                       
                                        <circle cx="32" cy="32" r="32" fill="white" />

                                       
                                        <rect x="12" y="16" width="40" height="32" rx="6" fill="black" />

                                      
                                        <text
                                            x="32"
                                            y="39"
                                            textAnchor="middle"
                                            fill="white"
                                            fontFamily="Arial, sans-serif"
                                            fontWeight="bold"
                                            fontSize="20"
                                        >
                                            St
                                        </text>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center border-t-2 mt-6 pb-8 text-[#e6e5e5] text-sm text-[17px] font-medium font-raleway lg:ml-32 lg:mr-20 ml-16 mr-10 3xl:ml-[7.2rem] 2xl:ml-[7.5rem] desktop:ml-24 3xl:w-[91rem] 2xl:w-[82rem] desktop:w-[67rem] pt-2">
                    &copy; {year} Prographr. All rights reserved.
                </div>

                {/* Scroll to Top */}
                <div className="absolute bottom-28 right-3 md:bottom-24 tablet:right-20 laptop:right-20 desktop:right-20 2xl:right-20 3xl:right-20">
                    <Link to="navbar" smooth={true} duration={500} className="cursor-pointer">
                        <button className="rounded-lg border border-[#aaacbb] bg-[#aaacbb] p-0.5 text-[#e6e5e5] transition-colors dark:border-white dark:bg-white dark:hover:bg-[#EDEEF7] outline-none focus:outline-none">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white dark:text-black hover:text-[#7868E6] h-8 w-8">
                                <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

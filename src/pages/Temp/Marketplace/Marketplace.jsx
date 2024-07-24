const Marketplace = () => {

    return (

        <header>
            <div className="container mx-auto">
                <div className="layout rounded-[30px] bg-[#7666E3] flex justify-between lg:mx-20 mx-3 lg:mb-20 mb-10 lg:mt-24 mt-16 3xl:ml-[15.2rem] 3xl:mr-[13.8rem] 2xl:ml-[15.4rem] 2xl:mr-[15.8rem] desktop:ml-[6.5rem] desktop:mr-[6rem]">

                    <section className="p-10 lg:pl-14">
                        <h1 className="text-xl mt-4 md:text-2xl lg:text-3xl text-white font-roboto font-medium">First Marketplace, <br /></h1>
                        <h1 className="text-xl mt-3 md:text-2xl lg:text-3xl text-white font-roboto font-medium">where clients choose the best designs</h1>
                        <br />
                        <br />
                        <a href="/learn-more" className="btn hidden bg-white hover:bg-gray-100 font-normal capitalize text-black  font-roboto  rounded-full gap-4 undefined"><span className="-mt-1">Learn More</span> <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg></a>
                    </section>

                    <aside className="hidden lg:block lg:mt-2">
                        <img alt="Happy Customer" loading="lazy" width="255" height="355" decoding="async" data-nimg="1" className="-mt-[100px] mr-[100px]" src="https://prographr.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclient.62dc3892.png&w=640&q=75" style={{ color: 'transparent' }} />
                    </aside>

                </div>
            </div>
        </header>

    );
};

export default Marketplace;

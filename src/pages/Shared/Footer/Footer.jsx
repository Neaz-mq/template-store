import { useEffect } from "react";


const Footer = () => {

    useEffect(() => {
        // Get the current year
        var currentYear = new Date().getFullYear();
    
        // Update the content of the span element with the current year
        document.getElementById('currentYear').textContent = currentYear;
      }, []); // Empty dependency array ensures that the effect runs only once on mount
    return (
        <div className="bg-[#EDEEF7]">
            <footer className="footer p-10 text-base-content">
  <aside className="lg:ml-12">
    <img src="https://prographr.vercel.app/_next/static/media/logo.426fb6b7.svg" alt="" />
    <p className="text-[#564e77] text-base font-semibold font-['__gellix_0bf537, __gellix_Fallback_0bf537'] mt-2">Belgari, Fapor, Bogura Sadar, Bogura, Bangladesh<br/>support@prographr.com</p>
  </aside> 
 <div className="flex flex-wrap  justify-between lg:gap-24 gap-4 ">
 <nav className="flex text-[#564e77] flex-col  flex-wrap text-base font-['__gellix_0bf537, __gellix_Fallback_0bf537'] lg:ml-32 lg:-mr-5 font-semibold gap-4">
   
   <a className="link link-hover">Flyers</a>
   <a className="link link-hover">Brochures</a>
   <a className="link link-hover">Logo and Branding</a>
   
 </nav> 
 <nav className="flex text-[#564e77] flex-col font-semibold flex-wrap text-base font-['__gellix_0bf537, __gellix_Fallback_0bf537']font-semibold gap-4 lg:ml-6">
  
   <a className="link link-hover">Sales Sheets</a>
   <a className="link link-hover">About</a>
   <a className="link link-hover">Contact</a>
  
 </nav> 
 
  <nav className="flex text-[#564e77] flex-col flex-wrap text-base font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-semibold gap-4 lg:ml-6">
   
    <a className="link link-hover">Customer Support</a>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Career</a>
  </nav>
  </div>   
</footer>
 {/* Copyright Section */}
 <div className="lg:mt-4 text-center border-t-2 lg:ml-12 lg:mr-44 ml-10 mr-10" id="footer">
                <p className="mt-6 text-[#564e77] pb-8 text-sm lg:text-base font-semibold lg:ml-20">&copy; <span id="currentYear"></span> Prographr All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  // Function to determine the text color class based on the current page
  const getTextColorClass = () => {
    if (location.pathname === '/template') {
      return 'text-[#767BE8]'; // Apply this color class for the Template page
    } else {
      return 'text-base'; // Apply default color class for other pages
    }
  };

  return (
    <div>
      <div className="navbar bg-[#EDEEF7] py-7 -mt-7">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="lg:hidden ml-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm cursor-pointer  dropdown-content -mt-16 z-[1] p-8 leading-8 shadow bg-base-100 w-52 text-center -ml-2 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-semibold">
              <Link to="/" className="text-xl mt-10 ml-4 mr-1 mb-8">
                <img src="https://prographr.vercel.app/_next/static/media/logo.426fb6b7.svg" alt="" />
              </Link>

              <Link to="/template" className={`hover:text-[#7673E5] ${getTextColorClass()}`}>Template</Link>
              <Link to="/company" className="hover:text-[#7673E5]">Company</Link>
              <Link to="/contact" className="hover:text-[#7673E5]">Contact Us</Link>
            </ul>
          </div>
          <Link to="/" className={`${getTextColorClass()} lg:mt-10 mt-8 lg:ml-20 ml-2 -mr-1  lg:-mr-2 mb-8`}>
            {/* Show different image on mobile */}
            <img className="lg:hidden" src="https://prographr.vercel.app/_next/static/media/icon.87854914.svg" alt="" />
            {/* Show original logo on larger devices */}
            <img className="hidden lg:block" src="https://prographr.vercel.app/_next/static/media/logo.426fb6b7.svg" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex mr-36 -ml-14">
          <ul className="menu text-base cursor-pointer  menu-horizontal px-2 lg:flex flex-row gap-10 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-[#1e1c27] font-semibold">
            <Link to="/template" className={`hover:text-[#7673E5] ${getTextColorClass()}`}>Template</Link>
            <Link to="/company" className="hover:text-[#7673E5]">Company</Link>
            <Link to="/contact" className="hover:text-[#7673E5]">Contact Us</Link>
          </ul>
        </div>

        <div className="navbar-end gap-3 lg:gap-0">
          <button className="btn btn-sm bg-transparent  capitalize hover:bg-[#C8C5F0] rounded-full font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-[#241e2f] gap-4 shadow-none px-7 hover:bg-primary/30 !border-[#5D4987] lg:mr-14 ml-2 -mr-2 lg:-ml-7">
            <span>Sign in</span>
          </button>

          <button className="btn  btn-sm hover:bg-[#7666E3] bg-[#6658C5] font-['__gellix_0bf537, __gellix_Fallback_0bf537'] capitalize text-white rounded-full gap-4 px-6 py-4 lg:mr-20 lg:-ml-9">
            <span className="-mt-2">Sign up</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

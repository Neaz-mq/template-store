import { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const [selected, setSelected] = useState(null);
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (user) {
      setDropdownOpen(false);
    }
  }, [user]);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  };

  const handleSelect = (link) => {
    setSelected(link);
  };

  useEffect(() => {
    // Update the selected link based on the current path
    if (location.pathname === '/') {
      setSelected(null); // No link is selected when on the home page
    } else if (location.pathname.includes('template')) {
      setSelected('template');
    } else if (location.pathname.includes('company')) {
      setSelected('company');
    } else if (location.pathname.includes('contact')) {
      setSelected('contact');
    } else if (location.pathname.includes('career')) {
      setSelected('career');
    } else if (location.pathname.includes('check')) {
      setSelected('check');
    } else if (location.pathname.includes('sign-in') || location.pathname.includes('sign-up')) {
      setSelected(null);
    }
  }, [location.pathname]);


  return (
    <div className="bg-[#2f3243ec] font-raleway">
      <div className="container mx-auto relative">
        <div className="navbar -ml-2">
          <div className="navbar-start">
            {/* Dropdown for mobile */}
            <div className="dropdown">
              <div tabIndex={0} className="3xl:hidden text-[#ffffff] 2xl:hidden desktop:hidden laptop:ml-20 laptop:block laptop:-mt-4 -mt-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm cursor-pointer dropdown-content -mt-12 z-[1] p-8 leading-8 shadow bg-base-100 w-52 text-center -ml-4 font-raleway font-semibold text-[15px]"
              >
                <Link to="/" className="text-xl mt-5 ml-4 mr-1 mb-8">
                  <img
                    src="/Logo_Prographr_Color.svg"
                    alt="Logo"
                  />
                </Link>

                <Link
                  to="/template"
                  onClick={() => handleSelect('template')}
                  className={` mb-3 mt-4 font-raleway ${selected === 'template' ? 'text-[#98a9ff]' : ''}`}
                >
                  Template
                </Link>
                <Link
                  to="/company"
                  onClick={() => handleSelect('company')}
                  className={` mb-3 font-raleway ${selected === 'company' ? 'text-[#98a9ff]' : ''}`}
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  onClick={() => handleSelect('contact')}
                  className={` mb-3 font-raleway ${selected === 'contact' ? 'text-[#98a9ff]' : ''}`}
                >
                  Contact Us
                </Link>

                <Link
                  to="/career"
                  onClick={() => handleSelect('career')}
                  className={` mb-3 font-raleway ${selected === 'career' ? 'text-[#98a9ff]' : ''}`}
                >
                  Career
                </Link>

                {user && isAdmin && (
                  <li className="font-raleway ml-6 font-semibold text-3xl">
                    <Link to="/dashboard/adminHome">Dashboard</Link>
                  </li>
                )}
                {user && !isAdmin && (
                  <li className="font-raleway ml-6 font-semibold text-3xl">
                    <Link to="/dashboard/userHome">Dashboard</Link>
                  </li>
                )}

                <li className="mb-2 mt-3">
                  <Link to="/dashboard/cart" className="ml-10">
                    <div className="relative">
                      {/* Cart Icon */}
                      <FaShoppingCart className="mr-4 cursor-pointer text-xl" />

                      {/* Cart Length Badge */}
                      {cart.length > 0 && (
                        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                          +{cart.length}
                        </div>
                      )}
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              to="/"
              onClick={() => handleSelect(null)}
              className="3xl:mt-10 2xl:mt-10 desktop:mt-10  mt-8 3xl:ml-20 2xl:ml-20 desktop:ml-20 ml-2 -mr-1  3xl:-mr-2 2xl:-mr-2 desktop:-mr-2 mb-8 "
            >
              <div className="mt-[5.5rem]">
                <div className="3xl:-mt-28 2xl:-mt-28 desktop:-mt-28 laptop:-mt-28">
                  <a href="/">
                    <img
                      className="hidden 3xl:block 2xl:block desktop:block laptop:block w-36 h-auto 3xl:ml-[1rem] 2xl:ml-[1.5rem] 2xl:pt-1 desktop:ml-0 laptop:ml-[0.4rem] laptop:pt-2 "
                      src="/Logo_Prographr_Semi Color.svg"
                      alt="Logo"
                    />
                  </a>
                </div>
              </div>
            </Link>

            <Link to="/" onClick={() => handleSelect(null)} className="flex items-center 3xl:hidden 2xl:hidden desktop:hidden laptop:hidden -mt-24 ml-2 tablet:ml-8">
              {/* Mobile / Tablet Logo */}
              <img
                className="block laptop:hidden tablet:w-32 w-24 h-auto"
                src="/Logo_Prographr_Semi Color.svg"
                alt="Logo"
              />

              {/* Laptop and Up Logo */}
              <img
                className="hidden laptop:block w-36 h-auto laptop:ml-2"
                src="/Logo_Prographr_Semi Color.svg"
                alt="Logo"
              />
            </Link>

          </div>

          {/* Center menu */}
          <div className="navbar-center hidden 3xl:flex 2xl:flex desktop:flex ml-16 -mr-14 3xl:-mr-6 3xl:ml-40 2xl:mr-4 2xl:ml-16  desktop:mr-4 desktop:-ml-10 3xl:-mt-28 2xl:-mt-28 desktop:-mt-28">
            <ul className="menu cursor-pointer menu-horizontal text-[#ffffff] flex-row gap-8 font-raleway font-medium 3xl:mr-52 3xl:-ml-40 3xl:gap-6 3xl:mt-[5.2rem] 2xl:mr-52 2xl:-ml-36 2xl:gap-0 desktop:gap-6 desktop:mt-[5.2rem] 2xl:mt-[5rem] desktop:mr-52 desktop:-ml-10 text-[15px] laptop:mr-1 laptop:ml-3 laptop:gap-1 laptop:mt-[5.5rem]">
              <Link
                to="/template"
                onClick={() => handleSelect('template')}
                className={` mt-[1.3rem] 2xl:mr-8 3xl:mr-0 ${selected === 'template' ? 'text-[#98a9ff]' : ''}`}
              >
                Template
              </Link>
              <Link
                to="/company"
                onClick={() => handleSelect('company')}
                className={` mt-[1.3rem] 2xl:mr-8 3xl:mr-0 ${selected === 'company' ? 'text-[#98a9ff]' : ''}`}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                onClick={() => handleSelect('contact')}
                className={` mt-[1.3rem] 2xl:mr-8 3xl:mr-0 ${selected === 'contact' ? 'text-[#98a9ff]' : ''}`}
              >
                Contact Us
              </Link>

              <Link
                to="/career"
                onClick={() => handleSelect('career')}
                className={` mt-[1.3rem] 2xl:mr-8 3xl:mr-0 ${selected === 'career' ? 'text-[#98a9ff]' : ''}`}
              >
                Career
              </Link>
              <Link to="/dashboard/cart">
                <div className="relative ml-4 mr-16 3xl:mt-5 2xl:mt-5 desktop:mt-5 2xl:ml-[30rem] 2xl:-mr-[24rem] desktop:ml-80 desktop:-mr-96  3xl:ml-[37rem] 3xl:-mr-[41rem]  laptop:mt-2 laptop:ml-2 laptop:mr-10">
                  {/* Cart Icon */}
                  <FaShoppingCart className="mr-4 cursor-pointer  text-xl" />
                  {/* Cart Length Badge */}
                  {cart.length > 0 && (
                    <div className="absolute -top-1 right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center 3xl:-ml-0 3xl:mr-0 2xl:-ml-12 2xl:mr-10 desktop:-ml-12 desktop:mr-10 ">
                      +{cart.length}
                    </div>
                  )}
                </div>
              </Link>
            </ul>
          </div>
          {/* Right section (Sign in / Sign up / Sign out) */}
          <div className=" navbar-end gap-3 3xl:gap-0 2xl:gap-0 desktop:gap-0 3xl:ml-[20rem]">
            {user ? (
              <div className="relative flex justify-center items-center  3xl:-ml-[2rem] 3xl:mr-[8rem]   2xl:-ml-44 2xl:mr-32 desktop:-ml-60 desktop:mr-16 laptop:-ml-60 laptop:mr-12 tablet:-mt-[11.4rem] 3xl:-mt-[6.4rem] 2xl:-mt-[6.4rem] desktop:-mt-[6.4rem] laptop:-mt-[6.4rem] tablet:-ml-72 tablet:mr-20  -mt-[11.7rem]">
               {user.photoURL && user.photoURL !== '' ? (
                  <img
                    src={user.photoURL}  
                    className="w-12 h-12 rounded-full cursor-pointer mt-24"
                    onClick={() => setDropdownOpen((prev) => !prev)}
                  />
                ) : (
                  <FaUserCircle  
                    size={42}
                    className="cursor-pointer text-white hover:text-[#4864EC] mt-24"
                    onClick={() => setDropdownOpen((prev) => !prev)}
                  />
                )}

                {dropdownOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 top-[9.2rem] w-48 bg-white shadow-lg py-2 z-50">
                    <span className="block px-4 py-2 text-gray-800 font-semibold">
                      {user.displayName}
                    </span>

                    {user && isAdmin && (
                      <div className="block px-4 py-2 text-[#4864EC] font-medium ">
                        <Link to="/dashboard/adminHome">Dashboard</Link>
                      </div>
                    )}
                    {user && !isAdmin && (
                      <div className="block px-4 py-2 text-[#4864EC] font-medium ">
                        <Link to="/dashboard/userHome">Profile</Link>
                      </div>
                    )}
                    <button
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 "
                      onClick={handleLogOut}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>

            ) : (
              <div className="flex items-center">
                <Link to="/sign-in" className="mr-4 3xl:-mt-28 2xl:-mt-28 desktop:-mt-28 laptop:-mt-28 tablet:-mt-24 -mt-24 3xl:block 2xl:block desktop:block laptop:block tablet:block hidden ">
                  <button className="capitalize font-raleway font-medium  text-[#ffffff] gap-4 shadow-none 3xl:px-7 2xl:px-7 desktop:px-7  px-5 3xl:-ml-2  desktop:-ml-20  laptop:-ml-28 ml-16   mr-2 3xl:py-5 2xl:py-5 desktop:py-5  py-[1.12rem] 3xl:mr-32  2xl:mr-36 2xl:-ml-10 2xl:mt-[6.3rem] desktop:mr-14 desktop:mt-[6.4rem] laptop:mt-[6.4rem] tablet:-mr-12 tablet:ml-40 whitespace-nowrap  ">
                    <span className="-mt-2 3xl:text-[15px] 2xl:text-[15px] desktop:text-[15px] laptop:text-[15px] tablet:text-[15px] text-[13px] whitespace-nowrap ">Sign in</span>
                  </button>
                </Link>

                 <Link to="/sign-in" className="mr-4 3xl:-mt-28 2xl:-mt-28 desktop:-mt-28 laptop:-mt-28 tablet:-mt-24 -mt-24 3xl:hidden 2xl:hidden desktop:hidden laptop:hidden tablet:hidden block ">
                  
                    <span className="text-[13px] whitespace-nowrap text-white mr-7 ">Sign in</span>
                
                </Link>
              </div>
            )}
            {!user && (
              <div className="flex items-center">
                <Link to="/sign-up" className='tablet:-mt-24 -mt-24 3xl:-mt-0 2xl:-mt-0 desktop:-mt-0 laptop:-mt-0'>
                  <button className=" hover:bg-[#4864EC] bg-[#4864EC] font-raleway rounded-none capitalize text-white gap-4 3xl:px-4 2xl:px-4 desktop:px-4 laptop:px-3 tablet:px-3 3xl:py-2 2xl:py-2 desktop:py-2  laptop:py-2 tablet:py-2 px-2 py-1 -mr-4 -ml-10 3xl:mr-20 3xl:-ml-36  2xl:mr-[2rem] 2xl:-ml-[10rem]  desktop:mr-[4.5rem] desktop:-ml-20 laptop:mr-14 laptop:-ml-10 tablet:mr-0 tablet:ml-4 font-medium 3xl:-mt-36 2xl:-mt-36 desktop:-mt-36 laptop:-mt-36 whitespace-nowrap  ">
                    <span className="-mt-2 3xl:text-[15px] 2xl:text-[15px] desktop:text-[15px] laptop:text-[15px] tablet:text-[15px] text-[13px] whitespace-nowrap">Sign Up</span>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
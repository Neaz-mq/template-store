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


  // When the user signs in, ensure the dropdown is closed by default
  useEffect(() => {
    if (user) {
      setDropdownOpen(false);  // Ensure the dropdown is closed when user logs in
    }
  }, [user]);  // Runs whenever the user state changes


  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  };

  const handleSelect = (link) => {
    setSelected(link); // Set the selected link
  };

  // Use useEffect to update the selected link based on the current path
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
    } else if (location.pathname.includes('check')) {
      setSelected('check');
    } else if (location.pathname.includes('sign-in') || location.pathname.includes('sign-up')) {
      setSelected(null);
    }
  }, [location.pathname]);


  return (
    <div className="bg-[#282A37] font-raleway">
      <div className="container mx-auto">
        <div className="navbar -mt-[6rem] 3xl:-mt-[7rem] 2xl:-mt-[7rem] laptop:-mt-[7rem] tablet:-mt-[4rem] -ml-2">
          <div className="navbar-start">
            {/* Dropdown for mobile */}
            <div className="dropdown">
              <div tabIndex={0} className="3xl:hidden text-[#ffffff] 2xl:hidden desktop:hidden laptop:ml-20 laptop:block laptop:mt-[6rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                className="menu menu-sm cursor-pointer dropdown-content -mt-16 z-[1] p-8 leading-8 shadow bg-base-100 w-52 text-center -ml-2 font-raleway font-semibold text-[17px]"
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
                  Company
                </Link>
                <Link
                  to="/contact"
                  onClick={() => handleSelect('contact')}
                  className={` mb-3 font-raleway ${selected === 'contact' ? 'text-[#98a9ff]' : ''}`}
                >
                  Contact Us
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
                  <Link to="/dashboard/cart" className="btn ml-4">
                    <FaShoppingCart className="mr-4"></FaShoppingCart>
                    <div className="badge">+{cart.length}</div>
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              to="/"
              onClick={() => handleSelect(null)}
              className="3xl:mt-10 2xl:mt-10 desktop:mt-10 mt-8 3xl:ml-20 2xl:ml-20 desktop:ml-20 ml-2 -mr-1  3xl:-mr-2 2xl:-mr-2 desktop:-mr-2 mb-8"
            >
              <div className="mt-[5.5rem] ">
                <img
                  className="3xl:hidden 2xl:hidden desktop:hidden laptop:hidden  tablet:ml-[2rem] w-36 h-auto"
                  src="/Logo_Prographr_Color.svg"
                  alt="Logo"
                />
              </div>
              <div className="mt-[5.5rem]">
                <a href="/">
                  <img
                    className="hidden 3xl:block 2xl:block desktop:block laptop:block w-36 h-auto 2xl:ml-[9.5rem] 2xl:pt-1 desktop:ml-[0.8rem] laptop:ml-[0.4rem] laptop:pt-2"
                    src="/Logo_Prographr_Semi Color.svg"
                    alt="Logo"
                  />
                </a>
              </div>
            </Link>
          </div>

          {/* Center menu */}
          <div className="navbar-center hidden 3xl:flex 2xl:flex desktop:flex ml-16 -mr-14 3xl:mr-36">
            <ul className="menu cursor-pointer menu-horizontal text-[#ffffff] flex-row gap-8 font-raleway font-semibold 3xl:mr-8 3xl:gap-8 3xl:mt-[5rem] 2xl:mr-28 2xl:gap-0 desktop:gap-4 desktop:mt-[6.2rem] 2xl:mt-[5rem] desktop:ml-16 text-[17px] laptop:mr-1 laptop:ml-32 laptop:gap-1 laptop:mt-[5.5rem]">
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
                Company
              </Link>
              <Link
                to="/contact"
                onClick={() => handleSelect('contact')}
                className={` mt-[1.3rem] 2xl:mr-8 3xl:mr-0 ${selected === 'contact' ? 'text-[#98a9ff]' : ''}`}
              >
                Contact Us
              </Link>



              {user && isAdmin && (
                <li className="mt-[0.8rem] laptop:mr-2 2xl:mr-6 2xl:-ml-4 3xl:mr-0 3xl:-ml-0">
                  <Link to="/dashboard/adminHome">Dashboard</Link>
                </li>
              )}
              {user && !isAdmin && (
                <li className="mt-[0.8rem] laptop:mr-2">
                  <Link to="/dashboard/userHome">Dashboard</Link>
                </li>
              )}

              <Link to="/dashboard/cart">
                <div className="relative ml-4 mr-16 3xl:mt-5 2xl:mt-5 2xl:ml-10 2xl:-mr-28  3xl:ml-64 3xl:-mr-44 laptop:mt-2 laptop:ml-2 laptop:mr-10">
                  {/* Cart Icon */}
                  <FaShoppingCart className="mr-4 cursor-pointer  text-xl" />

                  {/* Cart Length Badge */}
                  {cart.length > 0 && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      +{cart.length}
                    </div>
                  )}
                </div>

              </Link>
            </ul>
          </div>

          {/* Right section (Sign in / Sign up / Sign out) */}
          <div className="navbar-end gap-3 3xl:gap-0 2xl:gap-0 desktop:gap-0">
            {user ? (
              <div className="-ml-52 mr-56">
                {user.photoURL && user.photoURL !== '' ? (
                  <img
                    src={user.photoURL}  // Use photoURL if it exists and is not empty
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full cursor-pointer mt-24"
                    onClick={() => setDropdownOpen((prev) => !prev)}
                  />
                ) : (
                  <FaUserCircle  // Fallback to FaUserCircle if photoURL is absent or empty
                    size={42}
                    className="cursor-pointer text-white hover:text-[#4864EC] mt-24"
                    onClick={() => setDropdownOpen((prev) => !prev)}
                  />
                )}

                {dropdownOpen && (
                  <div className="absolute right-0 mt-4 w-48 bg-white shadow-lg rounded-md py-2 z-10 -ml-52 mr-72">
                    <span className="block px-4 py-2 text-gray-800 font-semibold">
                      {user.displayName}
                    </span>
                    <button
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                      onClick={handleLogOut}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center">
                <Link to="/sign-in" className="mr-4">
                  <button className="capitalize font-raleway font-semibold text-[#ffffff] gap-4 shadow-none 3xl:px-7 2xl:px-7 desktop:px-7 px-5 -ml-4 mr-8 3xl:py-5 2xl:py-5 desktop:py-5 py-[1.12rem] 3xl:mr-44 3xl:mt-[6.3rem] 2xl:mr-60 2xl:mt-[6.3rem] desktop:mr-20 desktop:mt-[6.4rem] laptop:mt-[6.4rem] tablet:mr-10">
                    <span className="-mt-2">Sign in</span>
                  </button>
                </Link>
              </div>
            )}

            {/* "Sign Up" button always visible */}
            {!user && (
              <div className="flex items-center">
                <Link to="/sign-up">
                  <button className="btn btn-sm hover:bg-[#4864EC] bg-[#4864EC] font-raleway rounded-none capitalize text-white gap-4 3xl:px-6 2xl:px-6 desktop:px-6 px-5 3xl:py-5 2xl:py-5 desktop:py-5 py-[1.1rem] -mr-4 -ml-14 3xl:mr-56 3xl:-ml-48 3xl:mt-[6.3rem] 2xl:mr-[15.5rem] 2xl:-ml-[15.6rem] 2xl:mt-[6.3rem] desktop:mr-[4.5rem] desktop:-ml-20 desktop:mt-[6.4rem] laptop:mt-[6.4rem] laptop:mr-14 laptop:-ml-10 tablet:mr-10 font-semibold">
                    <span className="-mt-2">Sign Up</span>
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

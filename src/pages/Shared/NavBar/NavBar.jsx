import { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { AuthContext } from '../../../providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const [selected, setSelected] = useState(null);
  const location = useLocation(); 

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
    } else if (location.pathname.includes('sign-in') || location.pathname.includes('sign-up')) {
      setSelected(null); 
    }
  }, [location.pathname]);
  

  return (
    <div className="bg-[#ffffff] font-raleway">
      <div className="container mx-auto">
        <div className="navbar -mt-[6rem] 3xl:-mt-[7rem] 2xl:-mt-[7rem] laptop:-mt-[7rem] -ml-2">
          <div className="navbar-start">
            {/* Dropdown for mobile */}
            <div className="dropdown">
              <div tabIndex={0} className="3xl:hidden 2xl:hidden desktop:hidden laptop:ml-20 laptop:block laptop:mt-[6rem]">
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
                  className={` mb-3 mt-4 font-roboto ${selected === 'template' ? 'text-[#4864EC]' : ''}`}
                >
                  Template
                </Link>
                <Link
                  to="/company"
                  onClick={() => handleSelect('company')}
                  className={` mb-3 font-roboto ${selected === 'company' ? 'text-[#4864EC]' : ''}`}
                >
                  Company
                </Link>
                <Link
                  to="/contact"
                  onClick={() => handleSelect('contact')}
                  className={` mb-3 font-roboto ${selected === 'contact' ? 'text-[#4864EC]' : ''}`}
                >
                  Contact Us
                </Link>

                {user && isAdmin && (
                  <li className="font-roboto ml-6 font-medium text-3xl">
                    <Link to="/dashboard/adminHome">Dashboard</Link>
                  </li>
                )}
                {user && !isAdmin && (
                  <li className="font-roboto ml-6 font-medium text-3xl">
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
                  src="/Logo_Prographr_Semi Color 2.svg"
                  alt="Logo"
                />
              </div>
              <div className="mt-[5.5rem]">
                <a href="/">
                  <img
                    className="hidden 3xl:block 2xl:block desktop:block laptop:block w-36 h-auto 2xl:ml-[9.5rem] 2xl:pt-1 desktop:ml-[0.8rem] laptop:ml-[0.4rem] laptop:pt-2"
                    src="/Logo_Prographr_Color.svg"
                    alt="Logo"
                  />
                </a>
              </div>
            </Link>
          </div>

          {/* Center menu */}
          <div className="navbar-center hidden 3xl:flex 2xl:flex desktop:flex ml-16 -mr-14 3xl:mr-36">
            <ul className="menu cursor-pointer menu-horizontal text-[#282A37] flex-row gap-8 font-raleway font-semibold 3xl:mr-8 3xl:gap-8 3xl:mt-24 2xl:mr-28 2xl:gap-0 desktop:gap-4 desktop:mt-[6.2rem] 2xl:mt-24 desktop:ml-16 text-[17px] laptop:mr-1 laptop:ml-32 laptop:gap-1 laptop:mt-[5.5rem]">
              <Link
                to="/template"
                onClick={() => handleSelect('template')}
                className={` mt-[1.3rem] 2xl:mr-8 3xl:mr-0 ${selected === 'template' ? 'text-[#4864EC]' : ''}`}
              >
                Template
              </Link>
              <Link
                to="/company"
                onClick={() => handleSelect('company')}
                className={` mt-[1.3rem] 2xl:mr-8 3xl:mr-0 ${selected === 'company' ? 'text-[#4864EC]' : ''}`}
              >
                Company
              </Link>
              <Link
                to="/contact"
                onClick={() => handleSelect('contact')}
                className={` mt-[1.3rem] 2xl:mr-8 3xl:mr-0 ${selected === 'contact' ? 'text-[#4864EC]' : ''}`}
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
                <button className="btn ml-4 mr-16 3xl:mt-1 2xl:mt-2  2xl:mr-20 2xl:-ml-4 3xl:-ml-0 3xl:mr-10 laptop:mt-2 laptop:ml-2 laptop:mr-10">
                <FaShoppingCart className="mr-4"></FaShoppingCart>
                  <div className="badge">+{cart.length}</div>
                </button>
              </Link>
            </ul>
          </div>

          {/* Right section (Sign in / Sign up / Sign out) */}
          <div className="navbar-end gap-3 3xl:gap-0 2xl:gap-0 desktop:gap-0">
            {user ? (
              <div className="flex items-center">
                <span className="hidden 3xl:block 2xl:block font-bold text-2xl text-[#7868E6] mr-16 3xl:mt-[6.3rem] 3xl:-ml-[12rem] 3xl:mr-[6rem] 2xl:mt-[6.3rem] 2xl:-ml-[8.2rem] 2xl:mr-[5rem] laptop:hidden tablet:hidden font-roboto">
                  {user.displayName}
                </span>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm bg-[#ffffff] hover:bg-[#ffffff] capitalize rounded-none font-raleway text-[#201e24] gap-4 shadow-none !border-[#5D4987] -ml-14 mr-14 tablet:mr-16 tablet:-ml-1 py-[1.12rem] 3xl:mt-[6.3rem] 3xl:mr-[14.4rem] 3xl:-ml-[3rem] 2xl:mr-[17.4rem] 2xl:-ml-[5rem] 2xl:mt-[6.8rem] desktop:mt-[6.4rem] desktop:-ml-[10.7rem] laptop:mt-[6.4rem] laptop:-ml-36"
                >
                  <span className="-mt-2">Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <Link to="/sign-in" className="mr-4">
                  <button
                    style={{ whiteSpace: 'nowrap' }}
                    className="capitalize font-raleway font-semibold text-[#282A37] gap-4 shadow-none 3xl:px-7 2xl:px-7 desktop:px-7 px-5 -ml-4 mr-8 3xl:py-5 2xl:py-5 desktop:py-5 py-[1.12rem] 3xl:mr-44 3xl:mt-[6.3rem] 2xl:mr-60 2xl:mt-[6.8rem] desktop:mr-20 desktop:mt-[6.4rem] laptop:mt-[6.4rem] tablet:mr-10"
                  >
                    <span className="-mt-2">Sign in</span>
                  </button>
                </Link>
              </div>
            )}

            {/* "Sign Up" button always visible */}
            <div className="flex items-center">
              <Link to="/sign-up">
                <button
                  style={{ whiteSpace: 'nowrap' }}
                  className="btn btn-sm hover:bg-[#4864EC] bg-[#4864EC] font-raleway rounded-none capitalize text-white gap-4 3xl:px-6 2xl:px-6 desktop:px-6 px-5 3xl:py-5 2xl:py-5 desktop:py-5 py-[1.1rem] -mr-4 -ml-14 3xl:mr-56 3xl:-ml-48 3xl:mt-[6.3rem] 2xl:mr-[15.5rem] 2xl:-ml-[15.6rem] 2xl:mt-[6.8rem] desktop:mr-[4.5rem] desktop:-ml-20 desktop:mt-[6.4rem] laptop:mt-[6.4rem] laptop:mr-14 laptop:-ml-10 tablet:mr-10 font-semibold"
                >
                  <span className="-mt-2">Sign Up</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;


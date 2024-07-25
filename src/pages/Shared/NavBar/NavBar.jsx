import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';

const NavBar = () => {

  const location = useLocation();
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  };

  const getTextColorClass = () => {
    if (location.pathname === '/template') {
      return 'text-[#767BE8]';
    } else {
      return 'text-base';
    }
  };

  const getTextColorCompany = () => {
    if (location.pathname === '/company') {
      return 'text-[#767BE8]';
    } else {
      return 'text-base';
    }
  };

  const getTextColorContact = () => {
    if (location.pathname === '/contact') {
      return 'text-[#767BE8]';
    } else {
      return 'text-base';
    }
  };

  return (

    <div className="bg-white">
      <div className="container mx-auto">
        <div className="navbar -mt-[6rem] 3xl:-mt-[7rem] 2xl:-mt-[7rem] desktop:-mt-[7rem] laptop:-mt-[7rem]">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} className="lg:hidden ml-3">
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
                className="menu menu-sm cursor-pointer dropdown-content -mt-16 z-[1] p-8 leading-8 shadow bg-base-100 w-52 text-center -ml-2 font-roboto font-medium"
              >
                <Link to="/" className="text-xl mt-5 ml-4 mr-1 mb-8">
                  <img
                    src="https://prographr.vercel.app/_next/static/media/logo.426fb6b7.svg"
                    alt=""
                  />
                </Link>

                <Link
                  to="/template"
                  className={`hover:text-[#7673E5] mb-3 font-roboto ${getTextColorClass()}`}
                >
                  Template
                </Link>
                <Link
                  to="/company"
                  className={`hover:text-[#7673E5] mb-3 font-roboto ${getTextColorCompany()}`}
                >
                  Company
                </Link>
                <Link
                  to="/contact"
                  className={`hover:text-[#7673E5] mb-3 font-roboto ${getTextColorContact()}`}
                >
                  Contact Us
                </Link>

                {
                  user && isAdmin && <li className='font-roboto ml-6 font-medium   text-3xl'><Link to="/dashboard/adminHome">Dashboard</Link></li>
                }
                {
                  user && !isAdmin && <li className='font-roboto ml-6 font-medium text-3xl'><Link to="/dashboard/userHome">Dashboard</Link></li>
                }

                {/* Include the Inbox button in the mobile dropdown */}
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
              className={`${getTextColorClass()} lg:mt-10 mt-8 lg:ml-20 ml-2 -mr-1  lg:-mr-2 mb-8`}
            >
              {/* Show different image on mobile */}
              <div className="mt-[5.5rem] ">
                <img
                  className="lg:hidden  tablet:ml-[2rem]"
                  src="https://prographr.vercel.app/_next/static/media/icon.87854914.svg"
                  alt=""
                />
              </div>
              {/* Show original logo on larger devices */}
              <div className="mt-[5.5rem] ">
                <img
                  className="hidden lg:block 3xl:ml-[9.3rem] 3xl:pt-1 2xl:ml-[9.3rem] 2xl:pt-1 desktop:ml-[0.4rem] desktop:pt-1 laptop:ml-[0.4rem] laptop:pt-1"
                  src="https://prographr.vercel.app/_next/static/media/logo.426fb6b7.svg"
                  alt=""
                />
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex ml-16 -mr-14 3xl:mr-36 ">
            <ul className="menu text-base cursor-pointer menu-horizontal desktop:flex flex-row gap-8  font-roboto text-[#15141ce7] font-medium 3xl:mr-8 3xl:gap-8 3xl:mt-24 2xl:mr-28 2xl:gap-6 2xl:mt-24 desktop:mr-32 desktop:gap-6 desktop:mt-[6rem] laptop:mr-12 laptop:-ml-10 laptop:gap-2 laptop:mt-[5.5rem] ">
              <Link
                to="/template"
                className={`hover:text-[#7673E5] mt-[1.3rem]  ${getTextColorClass()}`}
              >
                Template
              </Link>
              <Link
                to="/company"
                className={`hover:text-[#7673E5] mt-[1.3rem] ${getTextColorCompany()}`}
              >
                Company
              </Link>
              <Link
                to="/contact"
                className={`hover:text-[#7673E5] mt-[1.3rem] ${getTextColorContact()}`}
              >
                Contact Us
              </Link>


              {
                user && isAdmin && <li className='mt-3 '><Link to="/dashboard/adminHome">Dashboard</Link></li>
              }
              {
                user && !isAdmin && <li className='mt-3'><Link to="/dashboard/userHome">Dashboard</Link></li>
              }

              <Link to="/dashboard/cart">
                <button className="btn ml-4 mr-16 3xl:mt-2 2xl:mt-2 desktop:mt-2 laptop:mt-2" >
                  <FaShoppingCart className="mr-4"></FaShoppingCart>
                  <div className="badge">+{cart.length}</div>
                </button>
              </Link>


            </ul>

          </div>

          <div className="navbar-end gap-3 lg:gap-0">
            {user ? (
              <div className="flex items-center">
                <span className=" hidden  3xl:block 2xl:block font-bold text-2xl text-[#7868E6]  mr-16 3xl:mt-[6.3rem] 3xl:-ml-[12rem] 3xl:mr-[6rem] 2xl:mt-[6.3rem] 2xl:-ml-[7.75rem] 2xl:mr-[4.5rem] desktop:hidden laptop:hidden tablet:hidden font-roboto  ">
                  {user.displayName}
                </span>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm bg-transparent capitalize hover:bg-[#C8C5F0] rounded-full font-roboto text-[#201e24] gap-4 shadow-none  hover:bg-primary/30 !border-[#5D4987]  -ml-10 mr-10 tablet:mr-10 tablet:-ml-10   py-[1.12rem] 3xl:mt-[6.8rem]  3xl:mr-[14.4rem] 3xl:-ml-[3rem]  2xl:mr-[17.4rem] 2xl:-ml-[5rem] 2xl:mt-[6.8rem]  desktop:mt-[6.4rem] desktop:-ml-[9.5rem] laptop:mt-[6.4rem] laptop:-ml-36"
                >
                  <span className="-mt-2">Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <Link to="/sign-in" className="mr-4">
                  <button style={{ whiteSpace: 'nowrap' }} className="btn btn-sm bg-transparent capitalize hover:bg-[#C8C5F0] rounded-full font-roboto font-medium text-[#241e2f] gap-4 shadow-none lg:px-7 px-5 hover:bg-primary/30 !border-[#5D4987]  -ml-4 mr-8  lg:py-5 py-[1.12rem] 3xl:mr-48 3xl:mt-[6.8rem]  2xl:mr-60 2xl:mt-[6.8rem] desktop:mr-14 desktop:mt-[6.4rem] laptop:mr-14  laptop:ml-0 laptop:mt-[6.4rem]">
                    <span className="-mt-2">Sign in</span>
                  </button>
                </Link>
              </div>
            )}

            {/* "Sign Up" button always visible */}
            <div className="flex items-center">
              <Link to="/sign-up">
                <button style={{ whiteSpace: 'nowrap' }} className="btn btn-sm  hover:bg-[#6658C5] bg-[#7666E3] font-roboto capitalize text-white rounded-full gap-4 font-medium lg:px-6 px-5 lg:py-5 py-[1.1rem] mr-4 -ml-10  3xl:mr-56 3xl:-ml-48 3xl:mt-[6.8rem] 2xl:mr-[15.5rem] 2xl:-ml-[15.6rem] 2xl:mt-[6.8rem] desktop:mr-16 desktop:-ml-16  desktop:mt-[6.4rem] laptop:mt-[6.4rem]  laptop:-ml-14 laptop:mr-16    ">
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
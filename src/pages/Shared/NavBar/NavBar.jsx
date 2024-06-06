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

    <div>
      
      <div className="navbar bg-[#EDEEF7] py-7 -mt-7 ">
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
              className="menu menu-sm cursor-pointer  dropdown-content -mt-16 z-[1] p-8 leading-8 shadow bg-base-100 w-52 text-center -ml-2 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-semibold"
            >
              <Link to="/" className="text-xl mt-10 ml-4 mr-1 mb-8">
                <img
                  src="https://prographr.vercel.app/_next/static/media/logo.426fb6b7.svg"
                  alt=""
                />
              </Link>

              <Link
                to="/template"
                className={`hover:text-[#7673E5] mb-2 ${getTextColorClass()}`}
              >
                Template
              </Link>
              <Link
                to="/company"
                className={`hover:text-[#7673E5] mb-2 ${getTextColorCompany()}`}
              >
                Company
              </Link>
              <Link
                to="/contact"
                className={`hover:text-[#7673E5] ${getTextColorContact()}`}
              >
                Contact Us
              </Link>

              {
                user && isAdmin && <li className='mt-2 ml-6 font-medium text-3xl'><Link to="/dashboard/adminHome">Dashboard</Link></li>
              }
              {
                user && !isAdmin && <li className='mt-2 ml-6 font-medium text-3xl'><Link to="/dashboard/userHome">Dashboard</Link></li>
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
            <img
              className="lg:hidden"
              src="https://prographr.vercel.app/_next/static/media/icon.87854914.svg"
              alt=""
            />
            {/* Show original logo on larger devices */}
            <img
              className="hidden lg:block"
              src="https://prographr.vercel.app/_next/static/media/logo.426fb6b7.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ml-16 -mr-14 ">
          <ul className="menu text-base cursor-pointer  menu-horizontal lg:flex flex-row gap-10 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-[#1e1c27] font-semibold">
            <Link
              to="/template"
              className={`hover:text-[#7673E5] mt-4  ${getTextColorClass()}`}
            >
              Template
            </Link>
            <Link
              to="/company"
              className={`hover:text-[#7673E5] mt-4 ${getTextColorCompany()}`}
            >
              Company
            </Link>
            <Link
              to="/contact"
              className={`hover:text-[#7673E5] mt-4 ${getTextColorContact()}`}
            >
              Contact Us
            </Link>


            {
              user && isAdmin && <li className='mt-2'><Link to="/dashboard/adminHome">Dashboard</Link></li>
            }
            {
              user && !isAdmin && <li className='mt-2'><Link to="/dashboard/userHome">Dashboard</Link></li>
            }

            <Link to="/dashboard/cart">
              <button className="btn ml-4 mr-16">
                <FaShoppingCart className="mr-4"></FaShoppingCart>
                <div className="badge">+{cart.length}</div>
              </button>
            </Link>


          </ul>

        </div>

        <div className="navbar-end gap-3 lg:gap-0">
          {user ? (
            <div className="flex items-center">
              <span className=" hidden lg:block font-bold text-2xl text-[#7868E6]  mr-16">
                {user.displayName}
              </span>
              <button
                onClick={handleLogOut}
                className="btn btn-sm bg-transparent capitalize hover:bg-[#C8C5F0] rounded-full font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-[#241e2f] gap-4 shadow-none lg:px-7 px-5 hover:bg-primary/30 !border-[#5D4987]  -ml-14 mr-20 lg:-ml-14 lg:py-5 py-4"
              >
                <span className="-mt-2">Sign Out</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <Link to="/sign-in" className="mr-4">
                <button style={{ whiteSpace: 'nowrap' }} className="btn btn-sm bg-transparent capitalize hover:bg-[#C8C5F0] rounded-full font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-[#241e2f] gap-4 shadow-none lg:px-7 px-5 hover:bg-primary/30 !border-[#5D4987] lg:mr-8 -ml-4 mr-8 lg:-ml-7 lg:py-5 py-4">
                  <span className="-mt-2">Sign in</span>
                </button>
              </Link>
            </div>
          )}

          {/* "Sign Up" button always visible */}
          <div className="flex items-center">
            <Link to="/sign-up">
              <button style={{ whiteSpace: 'nowrap' }} className="btn btn-sm  hover:bg-[#6658C5] bg-[#7666E3] font-['__gellix_0bf537, __gellix_Fallback_0bf537'] capitalize text-white rounded-full gap-4 lg:px-6 px-8 lg:py-5 py-4 lg:mr-20 mr-4 -ml-10 lg:-ml-9 ">
                <span className="-mt-2">Sign Up</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default NavBar;
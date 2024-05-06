import { FaHome, FaList, FaSearch, FaShoppingCart, FaUsers} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { ImInsertTemplate } from "react-icons/im";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();

    
 // TODO: get isAdmin value from the database
 const [isAdmin] = useAdmin();


    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#7868E6]">

                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                     <li>
                        <NavLink to="/dashboard/adminHome">
                            <FaHome></FaHome>
                            Admin Home</NavLink>
                    </li>
                    <li>
                                <NavLink to="/dashboard/addTemplates">
                                <ImInsertTemplate />
                                    Add Templates</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageTemplates">
                                    <FaList></FaList>
                                    Manage Templates</NavLink>
                            </li>
                           
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li> 
                        </>

                        :
                        <>
                        <li>
                        <NavLink to="/dashboard/userHome">
                            <FaHome></FaHome>
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart></FaShoppingCart>
                            My Cart ({cart.length})</NavLink></li>
                        </>
                    }


                {/* shared nav links */}

                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/template">
                            <FaSearch></FaSearch>
                            Template</NavLink>
                    </li>
                </ul>
            </div>

            {/* dashboard content */}

            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
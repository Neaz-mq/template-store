import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Templates from "../pages/Temp/Templates/Templates";
import Company from "../pages/Company/Company";
import Contact from "../pages/Contact/Contact";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp/SignUp";
import BuyerSignUp from "../pages/SignUp/BuyerSignUp/BuyerSignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import TemplateDetails from "../pages/TemplateDetails/TemplateDetails";
import FreeTemplateDetails from "../pages/FreeTemplateDetails/FreeTemplateDetails";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddTemplates from "../pages/Dashboard/AddTemplates/AddTemplates";
import AdminRoute from "./AdminRoute";
import ManageTemplates from "../pages/Dashboard/ManageTemplates/ManageTemplates";
import UpdateTemplate from "../pages/Dashboard/UpdateTemplate/UpdateTemplate";
import AddFreeTemplates from "../pages/Dashboard/AddFreeTemplates/AddFreeTemplates";
import ManageFreeTemplates from "../pages/Dashboard/ManageFreeTemplates/ManageFreeTemplates";
import UpdateFreeTemplate from "../pages/Dashboard/UpdateFreeTemplate/UpdateFreeTemplate";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AllAdmins from "../pages/Dashboard/AllAdmins/AllAdmins";
import AddExclusiveTemplates from "../pages/Dashboard/AddExclusiveTemplates/AddExclusiveTemplates";
import ManageExclusiveTemplates from "../pages/Dashboard/ManageExclusiveTemplates/ManageExclusiveTemplates";
import ExclusiveTemplateDetails from "../pages/ExclusiveTemplateDetails/ExclusiveTemplateDetails";
import UpdateExclusiveTemplate from "../pages/Dashboard/UpdateExclusiveTemplate/UpdateExclusiveTemplate";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/template',
        element: <Templates></Templates>
      },

      {
        path: '/template/:id',
        element: <TemplateDetails></TemplateDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/template/${params.id}`)
      },

      {
        path: '/free/:id',
        element: <FreeTemplateDetails></FreeTemplateDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/free/${params.id}`)
      },

      {
        path: '/exclusive/:id',
        element: <ExclusiveTemplateDetails></ExclusiveTemplateDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/exclusive/${params.id}`)
      },

      {
        path: '/company',
        element: <Company></Company>
      },

      // {
      //   path: '/market',
      //   element: <Market></Market>
      // },

      {
        path: '/contact',
        element: <Contact></Contact>
      },

      {
        path: '/sign-in',
        element: <SignIn></SignIn>
      },

      {
        path: '/sign-up',
        element: <SignUp></SignUp>
      },

      {
        path: '/sign-up-here',
        element: <BuyerSignUp></BuyerSignUp>
      },

      {
        path: 'secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }

    ]
  },

  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,

    children: [

      // normal user routes

      {
        path: 'userHome',
        element: <UserHome></UserHome>
      },

      {
        path: 'cart',
        element: <Cart></Cart>
      },

      {
        path: 'payment',
        element: <Payment></Payment>
      },

      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },

      // admin only routes

      {
        path: 'adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },

      {
        path: 'uploadTemplates',
        element: <AdminRoute><AddTemplates></AddTemplates></AdminRoute>
      },

      {
        path: 'manageTemplates',
        element: <AdminRoute><ManageTemplates></ManageTemplates></AdminRoute>
      },

      {
        path: 'updateTemplate/:id',
        element: <AdminRoute><UpdateTemplate></UpdateTemplate></AdminRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/template/${params.id}`)
      },

      {
        path: 'uploadFreeTemplates',
        element: <AdminRoute><AddFreeTemplates></AddFreeTemplates></AdminRoute>
      },

      {
        path: 'manageFreeTemplates',
        element: <AdminRoute><ManageFreeTemplates></ManageFreeTemplates></AdminRoute>
      },

      {
        path: 'updateFreeTemplate/:id',
        element: <AdminRoute><UpdateFreeTemplate></UpdateFreeTemplate></AdminRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/free/${params.id}`)
      },

      {
        path: 'uploadExclusiveTemplates',
        element: <AdminRoute><AddExclusiveTemplates></AddExclusiveTemplates></AdminRoute>
      },

      {
        path: 'manageExclusiveTemplates',
        element: <AdminRoute><ManageExclusiveTemplates></ManageExclusiveTemplates></AdminRoute>
      },

      {
        path: 'updateExclusiveTemplate/:id',
        element: <AdminRoute><UpdateExclusiveTemplate></UpdateExclusiveTemplate></AdminRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/exclusive/${params.id}`)
      },

      {
        path: 'users',
        element: <AllUsers></AllUsers>
      },

      {
        path: 'admins',
        element: <AllAdmins></AllAdmins>
      }

    ]
  }

]);
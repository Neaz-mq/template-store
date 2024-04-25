import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Templates from "../pages/Temp/Templates/Templates";
import Company from "../pages/Company/Company";
import Contact from "../pages/Contact/Contact";
import SignIn from "../pages/SignIn/SignIn";
import SignUpForm from "../pages/SignUpForm/SignUpForm/SignUpForm";
import SignUp from "../pages/SignUp/SignUp/SignUp";
import BuyerSignUp from "../pages/SignUp/BuyerSignUp/BuyerSignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import TemplateDetails from "../pages/TemplateDetails/TemplateDetails";
import FreeTemplateDetails from "../pages/FreeTemplateDetails/FreeTemplateDetails";





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
        loader: ({params}) => fetch(`http://localhost:5000/template/${params.id}`)
      },

      {
        path: '/free/:id',
        element: <FreeTemplateDetails></FreeTemplateDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/free/${params.id}`)
      },
    
    
     
      {
        path: '/company',
        element: <Company></Company>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/sign-in',
        element: <SignIn></SignIn>
      },
      {
        path: '/sign-up-as',
        element: <SignUpForm></SignUpForm>
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
]);
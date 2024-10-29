import React from 'react';
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/About/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import Footer from './components/Footer/footer.jsx';
import Users from './components/Users/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[{
      path:'/about',
      element:<About></About>
    },
    {
      path:'/contact',
      element:<Contact></Contact>
    },
    {
      path:'/footer',
      element:<Footer></Footer>
    },
    {
      path:'/users',
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
      element:<Users></Users>
    }

  ]
  },
  // {
  //   path:'/about',
  //   element:<div>I am in the about Page</div>
  // },
  // {
  //   path:'/contact',
  //   element:<div>I am in the contact page <br></br> Contact me you dumb ass</div>
  // },
  // {
  //   path:'header',
  //   element:<Header></Header>
  // }
  

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


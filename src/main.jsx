import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
 
 
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import DonationDetail from './Components/DonationDetail/DonationDetail';


const router = createBrowserRouter([
  {
   path : '/',
   element : <Root></Root>,
   errorElement : <ErrorPage></ErrorPage>,
   children : [
    {
      path : '/',
      element : <Home></Home>
    },
    {
      path : '/donation',
      element : <Donation></Donation>,
      loader : ()=> fetch('/campaign.json')
    },
    {
      path : '/donationDetail/:id',
      element : <DonationDetail></DonationDetail>,
      loader : ()=> fetch('/campaign.json')
    }
   ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

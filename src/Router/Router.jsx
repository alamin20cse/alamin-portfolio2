import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import HomeMain from "../Layout/Home/HomeMain";
import Home from "../Layout/Home/Home";
import BloodDonation from "../Projects/BloodDonation";
import MarathonManagement from "../Projects/MarathonManagement";
import ErrorPage from "../Layout/ErrorPage";
import CrowdFunding from "../Projects/CrowdFunding";
const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeMain></HomeMain>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/bloodDonation',
          element:<BloodDonation></BloodDonation>
        },
        {
          path:'/MarathonManagement',
          element:<MarathonManagement></MarathonManagement>
        },
        {
          path:'/CrowdFunding',
          element:<CrowdFunding></CrowdFunding>
        }
      ]
    },
    {
      path:'*',
      element:<ErrorPage></ErrorPage>

    }
  ]);

export default router;
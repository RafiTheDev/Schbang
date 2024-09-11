
import {createBrowserRouter,  } from "react-router-dom";
import Mainlayouts from "../Mainlayouts/Mainlayouts";
import Error from "../Error/Error";
import Homepage from "../Homepage/Homepage";
import Careers from "../Careers/Careers";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayouts></Mainlayouts>,
      errorElement:<Error></Error>,

      children: [
        {
            path:"/",
            element:<Homepage></Homepage>
        },

        {
            path:"/careers",
            element:<Careers></Careers>
        },
        
      ]
    },
  ]);


  export default router;
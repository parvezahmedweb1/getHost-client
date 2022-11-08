import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Hero from "../Pages/Hero/Hero.jsx";
import Services from "../Pages/Services/Services";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/home",
        element: <Hero />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);
export default router;

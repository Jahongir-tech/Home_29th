import { Route, Routes, useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import Lates from "../pages/lates/Lates";
import Layout from "../pages/layout/Layout";

const Router = () => {
  // return (
  //   <Routes>
  //     <Route path="/" element={<Home/>}/>
  //   </Routes>
  // )
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "lates",
          element: <Lates />,
        },
      ],
    },
  ]);
};

export default Router;

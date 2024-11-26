import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../pages/layouts/Layout";
import Test1Main from "../pages/test1/Test1Main";
import Test2Main from "../pages/test2/Test2Main";
import Menu from "../pages/layouts/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Menu />,
      },
      {
        path: ":id",
        element: <Test1Main />,
      },
      {
        path: "test2",
        element: <Test2Main />,
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
export default App;

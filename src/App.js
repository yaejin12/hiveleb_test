import "./App.css";
import Layout from "./pages/layouts/Layout";
import { router } from "./config/router-config";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  );
}

export default App;

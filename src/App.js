import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Component/Layout";
import Main from "./Component/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Layout />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

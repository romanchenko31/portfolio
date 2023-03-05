import ErrorPage from "../Component/Error/Error";
import Main from "../Component/Main/Main";
import Portfolio from "../Component/Portfolio/Portfolio";
import About from "../Component/About/About";
import Contacts from "../Component/Contacts/Contacts";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Main />,
        errorElement: <ErrorPage />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
        errorElement: <ErrorPage />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "contacts",
        element: <Contacts />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;

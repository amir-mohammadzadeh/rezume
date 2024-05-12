import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Records from "./pages/Records/Records";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/education',
                element: <Records />
            },
            {
                path: '/portfolios',
                element: <Portfolio />
            },
            {
                path: '/contact-me',
                element: <Contact />
            },
        ]
    },

])
export default router
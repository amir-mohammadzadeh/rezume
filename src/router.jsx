import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Records from "./pages/Records/Records";

export const router = [
    { path: '/', element: <Home  /> },
    { path: '/education', element: <Records /> },
    { path: '/portfolios', element: <Portfolio /> },
    { path: '/contact-me', element: <Contact /> },

]
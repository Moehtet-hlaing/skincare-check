import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../features/public/components/publicLayout";
import HomePage from "../features/public/pages/HomePage";
import AboutPage from "../features/public/pages/AboutPage";
import ContactPage from "../features/public/pages/ContactPage";
import dashboardRoute from "./dashboardRoute";
import NotFound from "../components/NotFound";
import productRoute from "./productRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
            {
                path: '/contact',
                element: <ContactPage />
            },
        ],        
    },
    ...productRoute
]);

export default router
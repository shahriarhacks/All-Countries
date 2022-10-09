import { createBrowserRouter } from "react-router-dom";
import About from "../components/about/About";
import Countries from "../components/countries/Countries";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "../components/Home/Home";
import Main from "./Main";
import Contact from '../components/contact/Contact'

export const router = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            {
                path: '/', element: <Home />
            },
            {
                path: '/home', element: <Home />
            },
            {
                path: "/countries", element: <Countries />
            },
            {
                path: '/about', element: <About />
            },
            {
                path: '/contact', element: <Contact />
            },
            {
                path: '*', element: <ErrorPage />
            }
        ]
    }
])
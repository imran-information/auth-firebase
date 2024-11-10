import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ListedItems from "../components/ListedItems";
import PrivetRoute from "./PrivetRoute";
import Profile from "../components/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'listed',
                element: <PrivetRoute><ListedItems></ListedItems></PrivetRoute>
            },
            {
                path: 'profile',
                element: <PrivetRoute><Profile></Profile></PrivetRoute>
            }
        ]
    }
])

export default router
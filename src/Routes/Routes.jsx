import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../Components/Root/Root';
import ErrorPage from '../Components/Error/ErrorPage';
import Home from '../Components/Home/Home';
import AppliedJobs from '../Components/Applied/AppliedJobs';
import Blogs from '../Components/Blogs/Blogs';
import SignIn from '../Components/SignIn/SignIn';
import JobDetails from '../Components/Home/AllJobs/JobDetails/JobDetails';
import SignUp from '../Components/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root></Root>,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/jobs',
                    loader: () => fetch('https://next-level-two-ashen.vercel.app/jobs'),
                    element: <PrivateRoute><AppliedJobs></AppliedJobs> </PrivateRoute>
                },
                {
                    path: '/blogs',
                    element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
                },
                {
                    path: '/login',
                    element: <SignIn></SignIn>
                },
                {
                    path: '/register',
                    element: <SignUp></SignUp>
                },
                {
                    path: '/job/:jobId',
                    loader: ({ params }) => fetch(`https://next-level-two-ashen.vercel.app/jobs/${params.jobId}`),
                    element: <JobDetails></JobDetails>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;
// App.jsx
import React, { useState } from 'react';

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import MainLayout from './screens/MainLayout';
import NewRequest from './screens/NewRequest';
import Estimate from './screens/Estimate';
import EventDetails from './screens/EventDetails';

const App = () => {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        { index: true, element: <Navigate to="/new-requests" replace /> },
      { path: "new-requests", element: <NewRequest /> },
      { path: "estimate", element: <Estimate /> },
      { path: "/event/:id", element: <EventDetails /> },
     
    ],
  },
]);



  return (
   <RouterProvider router={router} />
  );
};

export default App;
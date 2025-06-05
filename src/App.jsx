// App.jsx
import React, { useState } from 'react';

import { EventsList, Positions, Contractors, Users, Profile } from './components/OtherComponents';
import { createBrowserRouter, RouterProvider } from 'react-router';
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
      { path: "new-requests", element: <NewRequest /> },
      { path: "estimate", element: <Estimate /> },
      { path: "/event/:id", element: <EventDetails /> },
     
    ],
  },
]);

  const renderContent = () => {
    switch (activeSection) {
      case 'events':
        return <Dashboard />;
      case 'new-requests':
        return <NewRequests />;
      case 'estimate':
        return <Estimate />;
      case 'events-list':
        return <EventsList />;
      case 'positions':
        return <Positions />;
      case 'contractors':
        return <Contractors />;
      case 'users':
      case 'admins':
      case 'clients':
      case 'coordinators':
        return <Users />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
   <RouterProvider router={router} />
  );
};

export default App;
// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './component/pages/Dashboard.jsx';
import EditProfilePage from './component/pages/EditProfilePage.jsx';
import ViewActivity from './component/pages/ViewActivity.jsx';
import ManageSetting from './component/pages/ManageSetting.jsx';
import ProfilePage from './component/pages/ProfilePage.jsx';
import './index.css';
import App from './App.jsx';
import ContactPage from './component/pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Dashboard /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'edit-profile', element: <EditProfilePage /> },
      { path: 'view-activity', element: <ViewActivity /> },
      { path: 'manage-settings', element: <ManageSetting /> },
      {path: 'contact', element: <ContactPage />}
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

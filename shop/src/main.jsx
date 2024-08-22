// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateProductForm from './component/pages/CreateProductForm.jsx';
import Customers from './component/pages/Customer.jsx';
import ViewActivity from './component/pages/ViewActivity.jsx';
import ManageSetting from './component/pages/ManageSetting.jsx';
import ProfilePage from './component/pages/ProfilePage.jsx';
import './index.css';
import App from './App.jsx';
import AddressCard from './component/pages/AddreessCard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'create-product', element: <CreateProductForm /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'customer', element: <Customers /> },
     { path: 'view-activity', element: <ViewActivity /> },
      { path: 'manage-settings', element: <ManageSetting /> },
      {path: 'address', element: <AddressCard />}
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

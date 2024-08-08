import React from 'react';
import { Outlet } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import EditProfilePage from './component/pages/EditProfilePage'; // Correct import
// import ViewActivityPage from './component/pages/ViewActivityPage'; // Correct import
// import ManageSettingsPage from './component/pages/ManageSettingsPage'; // Correct import

const App = () => {
  return (
    <>
    <Outlet />
    </>
  
  );
};

export default App;


//Browsering Router
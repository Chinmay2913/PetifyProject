import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  const handleViewActivity = () => {
    navigate('/view-activity');
  };

  const handleManageSettings = () => {
    navigate('/manage-settings');
  };

  return (
    <div>
      <div>
        <h2>Profile Overview</h2>
        <p>View and edit your profile information.</p>
        <button onClick={handleEditProfile}>EDIT PROFILE</button>
      </div>
      <div>
        <h2>Recent Activity</h2>
        <p>Check your recent activity and updates.</p>
        <button onClick={handleViewActivity}>VIEW ACTIVITY</button>
      </div>
      <div>
        <h2>Settings</h2>
        <p>Adjust your account settings and preferences.</p>
        <button onClick={handleManageSettings}>MANAGE SETTINGS</button>
      </div>
    </div>
  );
};

export default ProfilePage;
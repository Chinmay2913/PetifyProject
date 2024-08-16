import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Switch, FormControlLabel, Button } from '@mui/material';

// Settings configuration stored in an array
const settingsConfig = [
  { id: 'notifications', label: 'Email Notifications', defaultValue: true },
  { id: 'privateAccount', label: 'Private Account', defaultValue: false },
  { id: 'twoFactorAuth', label: 'Two-Factor Authentication', defaultValue: false }
];

const ManageSettingsPage = () => {
  // Initialize state dynamically based on settingsConfig
  const initialState = settingsConfig.reduce((acc, setting) => {
    acc[setting.id] = setting.defaultValue;
    return acc;
  }, {});

  const [settings, setSettings] = useState(initialState);

  const handleToggle = (event) => {
    const { name, checked } = event.target;
    setSettings((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSaveChanges = () => {
    console.log('Settings saved:', settings);
    alert('Settings updated successfully!');
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ mb: 4 }}>
        Manage Settings
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Account Settings</Typography>
            {/* Map through settingsConfig to dynamically generate the form */}
            {settingsConfig.map((setting) => (
              <FormControlLabel
                key={setting.id}
                control={
                  <Switch
                    checked={settings[setting.id]}
                    onChange={handleToggle}
                    name={setting.id}
                    color="primary"
                  />
                }
                label={setting.label}
              />
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveChanges}
            sx={{ mt: 2 }}
          >
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ManageSettingsPage;

























// import React, { useState } from 'react';
// import { Container, Grid, Paper, Typography, Switch, FormControlLabel, Button } from '@mui/material';

// const ManageSettingsPage = () => {
//   const [settings, setSettings] = useState({
//     notifications: true,
//     privateAccount: false,
//     twoFactorAuth: false,
//   });

//   const handleToggle = (event) => {
//     const { name, checked } = event.target;
//     setSettings((prevState) => ({
//       ...prevState,
//       [name]: checked,
//     }));
//   };

//   const handleSaveChanges = () => {
//     console.log('Settings saved:', settings);
//     alert('Settings updated successfully!');
//   };

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4" sx={{ mb: 4 }}>
//         Manage Settings
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Paper sx={{ p: 2 }}>
//             <Typography variant="h6">Account Settings</Typography>
//             <FormControlLabel
//               control={
//                 <Switch
//                   checked={settings.notifications}
//                   onChange={handleToggle}
//                   name="notifications"
//                   color="primary"
//                 />
//               }
//               label="Email Notifications"
//             />
//             <FormControlLabel
//               control={
//                 <Switch
//                   checked={settings.privateAccount}
//                   onChange={handleToggle}
//                   name="privateAccount"
//                   color="primary"
//                 />
//               }
//               label="Private Account"
//             />
//             <FormControlLabel
//               control={
//                 <Switch
//                   checked={settings.twoFactorAuth}
//                   onChange={handleToggle}
//                   name="twoFactorAuth"
//                   color="primary"
//                 />
//               }
//               label="Two-Factor Authentication"
//             />
//           </Paper>
//         </Grid>
//         <Grid item xs={12}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSaveChanges}
//             sx={{ mt: 2 }}
//           >
//             Save Changes
//           </Button>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ManageSettingsPage;















import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Switch, FormControlLabel, Button } from '@mui/material';

const ManageSettingsPage = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    privateAccount: false,
    twoFactorAuth: false,
  });

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
            <FormControlLabel
              control={
                <Switch
                  checked={settings.notifications}
                  onChange={handleToggle}
                  name="notifications"
                  color="primary"
                />
              }
              label="Email Notifications"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={settings.privateAccount}
                  onChange={handleToggle}
                  name="privateAccount"
                  color="primary"
                />
              }
              label="Private Account"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={settings.twoFactorAuth}
                  onChange={handleToggle}
                  name="twoFactorAuth"
                  color="primary"
                />
              }
              label="Two-Factor Authentication"
            />
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














// import React from 'react'

// function ManageSetting() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ManageSetting


// import React, { useState } from 'react';
// import { Container, Typography, Paper, TextField, FormControl, InputLabel, Select, MenuItem, Button, FormControlLabel, Switch } from '@mui/material';
// import './ManageSettings.css';

// const ManageSettings = () => {
//   const [settings, setSettings] = useState({
//     username: '',
//     email: '',
//     theme: 'light',
//     notifications: true,
//   });

//   const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     setSettings({
//       ...settings,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Settings updated:', settings);
//     alert('Settings updated successfully!');
//   };

//   return (
//     <Container className="container">
//       <Typography variant="h4" gutterBottom>
//         Manage Settings
//       </Typography>
//       <Paper className="paper">
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Username"
//             name="username"
//             value={settings.username}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Email"
//             name="email"
//             type="email"
//             value={settings.email}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//           />
//           <FormControl fullWidth margin="normal">
//             <InputLabel>Theme</InputLabel>
//             <Select
//               name="theme"
//               value={settings.theme}
//               onChange={handleChange}
//             >
//               <MenuItem value="light">Light</MenuItem>
//               <MenuItem value="dark">Dark</MenuItem>
//             </Select>
//           </FormControl>
//           <FormControlLabel
//             control={
//               <Switch
//                 name="notifications"
//                 checked={settings.notifications}
//                 onChange={handleChange}
//               />
//             }
//             label="Enable Notifications"
//           />
//           <Button type="submit" variant="contained" color="primary" className="submit-button">
//             Save Changes
//           </Button>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default ManageSettings;



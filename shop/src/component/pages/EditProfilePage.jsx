import React, { useState } from 'react';
import { Container, TextField, Button, MenuItem, Typography, Grid, Box } from '@mui/material';

const EditProfilePage = () => {
  const [profile, setProfile] = useState({ name: '', email: '', bio: '', gender: '' });
  const [passwordData, setPasswordData] = useState({ oldPassword: '', newPassword: '' });
  const [errors, setErrors] = useState({});

  const handleChangeProfile = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleChangePassword = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const validateProfile = () => {
    let tempErrors = {};
    if (!profile.name) tempErrors.name = 'Name is required.';
    if (!profile.email) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(profile.email)) {
      tempErrors.email = 'Email is not valid.';
    }
    if (!profile.gender) tempErrors.gender = 'Gender is required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const validatePassword = () => {
    let tempErrors = {};
    if (!passwordData.oldPassword) {
      tempErrors.oldPassword = 'Old password is required.';
    }
    if (!passwordData.newPassword) {
      tempErrors.newPassword = 'New password is required.';
    } else if (passwordData.newPassword.length < 6) {
      tempErrors.newPassword = 'New password must be at least 6 characters long.';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    if (validateProfile()) {
      console.log('Profile updated:', profile);
      alert('Profile updated successfully!');
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      console.log('Password changed:', passwordData);
      alert('Password changed successfully!');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Edit Profile
      </Typography>
      <form onSubmit={handleProfileSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={profile.name}
              onChange={handleChangeProfile}
              error={!!errors.name}
              helperText={errors.name}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={profile.email}
              onChange={handleChangeProfile}
              error={!!errors.email}
              helperText={errors.email}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="bio"
              name="bio"
              label="Bio"
              value={profile.bio}
              onChange={handleChangeProfile}
              error={!!errors.bio}
              helperText={errors.bio}
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              select
              id="gender"
              name="gender"
              label="Gender"
              value={profile.gender}
              onChange={handleChangeProfile}
              error={!!errors.gender}
              helperText={errors.gender}
              variant="outlined"
            >
              <MenuItem value="">Select Gender</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mb: 2 }}
            >
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </form>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Change Password
        </Typography>
        <form onSubmit={handlePasswordSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                id="oldPassword"
                name="oldPassword"
                label="Old Password"
                value={passwordData.oldPassword}
                onChange={handleChangePassword}
                error={!!errors.oldPassword}
                helperText={errors.oldPassword}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                id="newPassword"
                name="newPassword"
                label="New Password"
                value={passwordData.newPassword}
                onChange={handleChangePassword}
                error={!!errors.newPassword}
                helperText={errors.newPassword}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
              >
                Change Password
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default EditProfilePage;















// import React, { useState } from 'react';
// import { Container, TextField, Button, MenuItem, Typography, Grid, Box } from '@mui/material';

// const EditProfilePage = () => {
//   const [profile, setProfile] = useState({ name: '', email: '', bio: '', gender: '', password: '' });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const validate = () => {
//     let tempErrors = {};
//     if (!profile.name) tempErrors.name = 'Name is required.';
//     if (!profile.email) {
//       tempErrors.email = 'Email is required.';
//     } else if (!/\S+@\S+\.\S+/.test(profile.email)) {
//       tempErrors.email = 'Email is not valid.';
//     }
//     if (!profile.gender) tempErrors.gender = 'Gender is required.';
//     if (!profile.password) {
//       tempErrors.password = 'Password is required.';
//     } else if (profile.password.length < 6) {
//       tempErrors.password = 'Password must be at least 6 characters long.';
//     }
//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log('Profile updated:', profile);
//       alert('Profile updated successfully!');
//     }
//   };

//   const handleChangePassword = () => {
//     alert('Redirecting to change password...');
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 4 }}>
//       <Typography variant="h4" component="h1" gutterBottom>
//         Edit Profile
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               id="name"
//               name="name"
//               label="Name"
//               value={profile.name}
//               onChange={handleChange}
//               error={!!errors.name}
//               helperText={errors.name}
//               variant="outlined"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               id="email"
//               name="email"
//               label="Email"
//               value={profile.email}
//               onChange={handleChange}
//               error={!!errors.email}
//               helperText={errors.email}
//               variant="outlined"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               id="bio"
//               name="bio"
//               label="Bio"
//               value={profile.bio}
//               onChange={handleChange}
//               error={!!errors.bio}
//               helperText={errors.bio}
//               variant="outlined"
//               multiline
//               rows={4}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               select
//               id="gender"
//               name="gender"
//               label="Gender"
//               value={profile.gender}
//               onChange={handleChange}
//               error={!!errors.gender}
//               helperText={errors.gender}
//               variant="outlined"
//             >
//               <MenuItem value="">Select Gender</MenuItem>
//               <MenuItem value="male">Male</MenuItem>
//               <MenuItem value="female">Female</MenuItem>
//               <MenuItem value="other">Other</MenuItem>
//             </TextField>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               type="password"
//               id="password"
//               name="password"
//               label="Password"
//               value={profile.password}
//               onChange={handleChange}
//               error={!!errors.password}
//               helperText={errors.password}
//               variant="outlined"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               fullWidth
//               sx={{ mb: 2 }}
//             >
//               Save Changes
//             </Button>
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               type="button"
//               variant="outlined"
//               color="secondary"
//               fullWidth
//               onClick={handleChangePassword}
//             >
//               Change Password
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };

// export default EditProfilePage;










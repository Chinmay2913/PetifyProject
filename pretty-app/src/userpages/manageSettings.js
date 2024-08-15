import React, { useState } from 'react';
import { Container, TextField, Button, MenuItem, Typography, Grid, Box } from '@mui/material';

const EditProfilePage = () => {
  const [profile, setProfile] = useState({ name: '', email: '', bio: '', gender: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!profile.name) tempErrors.name = 'Name is required.';
    if (!profile.email) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(profile.email)) {
      tempErrors.email = 'Email is not valid.';
    }
    if (!profile.gender) tempErrors.gender = 'Gender is required.';
    if (!profile.password) {
      tempErrors.password = 'Password is required.';
    } else if (profile.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters long.';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Profile updated:', profile);
      alert('Profile updated successfully!');
    }
  };

  const handleChangePassword = () => {
    alert('Redirecting to change password...');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Edit Profile
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={profile.name}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
            <TextField
              fullWidth
              type="password"
              id="password"
              name="password"
              label="Password"
              value={profile.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              variant="outlined"
            />
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
          <Grid item xs={12}>
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={handleChangePassword}
            >
              Change Password
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default EditProfilePage;









// import React, { useState } from 'react';
// import './EditProfilePage.css';

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

//   return (
//     <div className="edit-profile-page">
//       <h1>Edit Profile</h1>
//       <form onSubmit={handleSubmit} className="edit-profile-form">
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={profile.name}
//             onChange={handleChange}
//             className={errors.name ? 'error' : ''}
//           />
//           {errors.name && <span className="error-text">{errors.name}</span>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={profile.email}
//             onChange={handleChange}
//             className={errors.email ? 'error' : ''}
//           />
//           {errors.email && <span className="error-text">{errors.email}</span>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="bio">Bio:</label>
//           <textarea
//             id="bio"
//             name="bio"
//             value={profile.bio}
//             onChange={handleChange}
//             className={errors.bio ? 'error' : ''}
//           />
//           {errors.bio && <span className="error-text">{errors.bio}</span>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="gender">Gender:</label>
//           <select
//             id="gender"
//             name="gender"
//             value={profile.gender}
//             onChange={handleChange}
//             className={errors.gender ? 'error' : ''}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//           {errors.gender && <span className="error-text">{errors.gender}</span>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={profile.password}
//             onChange={handleChange}
//             className={errors.password ? 'error' : ''}
//           />
//           {errors.password && <span className="error-text">{errors.password}</span>}
//         </div>
//         <button type="submit" className="submit-button">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default EditProfilePage;




// import React, { useState } from 'react';
// import './EditProfilePage.css';

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
//     // You can implement the password change logic here.
//     // For example, open a dialog or redirect to a change password page.
//     alert('Redirecting to change password...');
//   };

//   return (
//     <div className="edit-profile-page">
//       <h1>Edit Profile</h1>
//       <form onSubmit={handleSubmit} className="edit-profile-form">
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={profile.name}
//             onChange={handleChange}
//             className={errors.name ? 'error' : ''}
//           />
//           {errors.name && <span className="error-text">{errors.name}</span>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={profile.email}
//             onChange={handleChange}
//             className={errors.email ? 'error' : ''}
//           />
//           {errors.email && <span className="error-text">{errors.email}</span>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="bio">Bio:</label>
//           <textarea
//             id="bio"
//             name="bio"
//             value={profile.bio}
//             onChange={handleChange}
//             className={errors.bio ? 'error' : ''}
//           />
//           {errors.bio && <span className="error-text">{errors.bio}</span>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="gender">Gender:</label>
//           <select
//             id="gender"
//             name="gender"
//             value={profile.gender}
//             onChange={handleChange}
//             className={errors.gender ? 'error' : ''}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//           {errors.gender && <span className="error-text">{errors.gender}</span>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={profile.password}
//             onChange={handleChange}
//             className={errors.password ? 'error' : ''}
//           />
//           {errors.password && <span className="error-text">{errors.password}</span>}
//         </div>
//         <button type="submit" className="submit-button">Save Changes</button>
//         <button type="button" className="change-password-button" onClick={handleChangePassword}>
//           Change Password
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditProfilePage;







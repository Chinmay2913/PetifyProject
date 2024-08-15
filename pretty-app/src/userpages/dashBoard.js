import React from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main' }}>
        User Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', boxShadow: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'medium' }}>
              Profile Overview
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              View and edit your profile information.
            </Typography>
            <Link to="edit-profile" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Edit Profile
              </Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', boxShadow: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'medium' }}>
              Recent Activity
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Check your recent activity and updates.
            </Typography>
            <Link to="view-activity" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                View Activity
              </Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', boxShadow: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'medium' }}>
              Settings
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Adjust your account settings and preferences.
            </Typography>
            <Link to="manage-settings" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Manage Settings
              </Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', boxShadow: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'medium' }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Adjust your account settings and preferences.
            </Typography>
            <Link to="contact" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Contact Us
              </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;















// import './Dashboard.css';
// import React from 'react';
// import { Container, Grid, Paper, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//   return (
//     <Container>
//       <Typography variant="h4" sx={{ mb: 4 }}>
//         User Dashboard
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6} md={4}>
//           <Paper sx={{ p: 2, textAlign: 'center', color: 'text.secondary' }}>
//             <Typography variant="h6">Profile Overview</Typography>
//             <Typography>View and edit your profile information.</Typography>
//             <Link to="edit-profile">
//               <Button variant="contained" color="primary" sx={{ mt: 2 }}>
//                 Edit Profile
//               </Button>
//             </Link>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Paper sx={{ p: 2, textAlign: 'center', color: 'text.secondary' }}>
//             <Typography variant="h6">Recent Activity</Typography>
//             <Typography>Check your recent activity and updates.</Typography>
//             <Link to="view-activity">
//               <Button variant="contained" color="primary" sx={{ mt: 2 }}>
//                 View Activity
//               </Button>
//             </Link>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Paper sx={{ p: 2, textAlign: 'center', color: 'text.secondary' }}>
//             <Typography variant="h6">Settings</Typography>
//             <Typography>Adjust your account settings and preferences.</Typography>
//             <Link to="manage-settings">
//               <Button variant="contained" color="primary" sx={{ mt: 2 }}>
//                 Manage Settings
//               </Button>
//             </Link>
//           </Paper>
//         </Grid>
//       </Grid>
      
//     </Container>
//   );
// };

// export default Dashboard;



// import React from 'react';
// import { Container, Grid, Paper, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import './Dashboard.css';  // Import the CSS file

// const Dashboard = () => {
//   return (
//     <Container className="dashboard-container">
//       <Typography variant="h4" className="dashboard-header" color red>
//         User Dashboard
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6} md={4}>
//           <Paper className="dashboard-paper">
//             <Typography variant="h6">Profile Overview</Typography>
//             <Typography>View and edit your profile information.</Typography>
//             <Link to="edit-profile">
//               <Button className="dashboard-button" variant="contained" color="primary">
//                 Edit Profile
//               </Button>
//             </Link>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Paper className="dashboard-paper">
//             <Typography variant="h6">Recent Activity</Typography>
//             <Typography>Check your recent activity and updates.</Typography>
//             <Link to="view-activity">
//               <Button className="dashboard-button" variant="contained" color="primary">
//                 View Activity
//               </Button>
//             </Link>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Paper className="dashboard-paper">
//             <Typography variant="h6">Settings</Typography>
//             <Typography>Adjust your account settings and preferences.</Typography>
//             <Link to="manage-settings">
//               <Button className="dashboard-button" variant="contained" color="primary">
//                 Manage Settings
//               </Button>
//             </Link>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Dashboard;




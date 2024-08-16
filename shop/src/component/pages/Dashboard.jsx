import React from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const dashboardData = [
  {
    title: 'Profile Overview',
    description: 'View and edit your profile information.',
    buttonText: 'Edit Profile',
    link: 'edit-profile',
  },
  {
    title: 'Recent Activity',
    description: 'Check your recent activity and updates.',
    buttonText: 'View Activity',
    link: 'view-activity',
  },
  {
    title: 'Settings',
    description: 'Adjust your account settings and preferences.',
    buttonText: 'Manage Settings',
    link: 'manage-settings',
  },
  {
    title: 'Contact Us',
    description: 'Reach out to our support team for any inquiries.',
    buttonText: 'Contact Us',
    link: 'contact',
  },
];

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main' }}>
        User Dashboard
      </Typography>
      <Grid container spacing={3}>
        {dashboardData.map((item, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Paper
              sx={{
                p: 3,
                textAlign: 'center',
                bgcolor: 'background.paper',
                boxShadow: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'medium' }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {item.description}
              </Typography>
              <Link to={item.link} style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  {item.buttonText}
                </Button>
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;














// import React from 'react';
// import { Container, Grid, Paper, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//   return (
//     <Container maxWidth="lg" sx={{ mt: 4 }}>
//       <Typography variant="h4" component="h1" sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main' }}>
//         User Dashboard
//       </Typography>
//       <Grid container spacing={3}>
//         {/* First Pair of Boxes */}
//         <Grid item xs={12} sm={6} md={6}>
//           <Paper
//             sx={{
//               p: 3,
//               textAlign: 'center',
//               bgcolor: 'background.paper',
//               boxShadow: 3,
//               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//               '&:hover': {
//                 transform: 'scale(1.05)',
//                 boxShadow: 6,
//               },
//             }}
//           >
//             <Typography variant="h6" sx={{ mb: 2, fontWeight: 'medium' }}>
//               Profile Overview
//             </Typography>
//             <Typography variant="body2" sx={{ mb: 2 }}>
//               View and edit your profile information.
//             </Typography>
//             <Link to="edit-profile" style={{ textDecoration: 'none' }}>
//               <Button variant="contained" color="primary" sx={{ mt: 2 }}>
//                 Edit Profile
//               </Button>
//             </Link>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} sm={6} md={6}>
//           <Paper
//             sx={{
//               p: 3,
//               textAlign: 'center',
//               bgcolor: 'background.paper',
//               boxShadow: 3,
//               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//               '&:hover': {
//                 transform: 'scale(1.05)',
//                 boxShadow: 6,
//               },
//             }}
//           >
//             <Typography variant="h6" sx={{ mb: 2, fontWeight: 'medium' }}>
//               Recent Activity
//             </Typography>
//             <Typography variant="body2" sx={{ mb: 2 }}>
//               Check your recent activity and updates.
//             </Typography>
//             <Link to="view-activity" style={{ textDecoration: 'none' }}>
//               <Button variant="contained" color="primary" sx={{ mt: 2 }}>
//                 View Activity
//               </Button>
//             </Link>
//           </Paper>
//         </Grid>

//         {/* Second Pair of Boxes */}
//         <Grid item xs={12} sm={6} md={6}>
//           <Paper
//             sx={{
//               p: 3,
//               textAlign: 'center',
//               bgcolor: 'background.paper',
//               boxShadow: 3,
//               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//               '&:hover': {
//                 transform: 'scale(1.05)',
//                 boxShadow: 6,
//               },
//             }}
//           >
//             <Typography variant="h6" sx={{ mb: 2, fontWeight: 'medium' }}>
//               Settings
//             </Typography>
//             <Typography variant="body2" sx={{ mb: 2 }}>
//               Adjust your account settings and preferences.
//             </Typography>
//             <Link to="manage-settings" style={{ textDecoration: 'none' }}>
//               <Button variant="contained" color="primary" sx={{ mt: 2 }}>
//                 Manage Settings
//               </Button>
//             </Link>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} sm={6} md={6}>
//           <Paper
//             sx={{
//               p: 3,
//               textAlign: 'center',
//               bgcolor: 'background.paper',
//               boxShadow: 3,
//               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//               '&:hover': {
//                 transform: 'scale(1.05)',
//                 boxShadow: 6,
//               },
//             }}
//           >
//             <Typography variant="h6" sx={{ mb: 2, fontWeight: 'medium' }}>
//               Contact Us
//             </Typography>
//             <Typography variant="body2" sx={{ mb: 2 }}>
//               Reach out to our support team for any inquiries.
//             </Typography>
//             <Link to="contact" style={{ textDecoration: 'none' }}>
//               <Button variant="contained" color="primary" sx={{ mt: 2 }}>
//                 Contact Us
//               </Button>
//             </Link>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Dashboard;





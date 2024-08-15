import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';

const activities = [
  { id: 1, text: 'Logged in from new device' },
  { id: 2, text: 'Updated profile picture' },
  { id: 3, text: 'Changed email address' },
  { id: 4, text: 'Added a new post' },
  { id: 5, text: 'Commented on a post' },
];

const ViewActivity = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Recent Activity
      </Typography>
      <Paper sx={{ padding: 2, backgroundColor: 'background.paper' }}>
        <List>
          {activities.map((activity) => (
            <React.Fragment key={activity.id}>
              <ListItem sx={{ paddingLeft: 2, paddingRight: 2, '&:hover': { backgroundColor: 'action.hover' } }}>
                <ListItemText primary={activity.text} sx={{ color: 'text.primary' }} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default ViewActivity;

import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import user from '../Ssg/page';

async function page() {
  const data = user(); // Call the imported user function
  const values = await data; // Wait for the resolved data
  console.log(values); // Log the resolved data

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Users
      </Typography>
      {values && values.length > 0 ? (
        <Grid container spacing={4}>
          {values.map((user) => (
            <Grid item key={user.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  image={user.thumbnail || 'https://via.placeholder.com/150'}
                  alt={user.name}
                  height="200"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {user.name || 'Unknown User'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.description || 'No description available'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" component="p" align="center">
          No users available.
        </Typography>
      )}
    </Container>
  );
}

export default page;

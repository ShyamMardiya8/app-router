"use client";

import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
function HomePage() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Welcome to the Home Page
      </Typography>

      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        This is an example of a modern Material-UI design for a Home page.
      </Typography>

      <Grid container spacing={4}>
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Feature One
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover the amazing features of our platform with this first card.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Feature Two
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore the second feature and understand its value for you.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Feature Three
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Dive deeper into our offerings with this amazing feature.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;

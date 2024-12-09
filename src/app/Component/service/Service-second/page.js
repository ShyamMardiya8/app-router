"use client";

import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
function ServiceSecond() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Service Two
      </Typography>

      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Explore the details of our second service, designed to meet your needs.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Service Highlights
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn more about the key features and benefits of this service. It's tailored to ensure customer satisfaction and superior performance.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
                Learn More
              </Button>
              <Button size="small" color="secondary">
                Contact Us
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Why Choose Us?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We focus on delivering exceptional quality and reliability, ensuring your satisfaction at every step.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="success">
                Get Started
              </Button>
              <Button size="small" color="secondary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ServiceSecond;

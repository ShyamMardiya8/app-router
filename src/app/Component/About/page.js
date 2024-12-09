"use client";

import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
function AboutPage() {
  return (
    <Box sx={{ padding: 4 }}>
      {/* Page Title */}
      <Typography variant="h3" gutterBottom align="center">
        About Us
      </Typography>

      {/* Description */}
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        We are a company committed to providing exceptional services and solutions that cater to your needs.
        Learn more about us below.
      </Typography>

      {/* About Information Card */}
      <Card sx={{ maxWidth: 600, margin: "0 auto" }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Our mission is to deliver top-notch services with integrity, innovation, and customer satisfaction at the forefront.
          </Typography>
        </CardContent>

        {/* Action Button */}
        <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
          <Button variant="contained" color="primary" size="large">
            Contact Us
          </Button>
        </Box>
      </Card>

      {/* Company Info */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Why Choose Us?
        </Typography>
        <Typography variant="body1">
          With years of experience and a team of dedicated professionals, we guarantee quality and reliable services.
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutPage;

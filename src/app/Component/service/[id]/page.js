"use client";

import React from "react";
import { useRouter } from "next/router";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
function ServiceFirst({params}) {
  const unWrapp = React.use(params)
  const {id} = unWrapp
  if (!id) {
    // Show a loading state until `id` is available
    return <Typography align="center">Loading...</Typography>;
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Service Details
      </Typography>

      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        You are viewing details for service ID: <strong>{id}</strong>.
      </Typography>

      <Card sx={{ maxWidth: 600, margin: "0 auto" }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Service {id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a detailed description of the service with ID {id}. Learn more about the features and benefits of this service below.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => alert(`More details about Service ${id}`)}>
            Learn More
          </Button>
          <Button size="small" color="secondary" onClick={() => router.push("/services")}>
            Back to Services
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default ServiceFirst;

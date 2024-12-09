"use client";

import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  return (
    <Box sx={{ padding: 4, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Service Page
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Choose one of our amazing services to explore further.
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button
          variant="outlined"
          color="success"
          size="large"
          onClick={() => router.push("service/service-one")}
        >
          Go to Service One
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          onClick={() => router.push("service/Service-second")}
        >
          Go to Service Two
        </Button>
      </Box>
    </Box>
  );
}

export default Page;

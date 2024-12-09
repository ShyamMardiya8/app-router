"use client";

import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Page() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
        <Box>
        <Button color="inherit" component={Link} href="/Component/Home">
            Home
          </Button>
          <Button color="inherit" component={Link} href="/Component/About">
            About
          </Button>
          <Button color="inherit" component={Link} href="/Component/service">
            Service
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Page;

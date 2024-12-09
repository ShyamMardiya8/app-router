import axios from 'axios';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Function to fetch data from the API
async function fetchApi() {
  const res = await axios.get('https://fakestoreapi.com/products');
  return res.data;
}

// Server-side fetching function
export async function fet() {
  const data = await fetchApi();  // Fetch the data
  return {
    props: { data },  // Pass the fetched data as a prop
  };
}

function Page({ data }) {
  if (!data) {
    return <div>Loading...</div>;  // If data is undefined, display loading message
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Product List
      </Typography>
      
      <Grid container spacing={4}>
        {data.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description.substring(0, 100)}...
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                  ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Page;

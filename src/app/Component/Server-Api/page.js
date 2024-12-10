import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// Fetch Data Function
async function fetchData() {
  let data = fetch("https://dummyjson.com/products")
  data = await (await data).json()
  return data.products
}

// Page Component
async function page() {
  let product = await fetchData();
  console.log(product);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={3}>
        {product.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h2">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="body1" color="primary">
                  ${item.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default page;

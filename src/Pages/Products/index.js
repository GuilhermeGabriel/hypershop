import Header from '../../components/Header';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

import Grid from '@mui/material/Grid';

function Products() {
  return (
    <div>
      <Header />
 
      <Grid
        container
        padding={2}
        spacing={2}
        // paddingBottom={6}
      >
        
        <Grid item xs={12} sm={6} lg={3}>
          <Card></Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Card></Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Card></Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Card></Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Card></Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Card></Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Card></Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Card></Card>
        </Grid>
      </Grid>      

      <Footer></Footer>
    </div>
  );
}

export default Products;

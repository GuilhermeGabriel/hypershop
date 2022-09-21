import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Header />
      <Banner />

      <h3
        style={
          {
            marginTop: 48,
            marginBottom: 48,
            fontSize: 18,
            fontWeight: 'bold',
            fontFamily: 'Helvetica',
            textAlign: 'center',
          }
        }>
        NOSSA COLEÇÃO
      </h3>

      <Grid
        container
        paddingLeft={{
          xs: 2,
          md: 8
        }}
        paddingRight={{
          xs: 2,
          md: 8
        }}
        spacing={2}
        paddingBottom={6}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Link style={{ textDecoration: 'none' }} to='/produto'>
            <Card></Card>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card></Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card></Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card></Card>
        </Grid>
      </Grid>

      <Footer></Footer>
    </div>
  );
}

export default Home;

// UI
import Grid from '@mui/material/Grid';
import Banner from '../../components/Banner';
import Card from '../../components/Card';

// Firebase, Routes.
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
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
          <Link style={{ textDecoration: 'none' }} to='/produto/CwgRbFvMNqiXmZew9ia2'>
            <Card id='CwgRbFvMNqiXmZew9ia2'></Card>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Link style={{ textDecoration: 'none' }} to='/produto/jXLXuXsluctRAZS3jBRJ'>
            <Card id='jXLXuXsluctRAZS3jBRJ'></Card>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Link style={{ textDecoration: 'none' }} to='/produto/qsO7hQ7ZmWXpsr3X1WBP'>
            <Card id='qsO7hQ7ZmWXpsr3X1WBP'></Card>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Link style={{ textDecoration: 'none' }} to='/produto/wQlZxPu32jfHgfb56dyX'>
            <Card id='wQlZxPu32jfHgfb56dyX'></Card>
          </Link>
        </Grid>

      </Grid>

    </div>
  );
}

export default Home;

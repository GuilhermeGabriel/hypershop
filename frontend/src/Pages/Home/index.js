// UI
import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Banner from '../../components/Banner';
import Card from '../../components/Card';

// Queries and Routes
import { Link } from 'react-router-dom';
import { useQuery, gql } from "@apollo/client";

const QUERY = gql`{
  products {
    id
    description
    title
    imgUrl
    category
    price
    quantity
  } 
}`;

function Home() {
  const { data, loading, error } = useQuery(QUERY);

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

        {
          data && data.products.slice(0, 4).map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Link style={{ textDecoration: 'none' }} to={`/produto/${product.id}`}>
                <Card
                  id={product.id}
                />
              </Link>
            </Grid>
          ))
        }
        
      </Grid>

    </div>
  );
}

export default Home;

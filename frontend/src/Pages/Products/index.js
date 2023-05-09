// UI
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';

// Query, Routes.
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

function Products() {
  const { data, loading, error } = useQuery(QUERY);
  console.log(data);
  return (
    <div>
      <Grid
        container
        padding={2}
        spacing={2}
      >

        {
          data && data.products.map(item =>
            <Grid key={item?.id} item xs={12} sm={6} lg={3}>
              <Link key={item?.id} style={{ textDecoration: 'none' }} to={`/produto/${item?.id}`}>
                <Card id={item?.id}></Card>
              </Link>
            </Grid>
          )
        }
      </Grid>
    </div>
  );
}

export default Products;

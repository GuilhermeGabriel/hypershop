// UI
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

// Query, Routes
import { useQuery, gql } from "@apollo/client";

export default function MultiActionAreaCard({ id }) {
  const QUERY = gql`
  query($id: String!){
    product(id: $id) {
      id
      description
      title
      imgUrl
      category
      price
      quantity
    } 
  }`;

  const { data, loading, error } = useQuery(QUERY, { variables: { id } });

  return (
    <>
      <Card variant='outlined'>

        <CardActionArea>
          <CardMedia
            sx={{ objectFit: "contain", marginTop: 6, marginBottom: 6 }}
            component="img"
            height="150vh"
            image={data?.product.imgUrl}
          />

          <Divider variant="middle" />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {data?.product.title}
            </Typography>

            <Typography sx={{ fontWeight: '700' }} color="text.primary">
              R$ {data?.product.price},00
            </Typography>

            <Typography sx={{ fontSize: 12, color: '#737373' }} variant="h6" color="text.primary">
              {data?.product.category}
            </Typography>
          </CardContent>

        </CardActionArea>
      </Card>
    </>
  );
}

// UI
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Skeleton } from '@mui/material';
import Divider from '@mui/material/Divider';

// Firebase, Routes
import { doc, getFirestore, onSnapshot } from "firebase/firestore";

export default function MultiActionAreaCard({ id }) {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    const db = getFirestore();
    async function getProdutos() {
      onSnapshot(doc(db, "produtos", id), (doc) => {
        setData(doc.data());
      });
    }

    getProdutos();
  }, []);

  return (
    <>
      {
        (Object.keys(data).length === 0) ?
          <>
            <Skeleton animation='wave' variant="rect" height={240} />
            <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} />
          </>
          :
          <Card variant='outlined'>

            <CardActionArea>
              <CardMedia
                sx={{ objectFit: "contain", marginTop: 6, marginBottom: 6 }}
                component="img"
                height="140"
                image={data.image}
              />

              <Divider variant="middle" />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {data.name}
                </Typography>

                <Typography sx={{ fontWeight: '700' }} color="text.primary">
                  R$ {data.preco},00
                </Typography>

                <Typography sx={{ fontSize: 12, color: '#737373' }} variant="h6" color="text.primary">
                  {data.categoria}
                </Typography>
              </CardContent>

            </CardActionArea>
          </Card>
      }

    </>
  );
}

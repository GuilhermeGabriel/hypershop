// UI
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

// Firebase, Routes
import { doc, getFirestore, onSnapshot } from "firebase/firestore";

export default function MultiActionAreaCard({ id }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const db = getFirestore();
    function getProdutos() {
      onSnapshot(doc(db, "produtos", id), (doc) => {
        setData(doc.data());
      });
    }

    getProdutos();
  });

  return (
    <>
      <Card variant='outlined'>

        <CardActionArea>
          <CardMedia
            sx={{ objectFit: "contain", marginTop: 6, marginBottom: 6 }}
            component="img"
            height="150vh"
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
    </>
  );
}

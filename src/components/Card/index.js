import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';

export default function MultiActionAreaCard() {
  return (
    <Card
      // style={{ border: "none", boxShadow: "none", margin: 8 }}
      variant='outlined'>
      
      <CardActionArea>
        <CardMedia
          sx={{ objectFit: "contain", marginTop: 6, marginBottom: 6 }}
          component="img"
          height="140"
          image={require('../../assets/tenis.png')}
          alt="green iguana"
        />
         <Divider variant="middle"/>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Alphaboost shoes
          </Typography>
          
          <Typography sx={{ fontWeight: '700' }} color="text.primary">
            R$ 109.50
          </Typography>

          <Typography sx={{ fontSize: 12, color: '#737373' }} variant="h6" color="text.primary">
            Tenis de corrida
          </Typography>
        </CardContent>
      
      </CardActionArea>
    </Card>
  );
}

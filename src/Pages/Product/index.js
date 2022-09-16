import * as React from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

import Grid from '@mui/material/Grid';
import tenis from '../../assets/tenis.png';

import Typography from '@mui/material/Typography';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Home() {
  const [tamanho, setTamanho] = React.useState('');
  const [cor, setCor] = React.useState('');

  const handleChangeTamanho = (event, newTamanho) => {
    setTamanho(newTamanho);
  };

  const handleChangeCor = (event, newCor) => {
    setCor(newCor);
  };

  return (
    <div>
      <Header />

      <Grid
        container
        paddingLeft={4}
        paddingRight={4}
        marginTop={0}
        spacing={4}
        paddingBottom={6}
      >
        <Grid item xs={12} sm={6}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img style={{ flex: 1, paddingRight: 16,backgroundColor: '#f6f6f6', objectFit: 'cover' }} src={tenis}></img>
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h4" fontWeight={'bold'} component="div">
            Tenis nike
          </Typography>
          <Typography variant="h6" fontWeight={'bold'} component="div">
            823,00 R$
          </Typography>
          <Typography variant="h6" fontWeight={'500'} color='#7a7a7a' fontSize={14} component="div">
            Code: NJC90842-Blue-X
          </Typography>

          <br></br>
          <Typography variant="h6" fontWeight={'400'} color='#7a7a7a' fontSize={12} component="div">
            TAMANHO
          </Typography>

          <ToggleButtonGroup
            color="blue"
            value={tamanho}
            exclusive
            onChange={handleChangeTamanho}
            aria-label="Platform"
          >
            <ToggleButton size='small' value="pequeno">Pequeno</ToggleButton>
            <ToggleButton size='small' value="medio">Médio</ToggleButton>
            <ToggleButton size='small' value="grande">Grande</ToggleButton>
          </ToggleButtonGroup>


          <br></br>
          <br></br>
          <Typography variant="h6" fontWeight={'400'} color='#7a7a7a' fontSize={12} component="div">
            COR
          </Typography>

          <ToggleButtonGroup
            color="blue"
            value={cor}
            exclusive
            onChange={handleChangeCor}
            aria-label="Platform"
          >
            <ToggleButton size='small' value="branco">Branco</ToggleButton>
            <ToggleButton size='small' value="preto">Preto</ToggleButton>
            <ToggleButton size='small' value="azul">Azul</ToggleButton>
          </ToggleButtonGroup>

          <br></br>
          <br></br>
          <TextField sx={{width: 64}} size='small' placeholder='0' color='secondary' variant="outlined"></TextField>
          <br></br>
          <br></br>
          <Button fullWidth variant='outlined' color='terciary'>ADICIONAR AO CARRINHO</Button>
          <br></br>
          <br></br>
          <Typography variant="h6" fontWeight={'400'} color='#000' fontSize={15} component="div">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.
          Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.
          </Typography>
        </Grid>
      </Grid>

      <Footer></Footer>
    </div>
  );
}

export default Home;

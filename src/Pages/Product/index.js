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

import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { useParams } from 'react-router-dom';

function Product() {
  const [openToast, setOpenToast] = React.useState(false);
  const [tamanho, setTamanho] = React.useState('');
  const [cor, setCor] = React.useState('');

  const { id } = useParams();

  const [data, setData] = React.useState({});

  React.useEffect(() => {
    const db = getFirestore();
    async function getProdutos() {
      onSnapshot(doc(db, "produtos", id), (doc) => {
        setData(doc.data());
        // console.log(doc.data());
      });
    }

    getProdutos();
  }, [id]);

  const handleCloseToast = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenToast(false);
  };

  const handleChangeTamanho = (event, newTamanho) => {
    setTamanho(newTamanho);
  };

  const handleChangeCor = (event, newCor) => {
    setCor(newCor);
  };

  return (
    <div>
      <Header />

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={openToast}
        autoHideDuration={1000}
        onClose={handleCloseToast}
      >
        <Alert onClose={handleCloseToast} severity='info' sx={{ width: '100%' }}>
          {data.name} adicionado ao carrinho!
        </Alert>
      </Snackbar>

      <Grid
        container
        paddingLeft={{
          xs: 4,
          md: 14
        }}
        paddingRight={{
          xs: 4,
          md: 14
        }}
        marginTop={0}
        spacing={4}
        paddingBottom={6}
      >
        <Grid item xs={12} sm={6}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img style={{ width: 200, flex: 1, paddingRight: 16, objectFit: 'cover' }} src={data.image}></img>
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h4" fontWeight={'bold'} component="div">
            {data.name}
          </Typography>
          <Typography variant="h6" fontWeight={'bold'} component="div">
            {data.preco},00 R$
          </Typography>
          <Typography variant="h6" fontWeight={'500'} color='#7a7a7a' fontSize={14} component="div">
            Code: {id}
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
          <Typography variant="h5" fontWeight={'400'} color='#7a7a7a' fontSize={12} component="div">
            QUANTIDADE DISPONÍVEL: {data.quantidade}
          </Typography>

          <TextField sx={{width: 64}} size='small' placeholder='1' color='secondary' variant="outlined"></TextField>
          <br></br>
          <br></br>
          <Button fullWidth 
            onClick={()=>setOpenToast(true)}
          variant='outlined' color='terciary'>ADICIONAR AO CARRINHO</Button>
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

export default Product;

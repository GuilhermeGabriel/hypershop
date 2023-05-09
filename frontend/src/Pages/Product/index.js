// UI
import { Alert } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import * as React from 'react';

// Query, Routes
import { useParams } from 'react-router-dom';
import { useData } from '../../Providers/UserDataProvider';
import { useQuery, gql } from "@apollo/client";

function Product() {
  const [openToast, setOpenToast] = React.useState(false);
  const [tamanho, setTamanho] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [quantidade, setQuantidade] = React.useState(1);
  const [alertType, setAlertType] = React.useState('error');
  const [alertInfo, setAlertInfo] = React.useState('');

  const { id } = useParams();
  const { data, setData } = useData();

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

  const { data: apiData, loading, error } = useQuery(QUERY, { variables: { id } });


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

  React.useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  const showToastInfo = () => {
    if (apiData?.product.quantity < quantidade) {
      setAlertType('error');
      setAlertInfo('Não há itens suficientes!');
    } else {
      let newQuantidade = (data.produtos[id]) ? (data.produtos[id] + quantidade) : quantidade;

      setData({
        ...data,
        produtos: { ...data.produtos, [id]: newQuantidade },
      });

      setAlertType('success');
      setAlertInfo(quantidade + ' ' + apiData?.product.title + ' adicionado ao carrinho!');
    }
    setOpenToast(true)
  };

  return (
    <div>

      <Snackbar
        sx={{ marginRight: 8 }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={openToast}
        autoHideDuration={5000}
        onClose={handleCloseToast}
      >
        <Alert onClose={handleCloseToast} severity={alertType} sx={{ width: '100%' }}>
          {alertInfo}
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
            <img alt='imagem do produto' style={{ maxWidth: '30vw', flex: 1, paddingRight: 16, objectFit: 'cover' }} src={apiData?.product.imgUrl}></img>
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h4" fontWeight={'bold'} component="div">
            {apiData?.product.title}
          </Typography>
          <Typography variant="h6" fontWeight={'bold'} component="div">
            R$ {apiData?.product.price},00
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
            QUANTIDADE DISPONÍVEL: {apiData?.product.quantity}
          </Typography>

          <TextField
            onChange={(e) => {
              var value = parseInt(e.target.value, 10);
              setQuantidade(value);
            }}
            type="number"
            InputProps={{ inputProps: { min: 1, max: 100 } }}
            sx={{ width: 64 }} size='small' placeholder='1' variant="outlined"></TextField>
          <br></br>
          <br></br>
          <Button fullWidth
            onClick={() => showToastInfo()}
            variant='outlined' color='terciary'>ADICIONAR AO CARRINHO</Button>
          <br></br>
          <br></br>
          <Typography variant="h6" fontWeight={'400'} color='#000' fontSize={15} component="div">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend.
            Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.
          </Typography>
        </Grid>
      </Grid>

    </div>
  );
}

export default Product;

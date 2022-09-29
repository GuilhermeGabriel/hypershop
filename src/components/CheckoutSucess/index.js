// UI
import { Grid, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function CheckoutSucess() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{ display: 'flex', alignItems: 'center', alignSelf: 'start', marginLeft:8, marginTop: 30, marginBottom: 16 }}>
          <CheckCircleOutlineIcon color={'blue'} fontSize={'large'} />
          <div>
            <Typography marginLeft={1}>Pedido #101010</Typography>
            <Typography fontWeight={'bold'} marginTop={-1} marginLeft={1} fontSize={25}>Obrigado!</Typography>
          </div>
        </div>
        <div style={{ marginBottom: 120, width: '90%', marginTop: 16, borderRadius: 4, padding: 16, border: '2px solid #eee' }}>
          <Typography fontWeight={'bold'} fontSize={20}>Informações do cliente</Typography>
          <br />
          <Typography fontWeight={'bold'} sx={{ fontColor: '#000' }}>Contato:</Typography>
          <Typography >guilhermegabriel90@gmail.com <br /> 389998114604</Typography>
          <br />
          <Typography fontWeight={'bold'}>Endereço de envio:</Typography>
          <Typography>
            Guilherme Gabriel Ferreira
            <br />
            Rua sao bernardo
            <br />
            Joao pinheiro, 39260-000
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSucess;

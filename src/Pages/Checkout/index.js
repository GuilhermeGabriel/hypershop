import { Box, FormControlLabel, FormGroup, Grid, Input, TextField, Typography } from "@mui/material";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Checkbox from '@mui/material/Checkbox';

function Checkout() {
  return (
    <Box>
      <Header />
      <Grid
        container
        paddingLeft={{
          xs: 4,
          md: 8
        }}
        paddingRight={{
          xs: 4,
          md: 8
        }}
        marginTop={0}
        spacing={3}
        paddingBottom={6}
      >

        <Grid item xs={12} md={6}>
          <Typography variant='h5' fontWeight={'bold'}>Contato</Typography>
          <TextField fullWidth sx={{ marginTop: 2 }} label="Email"></TextField>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField fullWidth sx={{ marginTop: 2 }} label="Nome"></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth sx={{ marginTop: 2 }} label="Telefone"></TextField>
            </Grid>
          </Grid>

          <Typography marginTop={2} variant='h5' fontWeight={'bold'}>Envio</Typography>
          <TextField fullWidth sx={{ marginTop: 2 }} label="Endereco"></TextField>
          <TextField fullWidth sx={{ marginTop: 2 }} label="Cidade"></TextField>
          <TextField fullWidth sx={{ marginTop: 2 }} label="País"></TextField>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField fullWidth sx={{ marginTop: 2 }} label="Estado"></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth sx={{ marginTop: 2 }} label="CEP"></TextField>
            </Grid>
          </Grid>

          <Typography marginTop={2} variant='h5' fontWeight={'bold'}>Método de envio</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="R$ 0,00 / Envio grátis (10 dias úteis)" />
            <FormControlLabel control={<Checkbox />} label="R$ 25,00 / Sedex (5 dias úteis)" />
          </FormGroup>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ display: 'flex', backgroundColor: 'red' }}>aaa</div>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}

export default Checkout;

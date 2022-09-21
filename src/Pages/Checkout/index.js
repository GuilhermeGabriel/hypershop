import { Box, Button, FormControlLabel, FormGroup, Grid, Input, TextField, Typography } from "@mui/material";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Checkbox from '@mui/material/Checkbox';
import CreditCardInput from 'react-credit-card-input';
import { useState } from "react";

import tenis from '../../assets/tenis.png';

function Checkout() {
  const [cardNumber, setCardNumber] = useState();
  const [cardExpiry, setCardExpiry] = useState();
  const [cardCVC, setCardCVC] = useState();

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
          <Box marginTop={2} padding={1} boxShadow={'1px 1px 1px 2px #eee'} borderRadius={1}>
            <CreditCardInput
              customTextLabels={{
                invalidCardNumber: 'Número de cartão inválido',
                expiryError: {
                  invalidExpiryDate: 'Datá de expiração é inválida',
                  monthOutOfRange: 'Meses de expiração devem estar entre 1 e 12',
                  yearOutOfRange: 'Ano de expiração não pode ser no passado',
                  dateOutOfRange: 'A data de expiração não pode ser no passado'
                },
                invalidCvc: 'Código de segurança inválido',
                invalidZipCode: 'Código postal inválido',
                cardNumberPlaceholder: 'Número do cartão',
                expiryPlaceholder: 'MM/AA',
                cvcPlaceholder: 'CVC',
                zipPlaceholder: 'CEP'
              }}
              cardNumberInputProps={{ value: cardNumber, onChange: e => setCardNumber() }}
              cardExpiryInputProps={{ value: cardExpiry, onChange: e => setCardExpiry() }}
              cardCVCInputProps={{ value: cardCVC, onChange: e => setCardCVC() }}
              fieldClassName="input"
            />
          </Box>

          <Box fullWidth textAlign={'end'}>
            <Button sx={{ padding: 2, marginTop: 3 }} variant='contained'>Finalizar pedido</Button>
          </Box>

        </Grid>

        <Grid item xs={12} md={6} display={{ xs: 'none', md: 'block' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <tr>
              <td style={{ width: '80vw', textAlign: 'start', fontWeight: '400', paddingBottom: 12 }}>PRODUTOS</td>
              <td style={{ width: '60vw', textAlign: 'end', fontWeight: '400', paddingBottom: 12 }}>PREÇO</td>
              <td style={{ width: '60vw', textAlign: 'end', fontWeight: '400', paddingBottom: 12 }}>TOTAL</td>
            </tr>

            <tr style={{ borderBottom: '1pt solid #e1e3e5', borderTop: '1pt solid #e1e3e5' }}>
              <td style={{ paddingTop: 16, paddingBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'start' }}>
                  <Box
                    component="img"
                    width={{ xs: 92 }}
                    src={tenis}
                  />
                  <ul style={{ listStyle: 'none', textAlign: 'start', marginLeft: -24 }}>
                    <li><b>Lite racer adapt 3.0 shoes</b></li>
                    <li>Size: X</li>
                    <li>Color: Blue</li>
                  </ul>
                </div>
              </td>

              <td style={{ textAlign: 'end', fontSize: 12 }}>
                <Typography fontSize={{ xs: 12, md: 16 }}><b>2x</b> R$823,00</Typography>
              </td>

              <td style={{ textAlign: 'end', fontSize: 12 }}>
                <Typography fontSize={{ xs: 12, md: 16 }}>R$1646,00</Typography>
              </td>
            </tr>
            
            <tr>
                <td style={{ width: '80vw', textAlign: 'start', fontWeight: '400', paddingTop: 20 }}>Taxa de entrega:</td>
                <td style={{ width: '60vw', textAlign: 'end', fontWeight: '400', paddingBottom: 12 }}></td>
                <td style={{ width: '60vw', textAlign: 'end', fontWeight: '400', paddingTop: 12 }}>R$25,00</td>
            </tr>
            <tr>
                <td style={{ width: '80vw', textAlign: 'start', fontWeight: '400', paddingTop: 10 }}>Total:</td>
                <td style={{ width: '60vw', textAlign: 'end', fontWeight: '400', paddingBottom: 12 }}></td>
                <td style={{ width: '60vw', textAlign: 'end', fontWeight: 'bold', fontSize: 20, paddingTop: 8 }}>R$823,00</td>
            </tr>
          </table>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}

export default Checkout;

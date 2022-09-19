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
import Divider from '@mui/material/Divider';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import { Link } from 'react-router-dom';

function Cart() {
  const steps = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
  ];

  return (
    <div>
      <Header />

      <Typography marginTop={2} paddingTop={2} textAlign='center' fontWeight={'bold'} fontSize={30} component="div">
        Carrinho de compras
      </Typography>

      <Typography variant="h6" paddingBottom={2} textAlign='center' fontWeight={'300'} fontSize={16} component="div">
        <a href=''>Continuar comprando</a>
      </Typography>

      {/* <Box sx={{ width: '100%' }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box> */}

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
        <Grid item xs={12} md={9}>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <tr>
              <td style={{ width: '80vw', textAlign: 'start', fontWeight: '400', paddingBottom: 12 }}>PRODUTO</td>

              {/* <Box component="td" display={{xs: 'none', md: 'contents'}} style={{ width: '60vw', textAlign: 'end', fontWeight: '400', paddingBottom: 12 }}>QUANTIDADE</Box> */}

              <td style={{ width: '60vw', textAlign: 'end', fontWeight: '400', paddingBottom: 12 }}>PREÇO</td>
              <td style={{ width: '60vw', textAlign: 'end', fontWeight: '400', paddingBottom: 12 }}>TOTAL</td>
            </tr>

            <tr style={{ borderBottom: '1pt solid #e1e3e5', borderTop: '1pt solid #e1e3e5' }}>
              <td style={{ paddingTop: 16, paddingBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'start' }}>
                  <Box
                    component="img"
                    width={{ xs: 64, md: 120 }}
                    src={tenis}
                  />
                  <ul style={{ listStyle: 'none', textAlign: 'start', marginLeft: -24 }}>
                    <li><b>Lite racer adapt 3.0 shoes</b></li>
                    <li>Size: X</li>
                    <li>Color: Blue</li>
                    <li><a href=''>remove</a></li>
                  </ul>
                </div>
              </td>

              <td style={{ textAlign: 'end', fontSize: 12 }}>
                <Typography fontSize={{ xs: 12, md: 16 }}><b>2x</b> R$823,00</Typography>
              </td>

              <td style={{ textAlign: 'end', fontSize: 12 }}>
                <Typography fontSize={{ xs: 12, md: 16 }}>R$1646,00</Typography>
              </td>

              {/* <td style={{textAlign: 'end', fontSize: 14}}>
                1208,00 R$
              </td> */}
            </tr>

          </table>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography marginTop={-1} fontWeight={'bold'} fontSize={24}>Resumo do pedido</Typography>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
            <Typography fontSize={15}>Sub total</Typography>
            <Typography fontSize={15}>R$ 1650,00</Typography>
          </div>
          <Typography sx={{ marginTop: 3 }} fontStyle={'italic'} color={'#737373'} fontSize={15}>Taxa de serviço e entrega calculada no checkout</Typography>
          <Link style={{ textDecoration: 'none' }} to='/checkout'>
            <Button sx={{ marginTop: 3 }} variant='contained'>Checkout</Button>
          </Link>
        </Grid>
      </Grid>

      <Footer></Footer>
    </div>
  );
}

export default Cart;

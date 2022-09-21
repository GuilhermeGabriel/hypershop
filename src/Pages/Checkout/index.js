import { Box, Button, FormControlLabel, FormGroup, Grid, Input, TextField, Typography } from "@mui/material";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import tenis from '../../assets/tenis.png';
import CheckoutSucess from '../../components/CheckoutSucess';
import InputCheckout from '../../components/InputCheckout';

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

        {/* <Grid item xs={12} md={6}>
          <CheckoutSucess/>
        </Grid> */}

        <Grid item xs={12} md={6}>
          <InputCheckout/>
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

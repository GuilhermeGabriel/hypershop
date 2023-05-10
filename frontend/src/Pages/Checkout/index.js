// UI
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CheckoutSucess from '../../components/CheckoutSucess';
import InputCheckout from '../../components/InputCheckout';

// Query, Routes.
import { useState, useEffect } from "react";
import { gql, useQuery } from '@apollo/client';
import { useData } from '../../Providers/UserDataProvider';

function Checkout() {
  const { data } = useData();
  const [produtos, setProdutos] = useState([]);
  const [precoTotal, setPrecoTotal] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  let idsProdutos = JSON.parse(localStorage.getItem('data')).produtos;
  idsProdutos = Object.keys(idsProdutos);
  const listaIds = idsProdutos.map(id => `"${id}"`).join(', ');
  const QUERY = gql`
    query {
      productsByIds(ids: [${listaIds}]) {
        id
        title,
        price,
        imgUrl,
        quantity
      }
    }
  `;
  const { data: dataGraphql, loading, error } = useQuery(QUERY);
  useEffect(() => {
    if (dataGraphql) {
      let precoTotal = 0;
      for (let item of dataGraphql.productsByIds) {
        precoTotal += item.price * data.produtos[item.id];
      }
      setPrecoTotal(precoTotal);
    }
  }, [dataGraphql]);


  return (
    <Box>
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
        {

          (!finalizado) ?
            <Grid item xs={12} md={6}>
              <InputCheckout onFinish={setFinalizado} />
            </Grid>
            :
            <Grid item xs={12} md={6}>
              <CheckoutSucess />
            </Grid>
        }
        <Grid item xs={12} md={6} display={{ xs: 'none', md: 'block' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <tr>
              <td style={{ width: '80vw', textAlign: 'start', fontWeight: '400', paddingBottom: 12 }}>PRODUTOS</td>
              <td style={{ width: '60vw', textAlign: 'end', fontWeight: '400', paddingBottom: 12 }}>PREÇO</td>
              <td style={{ width: '60vw', textAlign: 'end', fontWeight: '400', paddingBottom: 12 }}>TOTAL</td>
            </tr>

            {
              dataGraphql.productsByIds.map(item =>
                <>
                  <tr style={{ borderBottom: '1pt solid #e1e3e5', borderTop: '1pt solid #e1e3e5' }}>
                    <td style={{ paddingTop: 16, paddingBottom: 8 }}>
                      <div style={{ display: 'flex', alignItems: 'start' }}>
                        <Box
                          component="img"
                          width={{ xs: 64, md: 120 }}
                          src={item.imgUrl}
                        />
                        <ul style={{ marginTop: 32, listStyle: 'none', textAlign: 'start', marginLeft: -24 }}>
                          <li><b>{item.name}</b></li>
                          <li>Tamanho: X</li>
                          <li>Cor: Blue</li>
                        </ul>
                      </div>
                    </td>

                    <td style={{ textAlign: 'end', fontSize: 12 }}>
                      <Typography fontSize={{ xs: 12, md: 16 }}><b>{data.produtos[item.id]}x</b> R${item.price},00</Typography>
                    </td>

                    <td style={{ textAlign: 'end', fontSize: 12 }}>
                      <Typography fontSize={{ xs: 12, md: 16 }}>R${item.price * data.produtos[item.id]},00</Typography>
                    </td>
                  </tr>
                </>
              )
            }

            <tr>
              <td style={{ width: '80vw', textAlign: 'start', fontWeight: '400', paddingTop: 20 }}>Taxa de entrega:</td>
              <td style={{ width: '60vw', textAlign: 'end', fontWeight: '400', paddingBottom: 12 }}></td>
              <td style={{ width: '60vw', textAlign: 'end', fontWeight: '400', paddingTop: 12 }}>R${data.envio},00</td>
            </tr>
            <tr>
              <td style={{ width: '80vw', textAlign: 'start', fontWeight: '400', paddingTop: 10 }}>Total:</td>
              <td style={{ width: '60vw', textAlign: 'end', fontWeight: '400', paddingBottom: 12 }}></td>
              <td style={{ width: '60vw', textAlign: 'end', fontWeight: 'bold', fontSize: 20, paddingTop: 8 }}>R$ {precoTotal + data.envio},00</td>
            </tr>
          </table>
        </Grid>

      </Grid>

    </Box>
  );
}

export default Checkout;

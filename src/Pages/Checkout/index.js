// UI
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CheckoutSucess from '../../components/CheckoutSucess';
import InputCheckout from '../../components/InputCheckout';

// Firebase, Routes.
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useData } from '../../Providers/UserDataProvider';
import { useState } from "react";

function Checkout() {
  const { data, setData } = useData();
  const [produtos, setProdutos] = React.useState([]);
  const [precoTotal, setPrecoTotal] = React.useState(0);
  const [finalizado, setFinalizado] = React.useState(false);

  React.useEffect(() => {
    const db = getFirestore();

    let keys = Object.keys(data.produtos);
    let results = [];
    for (let k of keys) {
      const id = k;
      const r = getDoc(doc(db, "produtos", id));
      results.push(r);
    }

    async function getProds() {
      const resultfinal = await Promise.all(results);
      const prods = [];
      let total = 0;
      resultfinal.forEach((doc) => {
        prods.push(doc.data());
        total += doc.data().preco * data.produtos[doc.data().id];
      });
      setProdutos([...prods]);
      setPrecoTotal(total);
    }

    getProds();
  }, [data]);

  useState(() => {
    console.log(data);
  }, [data])

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
              produtos.map(item =>
                <>
                  <tr style={{ borderBottom: '1pt solid #e1e3e5', borderTop: '1pt solid #e1e3e5' }}>
                    <td style={{ paddingTop: 16, paddingBottom: 8 }}>
                      <div style={{ display: 'flex', alignItems: 'start' }}>
                        <Box
                          component="img"
                          width={{ xs: 64, md: 120 }}
                          src={item.image}
                        />
                        <ul style={{ marginTop: 32, listStyle: 'none', textAlign: 'start', marginLeft: -24 }}>
                          <li><b>{item.name}</b></li>
                          <li>Tamanho: X</li>
                          <li>Cor: Blue</li>
                        </ul>
                      </div>
                    </td>

                    <td style={{ textAlign: 'end', fontSize: 12 }}>
                      <Typography fontSize={{ xs: 12, md: 16 }}><b>{data.produtos[item.id]}x</b> R${item.preco},00</Typography>
                    </td>

                    <td style={{ textAlign: 'end', fontSize: 12 }}>
                      <Typography fontSize={{ xs: 12, md: 16 }}>R${item.preco * data.produtos[item.id]},00</Typography>
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
      <Footer />
    </Box>
  );
}

export default Checkout;

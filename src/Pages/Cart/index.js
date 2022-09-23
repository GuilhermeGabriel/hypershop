import * as React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';

import { useData } from '../../Providers/UserDataProvider';
import { doc, getDoc, getFirestore, onSnapshot } from "firebase/firestore";

function Cart() {
  const { data, setData } = useData();
  const [produtos, setProdutos] = React.useState([]);
  const [precoTotal, setPrecoTotal] = React.useState(0);

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
      let total=0;
      resultfinal.forEach((doc) => {
        prods.push(doc.data());
        total += doc.data().preco*data.produtos[doc.data().id];
      });
      setProdutos([...produtos, ...prods]); 
      setPrecoTotal(total);
    }

    getProds();
  }, [data]);

  const removeProduct = (e, idproduto) => {
    let state = data;
    delete state.produtos[idproduto];
    localStorage.setItem('data',JSON.stringify(state));  
    setData(state);
  }

  return (
    <div>
      <Header />

      <Typography marginTop={2} paddingTop={2} textAlign='center' fontWeight={'bold'} fontSize={30} component="div">
        Carrinho de compras
      </Typography>

      <Typography variant="h6" paddingBottom={2} textAlign='center' fontWeight={'300'} fontSize={16} component="div">
        <Link to='/produtos'>Continuar comprando</Link>
      </Typography>

      <Grid
        marginBottom={'30vh'}
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
                        <ul style={{ listStyle: 'none', textAlign: 'start', marginLeft: -24 }}>
                          <li><b>{item.name}</b></li>
                          <li>Size: X</li>
                          <li>Color: Blue</li>
                          <li><a href='' onClick={(e)=>removeProduct(e, item.id)}>remove</a></li>
                        </ul>
                      </div>
                    </td>

                    <td style={{ textAlign: 'end', fontSize: 12 }}>
                      <Typography fontSize={{ xs: 12, md: 16 }}><b>{data.produtos[item.id]}x</b> R${item.preco},00</Typography>
                    </td>

                    <td style={{ textAlign: 'end', fontSize: 12 }}>
                      <Typography fontSize={{ xs: 12, md: 16 }}>R${item.preco*data.produtos[item.id]},00</Typography>
                    </td>
                  </tr>
                </>
              )
            }
          </table>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography marginTop={-1} fontWeight={'bold'} fontSize={24}>Resumo do pedido</Typography>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
            <Typography fontSize={15}>Sub total</Typography>
            <Typography fontSize={15}>R$ {precoTotal},00</Typography>
          </div>
          <Typography sx={{ marginTop: 3 }} fontStyle={'italic'} color={'#737373'} fontSize={15}>Taxa de serviço e de entrega calculada no checkout.</Typography>
          <Link style={{ textDecoration: 'none' }} to='/checkout'>
            <Box textAlign={'end'}>
              <Button sx={{ marginRight: -1, marginTop: 2 }} variant='contained'>Checkout</Button>
            </Box>
          </Link>

        </Grid>
      </Grid>

      <Footer></Footer>
    </div>
  );
}

export default Cart;

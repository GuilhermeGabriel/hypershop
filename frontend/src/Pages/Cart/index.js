// UI
import { useEffect, useState } from 'react';

import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Firebase, Routes
import { Alert, Snackbar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useData } from '../../Providers/UserDataProvider';
import { gql, useQuery } from '@apollo/client';

function Cart() {
  const { data, setData } = useData();
  const [produtos, setProdutos] = useState([]);
  const [precoTotal, setPrecoTotal] = useState(0);
  const [openToast, setOpenToast] = useState(false);

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



  const removeProduct = (e, idproduto) => {
    delete data.produtos[idproduto];
    localStorage.setItem('data', JSON.stringify(data));
    setData({ ...data, data });
  }

  let navigate = useNavigate();
  const clickBuy = () => {
    
    let canBuy = true;
    for (let item of dataGraphql.productsByIds) {
      if (data.produtos[item.id] > item.quantidade) {
        canBuy = false;
        break;
      }
    }

    if (canBuy) {
      navigate('/checkout');
    } else {
      setOpenToast(true);
    }
  }

  return (
    <div>
      <Snackbar
        sx={{ marginRight: 8 }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={openToast}
        onClose={() => setOpenToast(false)}
        autoHideDuration={5000}
      >
        <Alert severity='error' sx={{ width: '100%' }}>
          Quantidade de itens indisponíveis!
        </Alert>
      </Snackbar>

      <Typography marginTop={2} paddingTop={2} textAlign='center' fontWeight={'bold'} fontSize={30} component="div">
        Carrinho de compras
      </Typography>

      {
        (Object.keys(data.produtos).length !== 0) ?
          <>
            <Typography variant="h6" paddingBottom={2} textAlign='center' fontWeight={'300'} fontSize={16} component="div">
              <Link to='/produtos'>Continuar comprando</Link>
            </Typography>
            <>
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
                    <thead>
                      <tr>
                        <td style={{ width: '80vw', textAlign: 'start', fontWeight: '400', paddingBottom: 12 }}>PRODUTO</td>

                        <td style={{ width: '60vw', textAlign: 'end', fontWeight: '400', paddingBottom: 12 }}>PREÇO</td>
                        <td style={{ width: '60vw', textAlign: 'end', fontWeight: '400', paddingBottom: 12 }}>TOTAL</td>
                      </tr>
                    </thead>

                    {
                      dataGraphql?.productsByIds.map(item =>
                        <tbody key={item.id}>
                          <tr style={{ borderBottom: '1pt solid #e1e3e5', borderTop: '1pt solid #e1e3e5' }}>
                            <td style={{ paddingTop: 16, paddingBottom: 8 }}>
                              <div style={{ display: 'flex', alignItems: 'start' }}>
                                <Box
                                  component="img"
                                  width={{ xs: 64, md: 120 }}
                                  src={item.imgUrl}
                                />
                                <ul style={{ listStyle: 'none', textAlign: 'start', marginLeft: -24 }}>
                                  <li><b>{item.title}</b></li>
                                  <li>Size: X</li>
                                  <li>Color: Blue</li>
                                  <li>
                                    <Link to='/carrinho' onClick={(e) => removeProduct(e, item.id)}>remover</Link>
                                    {/* <a href="#" onClick={(e) => removeProduct(e, item.id)}>remover</a></li> */}
                                  </li>
                                </ul>
                              </div>
                            </td>

                            <td style={{ textAlign: 'end', fontSize: 12 }}>
                              <Typography fontSize={{ xs: 12, md: 16 }}><b>{data.produtos[item.id]}x</b> R${item.price},00</Typography>
                              {
                                (data.produtos[item.id] > item.quantidade) &&
                                <Typography display='flex' justifyContent={'end'} alignItems='center' color='red' fontSize={{ xs: 10, md: 16 }}>
                                  <InfoIcon fontSize='small' /> Quantidade indisponível
                                </Typography>
                              }
                            </td>

                            <td style={{ textAlign: 'end', fontSize: 12 }}>
                              <Typography fontSize={{ xs: 12, md: 16 }}>R${item.price * data.produtos[item.id]},00</Typography>
                            </td>
                          </tr>
                        </tbody>
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
                  <Box textAlign={'end'}>
                    <Button onClick={() => clickBuy()} sx={{ marginRight: -1, marginTop: 2 }} variant='contained'>Checkout</Button>
                  </Box>
                </Grid>
              </Grid>
            </>
          </>
          :
          <>
            <Box width={'100%'} height={'70vh'} textAlign='center'>
              <Typography fontSize={16} marginTop={20} marginBottom={2}>Seu carrinho está vazio!</Typography>
              <Link to='/produtos' style={{ textDecoration: 'none' }}>
                <Button sx={{ padding: 1.5 }} variant='contained'>Continuar comprando</Button>
              </Link>
            </Box>
          </>
      }
    </div>
  );
}

export default Cart;

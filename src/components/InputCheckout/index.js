// UI
import { Box, Button, FormControlLabel, FormGroup, Grid, Input, TextField, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import CreditCardInput from 'react-credit-card-input';
import { useState } from "react";
import { useData } from "../../Providers/UserDataProvider";

export default function InputCheckout({ onFinish }) {
  const { data, setData } = useData();

  const [cardNumber, setCardNumber] = useState();
  const [cardExpiry, setCardExpiry] = useState();
  const [cardCVC, setCardCVC] = useState();

  const [checkBoxState, setCheckBoxState] = useState({
    gratis: true,
    pago: false,
  });

  const handleCheckChange = (type) => {
    if(type==='pago'){
      setCheckBoxState({ gratis: false, pago: true,});
      setData({...data, envio: 25});
    }else{
      setCheckBoxState({ gratis: true, pago: false,});
      setData({...data, envio: 0});
    }
  }

  return (
    <>
      <Typography variant='h5' fontWeight={'bold'}>Contato</Typography>
      <TextField onChange={(e) => setData({ ...data, email: e.target.value })} fullWidth sx={{ marginTop: 2 }} label="Email"></TextField>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextField onChange={(e) => setData({ ...data, name: e.target.value })} fullWidth sx={{ marginTop: 2 }} label="Nome"></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField onChange={(e) => setData({ ...data, telefone: e.target.value })} fullWidth sx={{ marginTop: 2 }} label="Telefone"></TextField>
        </Grid>
      </Grid>

      <Typography marginTop={2} variant='h5' fontWeight={'bold'}>Envio</Typography>
      <TextField onChange={(e) => setData({ ...data, endereco: e.target.value })} fullWidth sx={{ marginTop: 2 }} label="Endereco"></TextField>
      <TextField onChange={(e) => setData({ ...data, cidade: e.target.value })} fullWidth sx={{ marginTop: 2 }} label="Cidade"></TextField>
      <TextField onChange={(e) => setData({ ...data, pais: e.target.value })} fullWidth sx={{ marginTop: 2 }} label="País"></TextField>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextField onChange={(e) => setData({ ...data, estado: e.target.value })} fullWidth sx={{ marginTop: 2 }} label="Estado"></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField onChange={(e) => setData({ ...data, cep: e.target.value })} fullWidth sx={{ marginTop: 2 }} label="CEP"></TextField>
        </Grid>
      </Grid>

      <Typography marginTop={2} variant='h5' fontWeight={'bold'}>Método de envio</Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox checked={checkBoxState.gratis} onChange={() => handleCheckChange('gratis')}/>} label="R$ 0,00 / Envio grátis (10 dias úteis)" />
        <FormControlLabel control={<Checkbox checked={checkBoxState.pago} onChange={() => handleCheckChange('pago')} />} label="R$ 25,00 / Sedex (5 dias úteis)" />
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

      <Box textAlign={'end'}>
        <Button onClick={() => onFinish(true)} sx={{ padding: 2, marginTop: 3 }} variant='contained'>Finalizar pedido</Button>
      </Box>
    </>
  );
}
import './styles.css';

import MastercardSvg from '../../assets/mastercard-svgrepo-com.svg';
import PayPalSvg from '../../assets/paypal-svgrepo-com.svg';
import VisaSvg from '../../assets/visa-svgrepo-com.svg';
import { ReactSVG } from 'react-svg'
import Grid from '@mui/material/Grid';

function Footer() {
  return (
    <Grid
      sx={{ backgroundColor: '#F6F6F6', borderTop: '1px solid #ddd' }}
      container
    >

      <Grid item xs={12} sm={6}>
        <div id='footer_cards_container'>
          <ReactSVG id='footer_cards_container_svg' src={MastercardSvg} />
          <ReactSVG id='footer_cards_container_svg' src={PayPalSvg} />
          <ReactSVG id='footer_cards_container_svg' src={VisaSvg} />
        </div>
      </Grid>

      <Grid item xs={12} sm={6}>
        <span id='footer_right_info'>
          Copyright © 2020 IgluShop
        </span>
      </Grid>

    </Grid>
  );
}

export default Footer;

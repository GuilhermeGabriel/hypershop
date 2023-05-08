// UI
import './styles.css';
import MastercardSvg from '../../assets/mastercard-svgrepo-com.svg';
import PayPalSvg from '../../assets/paypal-svgrepo-com.svg';
import VisaSvg from '../../assets/visa-svgrepo-com.svg';
import { ReactSVG } from 'react-svg'
import Grid from '@mui/material/Grid';

function Footer({ absolut }) {
  return (
    <Grid
      position={(absolut) ? 'absolut' : 'relative'}
      bottom={(absolut) ? '0' : -300}
      sx={{
        backgroundColor: '#F6F6F6',
        borderTop: '1px solid #ddd'
      }}
      container
      paddingLeft={{
        xs: 4,
        md: 8
      }}
      paddingRight={{
        xs: 2,
        md: 6
      }}
    >

      <Grid item xs={12} sm={6} sx={{ display: 'flex', marginTop: 1, justifyContent: { xs: 'center', sm: 'start' } }}>
        <div id='footer_cards_container'>
          <ReactSVG id='footer_cards_container_svg' src={MastercardSvg} />
          <ReactSVG id='footer_cards_container_svg' src={PayPalSvg} />
          <ReactSVG id='footer_cards_container_svg' src={VisaSvg} />
        </div>
      </Grid>

      <Grid item xs={12} sm={6} padding={2} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'end' } }}>
        <span id='footer_right_info'>
          Feito com ❤️ por&nbsp;<a href='https://www.linkedin.com/in/guilhermegabr/'>Gui</a>&nbsp;:D
        </span>
      </Grid>

    </Grid>
  );
}

export default Footer;

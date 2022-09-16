import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import iglooSvg from '../../assets/igloo.svg';
import { ReactSVG } from 'react-svg'

function Header() {
  return (
    <Box>
      <AppBar position="static" variant='outlined'>
        <Toolbar>
          <ReactSVG src={iglooSvg} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, margin: 3 }}>
            igluShop
          </Typography>

          <IconButton
            size="large"
            color="inherit"
            aria-label="bag"
            sx={{ mr: 2 }}
          >
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

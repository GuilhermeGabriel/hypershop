import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';

import iglooSvg from '../../assets/igloo.svg';
import { ReactSVG } from 'react-svg'

function Header() {
  return (
    <Box>
      <AppBar color='secondary' position="static" variant='outlined'>
        <Toolbar >
          <Link style={{ textDecoration: 'none' }} to='/'>
            <ReactSVG src={iglooSvg} />
          </Link>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, margin: 3 }}>
            <Link style={{ textDecoration: 'none' }} to='/'>
              igluShop
            </Link>
          </Typography>

          <Link style={{ textDecoration: 'none' }} to='/carrinho'>

            <IconButton
              size="large"
              color="inherit"
              aria-label="bag"
              sx={{ mr: 2 }}
            >
              <Badge badgeContent={1} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

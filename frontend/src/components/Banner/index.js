// UI
import './styles.css';
import Button from '@mui/material/Button';

// Firebase, Routes
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div id='banner_container'>
      <h1>HyperShop</h1>
      <h2>Equipamentos desenvolvidos para dar um boost na sua performance.</h2>
      <Link style={{ textDecoration: 'none' }} to='/produtos'>
      <Button variant='outlined' color='secondary'
        sx={{backgroundColor: '#3a3a3a', padding: 1.5 }}>Ver todos produtos</Button>
      </Link>
    </div>
  );
}

export default Banner;

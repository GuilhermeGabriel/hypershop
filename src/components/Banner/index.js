import './styles.css';

import Button from '@mui/material/Button';

function Banner() {
  return (
    <div id='banner_container'>
      <h1>igluShop</h1>
      <h2>Bolsas chiques reinventadas para a vida moderna.</h2>
      <Button variant='outlined' 
      sx={{backgroundColor: '#3a3a3a', padding: 1.5 }}>Ver todos produtos</Button>
    </div>
  );
}

export default Banner;

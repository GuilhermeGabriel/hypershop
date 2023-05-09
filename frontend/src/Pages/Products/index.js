// UI
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';

// Firebase, Routes.
import { collection, getFirestore, onSnapshot, query } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function Products() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    const db = getFirestore();

    async function getProdutosData() {
      const q = query(
        collection(db, 'produtos')
      );

      onSnapshot(q, querySnapshot => {
        setProdutos(querySnapshot.docs.map(doc => doc.data()));
      });
    }

    getProdutosData();
  });

  return (
    <div>
      <Grid
        container
        padding={2}
        spacing={2}
      >

        {
          produtos.map(item =>
            <Grid key={item.id} item xs={12} sm={6} lg={3}>
              <Link key={item.id} style={{ textDecoration: 'none' }} to={`/produto/${item.id}`}>
                <Card id={item.id}></Card>
              </Link>
            </Grid>
          )
        }
      </Grid>
    </div>
  );
}

export default Products;

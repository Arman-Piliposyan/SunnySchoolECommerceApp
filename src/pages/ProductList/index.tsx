import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';

import { getAllProducts } from '../../services/productsService';
import { ScrollBarStylesGenerator } from '../../helpers/index';
import { ProductCard } from './ProductCard';
import { IProductData } from '../../types';

export const ProductList = () => {
  const [products, setProducts] = useState<IProductData[] | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await getAllProducts();
      setProducts(data);
    })();
  }, []);

  return (
    <Box
      sx={{
        flexDirection: 'column',
        display: 'flex',
        height: '100%',
        width: '100%',
        gap: '16px',
      }}
    >
      <Typography fontWeight={700} fontSize={32}>
        Products
      </Typography>
      <Box
        sx={{
          ...ScrollBarStylesGenerator('calc(100% - 48px)'),
          gridTemplateColumns: '320px 320px 320px 320px',
          justifyContent: 'space-around',
          display: 'grid',
          gap: '24px',
        }}
      >
        {products &&
          products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
      </Box>
    </Box>
  );
};

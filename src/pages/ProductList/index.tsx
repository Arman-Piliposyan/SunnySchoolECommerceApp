import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Typography, Box, Fab } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { getAllProducts } from '../../services/productsService';
import { ScrollBarStylesGenerator } from '../../helpers/index';
import { ProductCard } from './ProductCard';
import { IProductData } from '../../types';

export const ProductList = () => {
  const [products, setProducts] = useState<IProductData[] | null>(null);

  const [sortedByUp, setSortedByUp] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  const handleSortByUp = () => {
    setIsSorted(true);
    setSortedByUp(true);
  };

  const handleSortByDown = () => {
    setSortedByUp(false);
  };

  const handleUnSort = () => {
    setIsSorted(false);
  };

  useEffect(() => {
    (async () => {
      const { data } = await getAllProducts();
      setProducts(data);
    })();
  }, []);

  const sortingCallback = (item1: IProductData, item2: IProductData) => {
    return item1.title.toLocaleLowerCase() > item2.title.toLocaleLowerCase()
      ? sortedByUp
        ? 1
        : -1
      : item2.title.toLocaleLowerCase() > item1.title.toLocaleLowerCase()
        ? sortedByUp
          ? -1
          : 1
        : 0;
  };

  const finalData = isSorted ? [...products!].sort(sortingCallback) : products;

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
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          width: '100%',
          gap: '32px',
        }}
      >
        <Typography component={'span'} fontWeight={700} fontSize={32}>
          Products
        </Typography>
        {isSorted ? (
          sortedByUp ? (
            <Fab
              onClick={handleSortByDown}
              variant="extended"
              color="primary"
              size="small"
            >
              <ArrowUpwardIcon
                sx={{
                  fontSize: '20px',
                }}
              />
              A-Z
            </Fab>
          ) : (
            <Fab
              onClick={handleUnSort}
              variant="extended"
              color="primary"
              size="small"
            >
              <ArrowDownwardIcon
                sx={{
                  fontSize: '20px',
                }}
              />
              Z-A
            </Fab>
          )
        ) : (
          <Fab
            sx={{
              '&:hover': {
                backgroundColor: '#3f454f',
              },
              backgroundColor: '#57606f ',
              color: 'white',
            }}
            onClick={handleSortByUp}
            variant="extended"
            size="small"
          >
            <ArrowUpwardIcon sx={{ fontSize: '20px' }} />
            A-Z
          </Fab>
        )}
      </Box>
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
          finalData!.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
      </Box>
    </Box>
  );
};

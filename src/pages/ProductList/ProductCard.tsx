import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router';
import React from 'react';

import { AddToCardSection } from './AddToCardSection';
import { IProductData } from '../../types';

type Props = { product: IProductData };

export const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate();

  const handleSeeDetails = () => {
    navigate(`/product-details/${product.id}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#35374B',
        flexDirection: 'column',
        borderRadius: '12px',
        alignItems: 'center',
        height: '325px',
        display: 'flex',
        padding: '16px',
        width: '320px',
        gap: '6px',
      }}
    >
      <Typography fontWeight={500} color={'white'} fontSize={18}>
        {product.title}
      </Typography>
      <img
        style={{ maxWidth: '250px', height: '140px' }}
        src={product.imageUrl}
      />
      <Typography color={'white'} fontSize={18}>
        Price : {product.price}$
      </Typography>

      <Box
        sx={{
          flexDirection: 'column',
          display: 'flex',
          gap: '8px',
        }}
      >
        <Button
          onClick={handleSeeDetails}
          variant="contained"
          color="primary"
          size="small"
        >
          See Details
        </Button>
        <AddToCardSection product={product} />
      </Box>
    </Box>
  );
};

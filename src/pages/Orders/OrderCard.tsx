import { Typography, Box } from '@mui/material';
import React from 'react';

import { IOrderData } from '../../types';

type Props = {
  product: IOrderData;
};

export const OrderCard = ({ product }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: '#006266',
        flexDirection: 'column',
        borderRadius: '12px',
        alignItems: 'center',
        height: '350px',
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
      <Typography color={'white'} fontSize={18}>
        Total Purchased : {product.count} item(s)
      </Typography>
      <Typography color={'white'} fontSize={18}>
        Total Price : {product.price * product.count}$
      </Typography>
      <Typography color={'white'} fontSize={18}>
        Purchased In : {product.date}
      </Typography>
    </Box>
  );
};

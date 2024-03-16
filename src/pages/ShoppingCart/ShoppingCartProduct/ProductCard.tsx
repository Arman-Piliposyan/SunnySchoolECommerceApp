import { Typography, Button, Box } from '@mui/material';
import { toast } from 'react-toastify';
import React from 'react';

import { deleteItemFromCard } from '../../../services/shoppingCardService';
import { CheckoutSection } from './CheckoutSection';
import { ICardProductData } from '../../../types';

type Props = {
  setIsCardEdited: React.Dispatch<React.SetStateAction<boolean>>;
  product: ICardProductData;
};

export const ProductCard = ({ setIsCardEdited, product }: Props) => {
  const handleDeleteFromCard = async () => {
    try {
      await deleteItemFromCard(product.id);
      toast.success('Success');
      setIsCardEdited((prevState) => !prevState);
    } catch (error) {
      toast.error('Fail');
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#130f40',
        flexDirection: 'column',
        borderRadius: '12px',
        alignItems: 'center',
        height: '345px',
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
          onClick={handleDeleteFromCard}
          variant="contained"
          color="primary"
          size="small"
        >
          Delete
        </Button>
        <CheckoutSection setIsCardEdited={setIsCardEdited} product={product} />
      </Box>
    </Box>
  );
};

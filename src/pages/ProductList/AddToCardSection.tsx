import { Button, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { userSelector } from '../../store/user-slice/user-selectors';
import { addToCardPost } from '../../services/shoppingCardService';
import { IProductData } from '../../types';

type Props = { product: IProductData };

export const AddToCardSection = ({ product }: Props) => {
  const user = useSelector(userSelector);

  const [count, setCount] = useState(1);

  const handleAddItem = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinusItem = () => {
    if (count < 2) {
      return;
    }
    setCount((prev) => prev - 1);
  };

  const handleAddShoppingCard = async () => {
    const { imageUrl, title, price } = product;
    try {
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      await addToCardPost({ userId: user?.id!, imageUrl, title, price, count });
      setCount(1);
      toast.success('Success');
    } catch (error) {
      toast.error('Fail');
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <Box>
      <Button
        sx={{
          '&:hover': {
            backgroundColor: count < 2 ? '#1976D250' : '',
          },
          backgroundColor: count < 2 ? '#1976D250' : '',
          cursor: count < 2 ? 'not-allowed' : 'pointer',
          borderRadius: '6px 0 0 6px',
        }}
        onClick={handleMinusItem}
        variant="contained"
        color="primary"
        size="small"
      >
        -
      </Button>
      <Button
        onClick={handleAddShoppingCard}
        sx={{ borderRadius: '0' }}
        variant="contained"
        color="primary"
        size="small"
      >
        Add To Card {count}
      </Button>
      <Button
        sx={{
          borderRadius: '0 6px 6px 0',
        }}
        onClick={handleAddItem}
        variant="contained"
        color="primary"
        size="small"
      >
        +
      </Button>
    </Box>
  );
};

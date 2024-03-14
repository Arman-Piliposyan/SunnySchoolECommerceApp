import { Typography, Button, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

import {
  deleteItemFromCard,
  orderPost,
} from '../../services/shoppingCardService';
import { userSelector } from '../../store/user-slice/user-selectors';
import { ICardProductData } from '../../types';

type Props = {
  setIsCardEdited: React.Dispatch<React.SetStateAction<boolean>>;
  product: ICardProductData;
};

export const CheckoutSection = ({ setIsCardEdited, product }: Props) => {
  const user = useSelector(userSelector);

  const [count, setCount] = useState(product.count);

  const handleAddItem = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinusItem = () => {
    if (count < 2) {
      return;
    }
    setCount((prev) => prev - 1);
  };

  const handleCheckoutProduct = async () => {
    const { imageUrl, title, price } = product;
    try {
      await orderPost({
        date: format(new Date(), 'yyyy/MM/dd HH:MM'),
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        userId: user?.id!,
        imageUrl,
        title,
        price,
        count,
      });
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
    <>
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
          onClick={handleCheckoutProduct}
          sx={{ borderRadius: '0' }}
          variant="contained"
          color="primary"
          size="small"
        >
          Checkout {count}
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
      <Typography color={'white'} align="center" fontSize={18}>
        Total Price : {product.price * count}$
      </Typography>
    </>
  );
};

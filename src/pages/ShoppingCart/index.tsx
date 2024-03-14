import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';

import { getShoppingCardItems } from '../../services/shoppingCardService';
import { userSelector } from '../../store/user-slice/user-selectors';
import { ScrollBarStylesGenerator } from '../../helpers/index';
import { ICardProductData } from '../../types';
import { ProductCard } from './ProductCard';

export const ShoppingCart = () => {
  const user = useSelector(userSelector);

  const [isCardEdited, setIsCardEdited] = useState(false);
  const [cardProducts, setCardProducts] = useState<ICardProductData[] | null>(
    null,
  );

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getShoppingCardItems(user!.id);
        setCardProducts(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [isCardEdited]);

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
        Shopping Card
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
        {cardProducts &&
          cardProducts.map((product) => {
            return (
              <ProductCard
                setIsCardEdited={setIsCardEdited}
                product={product}
                key={product.id}
              />
            );
          })}
      </Box>
    </Box>
  );
};

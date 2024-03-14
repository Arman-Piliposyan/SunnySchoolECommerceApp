import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';

import { userSelector } from '../../store/user-slice/user-selectors';
import { ScrollBarStylesGenerator } from '../../helpers/index';
import { getOrders } from '../../services/shoppingCardService';
import { IOrderData } from '../../types';
import { OrderCard } from './OrderCard';

export const Orders = () => {
  const user = useSelector(userSelector);

  const [orders, setOrders] = useState<IOrderData[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getOrders(user!.id);
        setOrders(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
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
        Orders
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
        {orders &&
          orders.map((product, index) => {
            return <OrderCard product={product} key={index} />;
          })}
      </Box>
    </Box>
  );
};

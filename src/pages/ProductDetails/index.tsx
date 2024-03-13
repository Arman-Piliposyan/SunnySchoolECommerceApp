import { Typography, Button, Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import React, { useEffect, useState } from 'react';

import { getProduct } from '../../services/productsService';
import { IProductData } from '../../types';

export const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<IProductData | null>(null);

  const handleGoBack = () => {
    navigate('/product-list');
  };

  useEffect(() => {
    (async () => {
      if (!productId) {
        return;
      }
      try {
        const { data } = await getProduct(productId);
        setProduct(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, []);

  return (
    <Box sx={{ flexDirection: 'column', display: 'flex', gap: '16px' }}>
      <Box
        sx={{ justifyContent: 'space-between', display: 'flex', width: '100%' }}
      >
        <Typography fontWeight={700} fontSize={32}>
          Product Details
        </Typography>
        <Button
          onClick={handleGoBack}
          variant="contained"
          color="primary"
          size="small"
        >
          Go back
        </Button>
      </Box>
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <img
          style={{
            border: '4px groove gray',
            borderRadius: '16px',
            height: '300px',
          }}
          src={product?.imageUrl}
        />
        <Box
          sx={{
            flexDirection: 'column',
            display: 'flex',
            width: '50%',
            gap: '8px',
          }}
        >
          <Typography fontWeight={700} fontSize={18}>
            Name:{' '}
            <Typography component={'span'} fontWeight={500} fontSize={18}>
              {product?.title}
            </Typography>
          </Typography>
          <Typography fontWeight={700} fontSize={18}>
            Price:{' '}
            <Typography component={'span'} fontWeight={500} fontSize={18}>
              {product?.price}$
            </Typography>
          </Typography>
          <Typography fontWeight={700} fontSize={18}>
            Description :{' '}
            <Typography component={'span'} fontWeight={500} fontSize={18}>
              {product?.description}
            </Typography>
          </Typography>
          <Box
            sx={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              paddingBottom: '4px',
              display: 'flex',
              flex: '1 0',
            }}
          >
            {/* <Button
              onClick={handleOpenSideBar}
              endIcon={<EditIcon />}
              variant="contained"
            >
              Edit Profile
            </Button> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Typography, Button, Box } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import React from 'react';

import { TextFieldController } from '../../components/UI_components/TextFieldController';
import { AddProductSchema } from '../../constants/ValidationSchemas';
import { addProductPost } from '../../services/productsService';
import { IAddProductData } from '../../types';

export const Admin = () => {
  const { handleSubmit, control, reset } = useForm<IAddProductData>({
    resolver: yupResolver(AddProductSchema),
    mode: 'onBlur',
  });

  const handleAdd = async (data: IAddProductData) => {
    try {
      await addProductPost(data);
      toast.success('Success');
      reset();
    } catch (error) {
      toast.error('Fail');
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <Box sx={{ flexDirection: 'column', display: 'flex', gap: '16px' }}>
      <Typography fontWeight={700} fontSize={32}>
        Admin
      </Typography>
      <Typography fontWeight={700} fontSize={18}>
        Add Product
      </Typography>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          width: '100%',
          gap: '24px',
        }}
      >
        <Box
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            display: 'flex',
            width: '50%',
            gap: '8px',
          }}
        >
          <TextFieldController
            fieldName="title"
            control={control}
            label="Title*"
          />
          <TextFieldController
            fieldName="price"
            control={control}
            label="Price*"
            type="number"
          />
          <TextFieldController
            fieldName="imageUrl"
            label="Image Url*"
            control={control}
          />
        </Box>
        <Box
          sx={{
            justifyContent: 'space-between',
            flexDirection: 'column',
            display: 'flex',
            height: '100%',
            width: '50%',
            gap: '12px',
          }}
        >
          <TextFieldController
            fieldName="description"
            label="Description*"
            control={control}
            minRows={3}
            maxRows={3}
            multiline
          />

          <Box
            sx={{ justifyContent: 'flex-end', display: 'flex', width: '100%' }}
          >
            <Button
              onClick={handleSubmit(handleAdd)}
              endIcon={<AddCircleIcon />}
              variant="contained"
            >
              Add
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

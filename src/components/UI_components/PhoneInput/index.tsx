/* eslint-disable @typescript-eslint/ban-ts-comment */
import ReactInputMask from 'react-input-mask';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import React from 'react';

type Props = {
  size?: undefined | 'medium' | 'small';
  inputName?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
};

export const PhoneInput = ({
  inputName = 'phone',
  size = 'small',
  control,
}: Props) => {
  return (
    <Controller
      render={({
        field: { onChange, onBlur, value, name },
        formState: { errors },
      }) => {
        return (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          <ReactInputMask
            value={value || '+374'}
            mask="+99999999999"
            onChange={onChange}
            maskChar={null}
            onBlur={onBlur}
          >
            {/* @ts-ignore */}
            {() => (
              <TextField
                //@ts-ignore
                helperText={errors[name] && errors[name]?.message}
                error={!!errors[name]}
                label="Phone*"
                size={size}
                fullWidth
              />
            )}
          </ReactInputMask>
        );
      }}
      control={control}
      name={inputName}
    />
  );
};

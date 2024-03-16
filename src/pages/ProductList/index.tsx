import {
  InputAdornment,
  Typography,
  TextField,
  Slider,
  Box,
  Fab,
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';

import {
  productsWrapperStyles,
  sliderWrapperStyles,
  searchWrapperStyles,
  pageHeaderStyles,
  wrapperStyles,
} from './constants';
import { getAllProducts } from '../../services/productsService';
import { alphabetSortingCallBack } from '../../helpers/index';
import { ProductCard } from './ProductCard/ProductCard';
import { IProductData } from '../../types';

export const ProductList = () => {
  const [products, setProducts] = useState<IProductData[] | null>(null);
  const [sortedByUp, setSortedByUp] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterRange, setFilterRange] = useState<number[]>([0, 1000]);
  const [inputValue, setInputValue] = useState('');
  const [debouncedInputValue, setDebouncedInputValue] = useState('');

  const handleChange = (event: Event, newValue: number[] | number) => {
    setFilterRange(newValue as number[]);
  };

  const handleFilter = () => {
    setIsFiltered(true);
  };

  const handleUnFilter = () => {
    setIsFiltered(false);
  };

  const handleSortByUp = () => {
    setIsSorted(true);
    setSortedByUp(true);
  };

  const handleSortByDown = () => {
    setSortedByUp(false);
  };

  const handleUnSort = () => {
    setIsSorted(false);
  };

  const handleClick = () => {
    if (!isSorted) {
      handleSortByUp();
      return;
    }
    if (sortedByUp) {
      handleSortByDown();
      return;
    }
    handleUnSort();
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue.toUpperCase());
    }, 600);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  useEffect(() => {
    (async () => {
      const { data } = await getAllProducts();
      setProducts(data);
    })();
  }, []);

  const filteredBySearchProducts = products
    ? debouncedInputValue
      ? [...products].filter((item) =>
          item.title.toUpperCase().includes(debouncedInputValue),
        )
      : [...products]
    : [];

  const filteredProducts = isFiltered
    ? [...filteredBySearchProducts].filter(
        (item) => item.price >= filterRange[0] && item.price <= filterRange[1],
      )
    : [...filteredBySearchProducts];

  const finalData = isSorted
    ? filteredProducts.sort(alphabetSortingCallBack(sortedByUp))
    : filteredProducts;

  return (
    <Box sx={wrapperStyles}>
      <Box sx={pageHeaderStyles}>
        <Typography component={'span'} fontWeight={700} fontSize={32}>
          Products
        </Typography>
        <Fab
          sx={
            !isSorted
              ? {
                  '&:hover': {
                    backgroundColor: '#3f454f',
                  },
                  backgroundColor: '#57606f ',
                  color: 'white',
                }
              : {}
          }
          onClick={handleClick}
          variant="extended"
          color="primary"
          size="small"
        >
          {!isSorted || sortedByUp ? (
            <ArrowUpwardIcon sx={{ fontSize: '20px' }} />
          ) : (
            <ArrowDownwardIcon sx={{ fontSize: '20px' }} />
          )}
          {!isSorted || sortedByUp ? 'A-Z' : 'Z-A'}
        </Fab>
        <Box sx={sliderWrapperStyles}>
          <Fab
            onClick={handleUnFilter}
            disabled={!isFiltered}
            variant="extended"
            color="primary"
            size="small"
          >
            <FilterAltOffIcon />
          </Fab>
          <Slider
            onChange={handleChange}
            valueLabelDisplay="on"
            value={filterRange}
            size="small"
            max={1000}
            min={0}
          />
          <Fab
            onClick={handleFilter}
            variant="extended"
            color="primary"
            size="small"
          >
            <FilterAltIcon />
          </Fab>
        </Box>
        <Box sx={searchWrapperStyles}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={handleInputChange}
            variant="outlined"
            label="Search"
            size="small"
          />
        </Box>
      </Box>
      <Box sx={productsWrapperStyles}>
        {products &&
          finalData!.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
      </Box>
    </Box>
  );
};

import { IProductData } from '../types';

export const ScrollBarStylesGenerator = (
  height?: string,
  maxHeight?: string,
  hasOverflowX?: boolean,
  color?: string,
) => {
  return {
    '&::-webkit-scrollbar': {
      backgroundColor: color ? color + 25 : '#1976D225',
      borderRadius: '8px',
      opacity: '0.1',
      height: '4px',
      width: '4px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: color ? color + 25 : '#1976D225',
      borderRadius: '8px',
      opacity: '0.1',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: color ? color : '#1976D2',
      borderRadius: '8px',
    },
    overflow: hasOverflowX ? 'auto' : 'hidden',
    maxHeight: maxHeight ? maxHeight : null,
    height: height ? height : null,

    paddingRight: '6px',

    overflowY: 'auto',
  };
};

export const alphabetSortingCallBack = (sortedByUp: boolean) => {
  return (item1: IProductData, item2: IProductData) => {
    return item1.title.toLocaleLowerCase() > item2.title.toLocaleLowerCase()
      ? sortedByUp
        ? 1
        : -1
      : item2.title.toLocaleLowerCase() > item1.title.toLocaleLowerCase()
        ? sortedByUp
          ? -1
          : 1
        : 0;
  };
};

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

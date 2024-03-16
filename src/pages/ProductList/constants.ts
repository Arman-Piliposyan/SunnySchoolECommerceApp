import { ScrollBarStylesGenerator } from '../../helpers/index';

export const wrapperStyles = {
  flexDirection: 'column',
  display: 'flex',
  height: '100%',
  width: '100%',
  gap: '16px',
};

export const pageHeaderStyles = {
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex',
  width: '100%',
  gap: '128px',
};

export const sliderWrapperStyles = {
  alignItems: 'flex-end',
  display: 'flex',
  height: '100%',
  gap: '24px',
  width: 300,
};

export const productsWrapperStyles = {
  ...ScrollBarStylesGenerator('calc(100% - 48px)'),
  gridTemplateColumns: '320px 320px 320px 320px',
  justifyContent: 'space-around',
  display: 'grid',
  gap: '24px',
};

export const searchWrapperStyles = {
  alignItems: 'center',
  display: 'flex',
  gap: '16px',
};

export const productCardWrapperStyles = {
  backgroundColor: '#35374B',
  flexDirection: 'column',
  borderRadius: '12px',
  alignItems: 'center',
  height: '325px',
  display: 'flex',
  padding: '16px',
  width: '320px',
  gap: '6px',
};

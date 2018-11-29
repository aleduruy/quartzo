export const fontSize = {
  xxs: {
    acom: '12px',
    suba: '12px',
    shop: '12px',
  },
  xs: {
    acom: '14px',
    suba: '14px',
    shop: '14px',
  },
  sm: {
    acom: '16px',
    suba: '16px',
    shop: '16px',
  },
  md: {
    acom: '18px',
    suba: '18px',
    shop: '18px',
  },
  lg: {
    acom: '20px',
    suba: '20px',
    shop: '20px',
  },
  xl: {
    acom: '24px',
    suba: '22px',
    shop: '24px',
  },
  xxl: {
    acom: '30px',
    suba: '28px',
    shop: '28px',
  },
};

export const getfontSize = (brand, size) => {
  switch (size) {
    case 'xxs':
      return fontSize.xxs[brand];
    case 'xs':
      return fontSize.xs[brand];
    case 'sm':
      return fontSize.sm[brand];
    case 'md':
      return fontSize.md[brand];
    case 'lg':
      return fontSize.lg[brand];
    case 'xl':
      return fontSize.xl[brand];
    case 'xxl':
      return fontSize.xxl[brand];
    default:
      return fontSize.sm[brand];
  }
};

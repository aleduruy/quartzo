import { medias, platform } from '../../helpers';
import { css } from 'styled-components';
import themeUI from 'styled-theming';

export const spacing = {
  xxs: {
    acom: '5px;',
    suba: '5px;',
    shop: '5px;',
  },
  xs: {
    acom: '10px;',
    suba: '10px;',
    shop: '10px;',
  },
  sm: {
    acom: '15px;',
    suba: '15px;',
    shop: '15px;',
  },
  md: {
    acom: '20px;',
    suba: '20px;',
    shop: '20px;',
  },
  lg: {
    acom: '35px;',
    suba: '35px;',
    shop: '35px;',
  },
  xl: {
    acom: '45px;',
    suba: '45px;',
    shop: '45px;',
  },
  xxl: {
    acom: '65px;',
    suba: '65px;',
    shop: '65px;',
  },
};
export const getSpacing = (brand, spacingSize) => {
  switch (spacingSize) {
    case 'none':
      return 0;
    case 'xxs':
      return spacing.xxs[brand];
    case 'xs':
      return spacing.xs[brand];
    case 'sm':
      return spacing.sm[brand];
    case 'md':
      return spacing.md[brand];
    case 'lg':
      return spacing.lg[brand];
    case 'xl':
      return spacing.xl[brand];
    case 'xxl':
      return spacing.xxl[brand];
    default:
      return spacing.sm[brand];
  }
};

export const spacingStyles = (variant, attr = 'padding') => {
  let attribute = attr;

  if (variant == 'spacingTop' || variant == 'paddingTop' || variant == 'marginTop') {
    attribute = `${attr}-top`;
  }
  if (variant == 'spacingBottom' || variant == 'paddingBottom' || variant == 'marginBottom') {
    attribute = `${attr}-bottom`;
  }
  if (variant == 'spacingRight' || variant == 'paddingRight' || variant == 'marginRight') {
    attribute = `${attr}-right`;
  }
  if (variant == 'spacingLeft' || variant == 'paddingLeft' || variant == 'marginLeft') {
    attribute = `${attr}-left`;
  }

  return themeUI('brand', {
    acom: css`
      ${props => props[variant] && typeof props[variant] === 'string' && css`
        ${attribute}: ${getSpacing('acom', props[variant])};}
      `}
      ${props => props[variant].xxs && platform != 'web' && css`
        ${attribute}: ${getSpacing('acom', props[variant].xxs)};}
      `}
      ${props => props[variant].xxs && platform === 'web' && css`
        @media (min-width: ${medias.xxs}px) {
          ${attribute}: ${getSpacing('acom', props[variant].xxs)};
        }
      `}
      ${props => props[variant].xs && platform === 'web' && css`
        @media (min-width: ${medias.xs}px) {
          ${attribute}: ${getSpacing('acom', props[variant].xs)};
        }
      `}
      ${props => props[variant].sm && platform === 'web' && css`
        @media (min-width: ${medias.sm}px) {
          ${attribute}: ${getSpacing('acom', props[variant].sm)};
        }
      `}
      ${props => props[variant].md && platform === 'web' && css`
        @media (min-width: ${medias.md}px) {
          ${attribute}: ${getSpacing('acom', props[variant].md)};
        }
      `}
      ${props => props[variant].lg && platform === 'web' && css`
        @media (min-width: ${medias.lg}px) {
          ${attribute}: ${getSpacing('acom', props[variant].lg)};
        }
      `}
      ${props => props[variant].xl && platform === 'web' && css`
        @media (min-width: ${medias.xl}px) {
          ${attribute}: ${getSpacing('acom', props[variant].xl)};
        }
      `}
    `,
    suba: css`
      ${props => props[variant] && typeof props[variant] === 'string' && css`
        ${attribute}: ${getSpacing('suba', props[variant])};};
      `}
      ${props => props[variant].xxs && platform != 'web' && css`
        ${attribute}: ${getSpacing('suba', props[variant].xxs)};};
      `}
      ${props => props[variant].xxs && platform === 'web' && css`
        @media (min-width: ${medias.xxs}px) {
          ${attribute}: ${getSpacing('suba', props[variant].xxs)};
        }
      `}
      ${props => props[variant].xs && platform === 'web' && css`
        @media (min-width: ${medias.xs}px) {
          ${attribute}: ${getSpacing('suba', props[variant].xs)};
        }
      `}
      ${props => props[variant].sm && platform === 'web' && css`
        @media (min-width: ${medias.sm}px) {
          ${attribute}: ${getSpacing('suba', props[variant].sm)};
        }
      `}
      ${props => props[variant].md && platform === 'web' && css`
        @media (min-width: ${medias.md}px) {
          ${attribute}: ${getSpacing('suba', props[variant].md)};
        }
      `}
      ${props => props[variant].lg && platform === 'web' && css`
        @media (min-width: ${medias.lg}px) {
          ${attribute}: ${getSpacing('suba', props[variant].lg)};
        }
      `}
      ${props => props[variant].xl && platform === 'web' && css`
        @media (min-width: ${medias.xl}px) {
          ${attribute}: ${getSpacing('suba', props[variant].xl)};
        }
      `}
    `,
    shop: css`
      ${props => props[variant] && typeof props[variant] === 'string' && css`
        ${attribute}: ${getSpacing('shop', props[variant])};};
      `}
      ${props => props[variant].xxs && platform != 'web' && css`
        ${attribute}: ${getSpacing('shop', props[variant].xxs)};};
      `}
      ${props => props[variant].xxs && platform === 'web' && css`
        @media (min-width: ${medias.xxs}px) {
          ${attribute}: ${getSpacing('shop', props[variant].xxs)};
        }
      `}
      ${props => props[variant].xs && platform === 'web' && css`
        @media (min-width: ${medias.xs}px) {
          ${attribute}: ${getSpacing('shop', props[variant].xs)};
        }
      `}
      ${props => props[variant].sm && platform === 'web' && css`
        @media (min-width: ${medias.sm}px) {
          ${attribute}: ${getSpacing('shop', props[variant].sm)};
        }
      `}
      ${props => props[variant].md && platform === 'web' && css`
        @media (min-width: ${medias.md}px) {
          ${attribute}: ${getSpacing('shop', props[variant].md)};
        }
      `}
      ${props => props[variant].lg && platform === 'web' && css`
        @media (min-width: ${medias.lg}px) {
          ${attribute}: ${getSpacing('shop', props[variant].lg)};
        }
      `}
      ${props => props[variant].xl && platform === 'web' && css`
        @media (min-width: ${medias.xl}px) {
          ${attribute}: ${getSpacing('shop', props[variant].xl)};
        }
      `}
    `,
  });
};

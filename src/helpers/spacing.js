import { medias, platform } from '.';
import { css } from 'styled-components';
import themeUI from 'styled-theming';

export const spacing = {
  xxs: '5px;',
  xs: '10px;',
  sm: '15px;',
  md: '20px;',
  lg: '35px;',
  xl: '45px;',
  xxl: '65px;',
};
export const getSpacing = (spacingSize) => {
  switch (spacingSize) {
    case 'none':
      return 0;
    case 'xxs':
      return spacing.xxs;
    case 'xs':
      return spacing.xs;
    case 'sm':
      return spacing.sm;
    case 'md':
      return spacing.md;
    case 'lg':
      return spacing.lg;
    case 'xl':
      return spacing.xl;
    case 'xxl':
      return spacing.xxl;
    default:
      return spacing.sm;
  }
};

export const spacingStyles = (variant, attr = 'padding') => {
  let attribute = attr;

  if (variant == 'paddingTop' || variant == 'marginTop') {
    attribute = `${attr}-top`;
  }
  if (variant == 'paddingBottom' || variant == 'marginBottom') {
    attribute = `${attr}-bottom`;
  }
  if (variant == 'paddingRight' || variant == 'marginRight') {
    attribute = `${attr}-right`;
  }
  if (variant == 'paddingLeft' || variant == 'marginLeft') {
    attribute = `${attr}-left`;
  }

  return css`
  ${props => props[variant] && typeof props[variant] === 'string' && css`
    ${attribute}: ${getSpacing(props[variant])};}
  `}
  ${props => props[variant].xxs && platform != 'web' && css`
    ${attribute}: ${getSpacing(props[variant].xxs)};}
  `}
  ${props => props[variant].xxs && platform === 'web' && css`
    @media (min-width: ${medias.xxs}px) {
      ${attribute}: ${getSpacing(props[variant].xxs)};
    }
  `}
  ${props => props[variant].xs && platform === 'web' && css`
    @media (min-width: ${medias.xs}px) {
      ${attribute}: ${getSpacing(props[variant].xs)};
    }
  `}
  ${props => props[variant].sm && platform === 'web' && css`
    @media (min-width: ${medias.sm}px) {
      ${attribute}: ${getSpacing(props[variant].sm)};
    }
  `}
  ${props => props[variant].md && platform === 'web' && css`
    @media (min-width: ${medias.md}px) {
      ${attribute}: ${getSpacing(props[variant].md)};
    }
  `}
  ${props => props[variant].lg && platform === 'web' && css`
    @media (min-width: ${medias.lg}px) {
      ${attribute}: ${getSpacing(props[variant].lg)};
    }
  `}
  ${props => props[variant].xl && platform === 'web' && css`
    @media (min-width: ${medias.xl}px) {
      ${attribute}: ${getSpacing(props[variant].xl)};
    }
  `}
  ${props => props[variant].xxl && platform === 'web' && css`
    @media (min-width: ${medias.xxl}px) {
      ${attribute}: ${getSpacing(props[variant].xxl)};
    }
  `}
`
};


import themeUI from 'styled-theming';
import { css } from 'styled-components';
import { platform, color, spacingStyles, medias, getfontSize, fontFamily } from '../../helpers';

const getSpecificSize = size => {
  return themeUI('brand', {
    acom: getfontSize('acom', size),
    suba: getfontSize('suba', size),
    shop: getfontSize('shop', size),
  });
};

export const getColors = props => {
  if (props.colorText === 'primary') {
    return color.primary[props.theme.brand];
  }
  if (props.colorText === 'light') {
    return color.grey.light[props.theme.brand];
  }
  if (props.colorText === 'medium') {
    return color.grey.medium[props.theme.brand];
  }
  if (props.colorText === 'dark') {
    return color.grey.darker[props.theme.brand];
  }
  if (props.colorText === 'white') {
    return color.white;
  }
  return color.grey.dark[props.theme.brand];
};

const lineHeightStyle = themeUI('brand', {
  acom: css`line-height: normal`,
  suba: css`line-height: 1.2`,
  shop: css`line-height: 1`,
});

export default css`
  margin: 0;
  ${platform === 'web' && css`${lineHeightStyle};`}
  ${props => props.spacing && css` ${spacingStyles('spacing')}`}
  ${props => props.spacingTop && css` ${spacingStyles('spacingTop')}`}
  ${props => props.spacingBottom && css` ${spacingStyles('spacingBottom')}`}
  ${props => props.spacingRight && css` ${spacingStyles('spacingRight')}`}
  ${props => props.spacingLeft && css` ${spacingStyles('spacingLeft')}`}

  ${props => props.extended && css`
    ${platform === 'web' && `line-height: 1.5;`}
    display: flex;
    flex-basis: 100%;
    width: 100%;`}

  ${props => props.size && typeof props.size === 'string' && css`
    font-size: ${getSpecificSize(props.size)}};
  `}
  ${props => props.colorText && css`
    color: ${props => getColors(props)};
  `}
  ${props => props.strong && css`
    font-weight: bold;
  `}
  ${props => props.italic && css`
    font-style: italic;
  `}
  ${props => props.hidden && css`
    display: none;
  `}
  ${platform === 'web' && css`
    font-family: ${props => fontFamily[props.theme.brand]};
  `}
  ${props => props.numberOfLines && platform === 'web' && css`
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: ${props.numberOfLines};
    -webkit-box-orient: vertical;
  `}

  ${props => props.size && props.size.xxs && css`
      font-size: ${getSpecificSize(props.size.xxs)};
  `}
  ${props => props.size && props.size.xs && platform === 'web' && css`
    @media (min-width: ${medias.xs}px) {
      font-size: ${getSpecificSize(props.size.xs)};
    }
  `}
  ${props => props.size && props.size.sm && platform === 'web' && css`
    @media (min-width: ${medias.sm}px) {
      font-size: ${getSpecificSize(props.size.sm)};
    }
  `}
  ${props => props.size && props.size.md && platform === 'web' && css`
    @media (min-width: ${medias.md}px) {
      font-size: ${getSpecificSize(props.size.md)};
    }
  `}
  ${props => props.size && props.size.lg && platform === 'web' && css`
    @media (min-width: ${medias.lg}px) {
      font-size: ${getSpecificSize(props.size.lg)};
    }
  `}
  ${props => props.size && props.size.xxl && platform === 'web' && css`
    @media (min-width: ${medias.xl}px) {
      font-size: ${getSpecificSize(props.size.xl)};
    }
  `}

`;

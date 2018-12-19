import { css } from 'styled-components';
import { platform, medias } from '../../helpers';
import { fontFamily } from '../../assets/styles/font-family';

export default css`
  margin: 0;

  ${props => props.colorText && css`
    color: black;
  `}
  ${props => props.weight && css`
    font-weight: ${props => props.weight};
  `}
  ${props => props.italic && css`
    font-style: italic;
  `}
  ${props => props.underline && css`
    text-decoration: underline;
  `}
  ${platform === 'web' && css`
    font-family: ${fontFamily};
  `}
`;

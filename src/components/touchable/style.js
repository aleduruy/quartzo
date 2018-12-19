import { css } from 'styled-components';
import { platform } from '../../helpers';
import { yellow } from '../../assets/styles/color';

export default css`
  text-decoration: none;
  cursor: pointer;
  ${props => props.ripple && platform === 'web' && css`
    position: relative;
    -webkit-tap-highlight-color: transparent;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    :before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: ${props => `radial-gradient(circle, ${yellow.medium} 10%, transparent 10.01%)`};
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(0, 0);
      opacity: 0;
      z-index: 1;
    }
    @keyframes ripple {
      0%   {transform: scale(0, 0);opacity: .4;}
      50%  {transform: scale(10, 10);opacity: 0;}
      100% {transform: scale(20, 20);opacity: 0;}
    }
    :active:before {
      animation-name: ripple;
      animation-duration: 1s;
    }
  `};
`;

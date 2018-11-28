import { css } from 'styled-components';
import { platform } from '../../helpers';

export default css`
  display: flex;
  ${platform === 'web' && css`min-height: 1px;`}  
  flex-direction: ${props => (props.inline ? `row;` : `column;`)};
`;

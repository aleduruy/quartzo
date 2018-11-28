import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';

export class TextStyled extends Component {
  render() {
    const { color, children, ...props } = this.props;

    return <TextUI colorText={color} {...props}>{children}</TextUI>;
  }
}

const TextUI = styled.span`${style}`;

export const Text = withTheme(TextStyled);

TextStyled.defaultProps = {
  color: 'default',
};

TextStyled.propTypes = {
  /** Define o conteúdo do Text. */
  children: PropTypes.any,
  /** Define a cor do Text. */
  color: PropTypes.string,
  /** Define se o Text terá peso maior. */
  strong: PropTypes.bool,
  /** Define se o Text ficará inclinado. */
  italic: PropTypes.bool,
  /** Define o tamanho do Text. */
  size: PropTypes.oneOfType([PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']), PropTypes.object]),
};

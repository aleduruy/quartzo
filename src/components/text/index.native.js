import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { Text as RNText } from 'react-native';
import style from './style';

class TextStyled extends Component {
  render() {
    const { color, children, ...props } = this.props;

    return <TextUI colorText={color} {...props}>{children}</TextUI>;
  }
}

const TextUI = styled(RNText)`${style}`;

export const Text = withTheme(TextStyled);

TextStyled.defaultProps = {
  color: 'default',
};

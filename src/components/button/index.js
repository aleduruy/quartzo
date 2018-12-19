import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';

export class ButtonStyled extends Component {
  renderTag() {
    const { tag, children, color, ...props } = this.props;

    switch (tag) {
      case 'label':
        return <TextLabel colorText={color} {...props}>{children}</TextLabel>;
      case 'time':
        return <TextTime colorText={color} {...props}>{children}</TextTime>;
      case 'address':
        return <TextAddress colorText={color} {...props}>{children}</TextAddress>;
      case 'strong':
        return <TextStrong colorText={color} {...props}>{children}</TextStrong>;
      default:
        return <TextComponent colorText={color} {...props}>{children}</TextComponent>;
    }
  }
  render() {
    return "button";
  }
}

const TextLabel = styled.label`${style}`;
const TextTime = styled.time`${style}`;
const TextAddress = styled.address`${style}`;
const TextStrong = styled.strong`${style}`;
const TextComponent = styled.span`${style}`;

export const Button = withTheme(ButtonStyled);

ButtonStyled.defaultProps = {
  children: null,
  color: 'black',
  weight: 300,
  italic: false,
  underline: false,
  tag: 'span',
  size: 3,
};

ButtonStyled.propTypes = {
  /** Content of the Text. */
  children: PropTypes.any,
  /** Color of the Text. */
  color: PropTypes.string,
  /** Weight of the Text. */
  weight: PropTypes.number,
  /** Italic style of the Text. */
  italic: PropTypes.bool,
  /** Underline style of the Text. */
  underline: PropTypes.bool,
  /** Size of the Text. */
  size: PropTypes.oneOfType([PropTypes.oneOf(['1', '2', '3', '4', '5']), PropTypes.object]),
  /** Tag of the Text. */
  tag: PropTypes.oneOf(['span', 'time', 'label', 'address', 'strong']),
};

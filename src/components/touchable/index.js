import React, { Component } from 'react';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';

export class Touchable extends Component {
  render() {
    const { onPress, href, ripple, ...props } = this.props;

    if (href) {
      return <TouchableA href={href} ripple={ripple} onClick={onPress} {...props} />;
    }

    return <TouchableDiv onClick={onPress} ripple={ripple} {...props} />;
  }
}

const TouchableA = styled.a`${style}`;
const TouchableDiv = styled.div`${style}`;

Touchable.defaultProps = {
  ripple: true,
};

Touchable.propTypes = {
  /** Define o conteúdo do Touchable. */
  children: PropTypes.any,
  /** Define se o Touchable terá ripple. */
  ripple: PropTypes.bool,
  /** Define um href para Touchable, para o caso de ser um link. */
  href: PropTypes.string,
  /** Define o onPress do Touchable. */
  onPress: PropTypes.func,
};

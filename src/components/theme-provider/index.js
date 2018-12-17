import React, { Component } from 'react';
import { ThemeProvider as ThemeProviderComponent, injectGlobal } from 'styled-components';
import { fontFamilyUrl } from '../../assets/styles/font-family';
import { View } from '../view';

export class ThemeProvider extends Component {
  renderReset() {
    return injectGlobal`
    @import url(${fontFamilyUrl});
    * {
      box-sizing: border-box;
    }
    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: antialiased;
    }`;
  }

  render() {
    const { children, theme } = this.props;

    return (
      <ThemeProviderComponent theme={theme}>
        <View>
          {this.renderReset()}
          {children}
        </View>
      </ThemeProviderComponent>
    );
  }
}

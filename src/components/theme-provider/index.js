import React, { Component } from 'react';
import { ThemeProvider as ThemeProviderComponent, injectGlobal } from 'styled-components';
import { View } from '../view';

export class ThemeProvider extends Component {
  renderReset() {
    return injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900|Pacifico');
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

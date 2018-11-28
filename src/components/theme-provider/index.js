import React, { Component } from 'react';
import { ThemeProvider as SCThemeProvider, injectGlobal } from 'styled-components';
import { View } from '../view';
import { color } from '../../helpers';

export class ThemeProvider extends Component {
  renderReset() {
    return injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Lato:300,700|Pacifico');
    * {
      box-sizing: border-box;
    }
    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: antialiased;
    }`;
  }

  render() {
    const { children } = this.props;
    const { brand } = this.props.theme;

    const theme = {
      ...this.props.theme,
      colors: {
        primary: color.primary[brand],
        secondary: color.secondary[brand],
      },
    };

    return (
      <SCThemeProvider theme={theme}>
        <View>
          {this.renderReset()}
          {children}
        </View>
      </SCThemeProvider>
    );
  }
}

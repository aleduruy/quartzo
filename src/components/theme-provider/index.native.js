import React, { Component } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { color } from '../../helpers';

export class ThemeProvider extends Component {
  render() {
    const { children } = this.props;
    const { brand } = this.props.theme;

    const theme = {
      brand,
      colors: {
        primary: color.primary[brand],
        secondary: color.secondary[brand],
      },
    };

    return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
  }
}

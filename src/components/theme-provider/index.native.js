import React, { Component } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

export class ThemeProvider extends Component {
  render() {
    const { children } = this.props;

    return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
  }
}

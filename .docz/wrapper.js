import React, { Component } from 'react';
import { ThemeProvider } from '../src/components/theme-provider';

export default class Wrapper extends Component {
  render() {
    const { children, ...props } = this.props;

    return <ThemeProvider theme={{brand: 'suba'}} {...props}>{children}</ThemeProvider>;
  }
}

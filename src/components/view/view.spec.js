import React from 'react';
import { View, ThemeProvider } from '..';
import { mount } from 'enzyme';

describe('View', () => {
  const rendered = mount(
    <ThemeProvider theme={{ name: 'light' }}>
      <View>View Component</View>
    </ThemeProvider>
  );

  it('should render a span tag', () => {
    expect(rendered.find('div').exists()).toBe(true);
  });
  it('should render a prop children', () => {
    expect(rendered.find(View).at(1).props().children).toBe('View Component');
  });
});

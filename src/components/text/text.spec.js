import React from 'react';
import { ThemeProvider } from '..';
import { TextStyled as Text } from '..';
import { mount } from 'enzyme';

describe('Text', () => {
  const rendered = mount(
    <ThemeProvider theme={{ name: 'light' }}>
      <Text>Text Component</Text>
    </ThemeProvider>
  );

  it('should render a span tag', () => {
    expect(rendered.find('span').exists()).toBe(true);
  });
  it('should render Text with content', () => {
    expect(rendered.find(Text).text()).toBe('Text Component');
  });
  it('should render a prop children', () => {
    expect(rendered.find(Text).props().children).toBe('Text Component');
  });
  it('should find prop color', () => {
    expect(rendered.find(Text).props().color).toBe('default');
  });
});

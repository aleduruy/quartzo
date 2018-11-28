import React from 'react';
import { ThemeProvider, Touchable } from '..';
import { mount } from 'enzyme';

const spy = jest.fn();

describe('Touchable', () => {
  const rendered = mount(
    <ThemeProvider theme={{ brand: 'acom' }}>
      <Touchable onPress={spy}>Touchable Component</Touchable>
    </ThemeProvider>
  );

  it('should render a div tag', () => {
    expect(rendered.find('div').exists()).toBe(true);
  });
  it('should render Touchable with content', () => {
    expect(rendered.find(Touchable).text()).toBe('Touchable Component');
  });
  it('should render a prop children', () => {
    expect(rendered.find(Touchable).props().children).toBe('Touchable Component');
  });
  it('should trigger onPress function', () => {
    rendered.find(Touchable).simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});

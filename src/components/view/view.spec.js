import React from 'react';
import { View, ThemeProvider } from '..';
import { mount } from 'enzyme';

describe('View', () => {
  const rendered = mount(
    <ThemeProvider theme={{ brand: 'acom' }}>
      <View>View Component</View>
    </ThemeProvider>
  );
  const article = mount(
    <ThemeProvider theme={{ brand: 'acom' }}>
      <View tag="article">Article Component</View>
    </ThemeProvider>
  );
  const section = mount(
    <ThemeProvider theme={{ brand: 'acom' }}>
      <View tag="section">Section Component</View>
    </ThemeProvider>
  );
  const form = mount(
    <ThemeProvider theme={{ brand: 'acom' }}>
      <View tag="form">Form Component</View>
    </ThemeProvider>
  );
  const time = mount(
    <ThemeProvider theme={{ brand: 'acom' }}>
      <View tag="time">Time Component</View>
    </ThemeProvider>
  );
  const address = mount(
    <ThemeProvider theme={{ brand: 'acom' }}>
      <View tag="address">Address Component</View>
    </ThemeProvider>
  );

  it('should render a div tag', () => {
    expect(rendered.find('div').exists()).toBe(true);
  });
  it('should render View with content', () => {
    expect(rendered.find(View).at(1).text()).toBe('View Component');
  });
  it('should render a article tag', () => {
    expect(article.find('article').exists()).toBe(true);
  });
  it('should render Article with content', () => {
    expect(article.find(View).at(1).text()).toBe('Article Component');
  });
  it('should render a section tag', () => {
    expect(section.find('section').exists()).toBe(true);
  });
  it('should render Section with content', () => {
    expect(section.find(View).at(1).text()).toBe('Section Component');
  });
  it('should render a Form tag', () => {
    expect(form.find('form').exists()).toBe(true);
  });
  it('should render Form with content', () => {
    expect(form.find(View).at(1).text()).toBe('Form Component');
  });
  it('should render a Time tag', () => {
    expect(time.find('time').exists()).toBe(true);
  });
  it('should render Time with content', () => {
    expect(time.find(View).at(1).text()).toBe('Time Component');
  });
  it('should render a Address tag', () => {
    expect(address.find('address').exists()).toBe(true);
  });
  it('should render Address with content', () => {
    expect(address.find(View).at(1).text()).toBe('Address Component');
  });
  it('should render a prop children', () => {
    expect(rendered.find(View).at(1).props().children).toBe('View Component');
  });
});

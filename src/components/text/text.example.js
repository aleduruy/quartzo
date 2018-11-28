import React from 'react';
import { Grid, Wrapper, Title, Spacing, Text } from '..';

export default () => {
  function renderText() {
    return (
      <Spacing marginBottom="lg">
        <Text>Este é um Texto com a cor e tamanho padrão.</Text>
      </Spacing>
    );
  }

  function renderTextColor() {
    return (
      <Spacing marginBottom="lg">
        {text.color.map((item, index) => {
          return <Text color={item} key={`color-${index - 1}`}>Text Component - Color {item}</Text>;
        })}
      </Spacing>
    );
  }

  function renderTextSize() {
    return (
      <Spacing marginBottom="lg">
        {text.size.map((item, index) => {
          return <Text size={item} key={`size-${index - 1}`}>Text Component - Tamanho {item}</Text>;
        })}
      </Spacing>
    );
  }

  function renderTextStrong() {
    return (
      <Spacing marginBottom="lg">
        <Text strong={false}>Text Component Normal</Text>
        <Text strong={true}>Text Component Strong</Text>
      </Spacing>
    );
  }

  function renderTextItalic() {
    return (
      <Spacing marginBottom="lg">
        <Text italic={false}>Text Component Normal</Text>
        <Text italic={true}>Text Component Italic</Text>
      </Spacing>
    );
  }

  return (
    <Grid background={true} spacing="sm">
      <Wrapper>
        <Title>Default</Title>
        {renderText()}
        <Title>Strong</Title>
        {renderTextStrong()}
        <Title>Italic</Title>
        {renderTextItalic()}
        <Title>Color</Title>
        {renderTextColor()}
        <Title>Size</Title>
        {renderTextSize()}
      </Wrapper>
    </Grid>
  );
};

const text = {
  color: ['light', 'medium', 'dark', 'darker', 'primary'],
  size: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
};

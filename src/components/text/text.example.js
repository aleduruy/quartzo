import React from 'react';
import { View, Text } from '..';

export default () => {
  function renderText() {
    return (
      <Text>I'm a Text example.</Text>
    );
  }

  return (
    <View>
      {renderText()}
    </View>
  );
};


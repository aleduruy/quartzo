import React from 'react';
import { Grid, Wrapper, View, Text } from '..';

export default () => {
  function renderText() {
    return (
      <View tag="section">
        <Text>Exemplo de View Component</Text>
      </View>
    );
  }

  return (
    <Grid background={true} spacing="sm">
      <Wrapper>
        {renderText()}
      </Wrapper>
    </Grid>
  );
};

import React from 'react';
import { Grid, Touchable, Box, Text, Wrapper } from '..';

export default () => {
  function renderTouchable() {
    return (
      <Touchable ripple={false} onPress={() => alert('Ação ao clicar!')}>
        <Box variant="bordered"><Text>Clique aqui para ver o touchable</Text></Box>
      </Touchable>
    );
  }

  return (
    <Grid background={true} spacing="sm">
      <Wrapper>
        {renderTouchable()}
      </Wrapper>
    </Grid>
  );
};

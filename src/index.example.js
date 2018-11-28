import React from 'react';
import { Col, Text, Title, Grid } from '..';

export default () => {
  return (
    <Grid background={true} spacing="sm">
      <Col spacingBottom="sm">
        <Title>Sobre o Cross Theme.next</Title>
        <Text>
          Cross Theme.next é um framework responsivo e cross-plataforma que oferece os componentes utilizados pelos sites da Americanas, Submarino e Shoptime. Seu principal objetivo é fornecer um código unificado tanto para native quanto para web, prezando sempre pela performace e padronização visual de cada marca.
        </Text>
      </Col>
      <Col spacingBottom="sm"><Text>Estes são alguns de seus princípios:</Text></Col>
      <Col spacingBottom="sm">
        <Text strong={true}>Reutilização:</Text>
        <Text>Permite que o mesmo componente seja reutilizado tanto em Web quanto Native.</Text>
      </Col>
      <Col spacingBottom="sm">
        <Text strong={true}>Performance:</Text>
        <Text>Oferece componentes leves e performáticos, com opção de lazy load.</Text>
      </Col>
      <Col spacingBottom="sm">
        <Text strong={true}>Padronizacão:</Text>
        <Text>Garante o padrão visual das marcas, pois possui componentes de acordo com seus StyleGuides.</Text>
      </Col>
      <Col spacingBottom="sm">
        <Text strong={true}>Acessibilidade:</Text>
        <Text>Componentes Web feitos pensando na acessibilidade das aplicações.</Text>
      </Col>
      <Col spacingBottom="sm">
        <Text strong={true}>Modularização:</Text>
        <Text>Permite ao desenvolvedor importar apenas os componentes que vai de fato usar.</Text>
      </Col>
    </Grid>
  );
};

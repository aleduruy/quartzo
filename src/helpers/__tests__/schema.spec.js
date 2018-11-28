import { productSchema } from '../../helpers';

describe('Product Schema', () => {
  let props = {
    seller: 'seller',
    name: 'name',
    image: 'image',
    url: 'url',
    ratingAverage: 'ratingAverage',
    ratingQuantity: 'ratingQuantity',
    price: 'price',
    conditions: 'conditions',
    inStock: true,
  };
  const schema = productSchema(props);
  it('testing the schema output', () => {
    expect(schema).toContain(
      '{"@context":"https://www.schema.org","@type":"product","brand":"seller","name":"name","image":"image","url":"url","aggregateRating":{"@type":"aggregateRating","ratingValue":"ratingAverage","reviewCount":"ratingQuantity"},"offers":{"@type":"Offer","priceCurrency":"BRL","price":"price","itemCondition":"https://schema.org/NewCondition","availability":"https://schema.org/InStock","seller":{"@type":"Organization","name":"seller"}}}'
    );
  });
});

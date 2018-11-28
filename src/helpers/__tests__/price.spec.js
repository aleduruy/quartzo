import { formatFloat, formatInt, formatMoney } from '../../helpers';

describe('MatchMedia', () => {
  it('testing formatFloat function', () => {
    expect(formatFloat(9999.9999)).toBe('10.000,00');
    expect(formatFloat('xyz')).toBe('0,00');
  });
  it('testing formatInt function', () => {
    expect(formatInt(9999.9999)).toBe('10.000');
  });
  it('testing formatMoney function', () => {
    expect(formatMoney(9999.9999)).toBe('R$ 10.000,00');
  });
});

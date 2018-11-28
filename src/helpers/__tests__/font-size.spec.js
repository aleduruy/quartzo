import { fontSize, getfontSize } from '../../helpers';

describe('getFontSize', () => {
  it('testing getFontSize xxs', () => {
    expect(getfontSize('acom', 'xxs')).toBe(fontSize.xxs.acom);
  });
  it('testing getFontSize xs', () => {
    expect(getfontSize('acom', 'xs')).toBe(fontSize.xs.acom);
  });
  it('testing getFontSize sm', () => {
    expect(getfontSize('acom', 'sm')).toBe(fontSize.sm.acom);
  });
  it('testing getFontSize md', () => {
    expect(getfontSize('acom', 'md')).toBe(fontSize.md.acom);
  });
  it('testing getFontSize lg', () => {
    expect(getfontSize('acom', 'lg')).toBe(fontSize.lg.acom);
  });
  it('testing getFontSize xl', () => {
    expect(getfontSize('acom', 'xl')).toBe(fontSize.xl.acom);
  });
  it('testing getFontSize xxl', () => {
    expect(getfontSize('acom', 'xxl')).toBe(fontSize.xxl.acom);
  });
  it('testing MatchMedia default value', () => {
    expect(getfontSize('acom', 'xyz')).toBe(fontSize.sm.acom);
  });
});

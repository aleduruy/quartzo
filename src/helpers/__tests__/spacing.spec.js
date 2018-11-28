import { spacing, getSpacing } from '../../helpers';

describe('getSpacing', () => {
  it('testing getSpacing xxs', () => {
    expect(getSpacing('acom', 'xxs')).toBe(spacing.xxs.acom);
  });
  it('testing getSpacing xs', () => {
    expect(getSpacing('acom', 'xs')).toBe(spacing.xs.acom);
  });
  it('testing getSpacing sm', () => {
    expect(getSpacing('acom', 'sm')).toBe(spacing.sm.acom);
  });
  it('testing getSpacing md', () => {
    expect(getSpacing('acom', 'md')).toBe(spacing.md.acom);
  });
  it('testing getSpacing lg', () => {
    expect(getSpacing('acom', 'lg')).toBe(spacing.lg.acom);
  });
  it('testing getSpacing xl', () => {
    expect(getSpacing('acom', 'xl')).toBe(spacing.xl.acom);
  });
  it('testing getSpacing xxl', () => {
    expect(getSpacing('acom', 'xxl')).toBe(spacing.xxl.acom);
  });
  it('testing MatchMedia default value', () => {
    expect(getSpacing('acom', 'xyz')).toBe(spacing.sm.acom);
  });
});

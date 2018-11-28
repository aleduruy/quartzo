import { medias, getMedia } from '../../helpers';

describe('MatchMedia', () => {
  it('testing MatchMedia function xxs', () => {
    expect(getMedia('xxs')).toBe(medias.xxs);
  });
  it('testing MatchMedia function xs', () => {
    expect(getMedia('xs')).toBe(medias.xs);
  });
  it('testing MatchMedia function sm', () => {
    expect(getMedia('sm')).toBe(medias.sm);
  });
  it('testing MatchMedia function md', () => {
    expect(getMedia('md')).toBe(medias.md);
  });
  it('testing MatchMedia function lg', () => {
    expect(getMedia('lg')).toBe(medias.lg);
  });
  it('testing MatchMedia function xl', () => {
    expect(getMedia('xl')).toBe(medias.xl);
  });
  it('testing MatchMedia default value', () => {
    expect(getMedia('xyz')).toBe(medias.sm);
  });
});

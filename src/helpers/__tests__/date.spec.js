import { formatDate } from '../../helpers';

describe('Date', () => {
  it('testing formatDate function', () => {
    expect(formatDate('01-01-2018')).toBe('01/01/2018');
  });
});

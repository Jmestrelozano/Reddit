import {
  convertFormatEpochToLocal,
  timeSince,
} from '../../../src/presentation/utils/convertFormatEpochToLocal';

describe('test in timeSince', () => {
  it('should be appear a text say "X years ago" ', () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 2);
    const result = timeSince(date);

    expect(result).toContain('years');
  });
  it('should be appear a text say "X months ago" ', () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 2);
    const result = timeSince(date);

    expect(result).toContain('months');
  });
  it('should be appear a text say "X day ago" ', () => {
    const date = new Date();
    date.setDate(date.getDate() - 2);
    const result = timeSince(date);

    expect(result).toContain('day');
  });
  it('should be appear a text say "X hours ago" ', () => {
    const date = new Date();
    date.setHours(date.getHours() - 2);
    const result = timeSince(date);

    expect(result).toContain('hours');
  });

  it('should be appear a text say "X minutes ago" ', () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 2);
    const result = timeSince(date);

    expect(result).toContain('minute');
  });

  it('should be appear a text say "X seconds ago" ', () => {
    const date = new Date();

    const result = timeSince(date);

    expect(result).toContain('seconds');
  });
});

describe('test in convertFormatEpochToLocal', () => {
  it('should come a chain ', () => {
    const result = convertFormatEpochToLocal(1671085924.0);
    expect(typeof result === 'string').toBeTruthy();
  });
});

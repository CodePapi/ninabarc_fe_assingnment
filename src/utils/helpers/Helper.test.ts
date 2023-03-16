import { truncate } from './index';

describe('truncate', () => {
  it('should return truncated string', () => {
    expect(truncate('test', 2)).toEqual('t...');
  });

  it('should return string', () => {
    expect(truncate('test', 5)).toEqual('test');
  });
});

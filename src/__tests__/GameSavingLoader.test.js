import GameSavingLoader from '../GameSavingLoader';

describe('GameSavingLoader class', () => {
  it('should return correct data', async () => {
    const result = await GameSavingLoader.load();
    expect(result).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  });
});

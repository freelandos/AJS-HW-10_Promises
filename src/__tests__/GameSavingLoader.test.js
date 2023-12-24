import GameSavingLoader from '../GameSavingLoader.js';

describe('GameSavingLoader class', () => {
  it('should return correct data', async () => {
    const result = await GameSavingLoader.load();
    const expected = {
      id: 9,
      created: 1546300800,
      userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 }
    }
    expect(result).toEqual(expected);
  });
});

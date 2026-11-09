// <-- ИСПРАВЛЕНО: импортируем из index.js, чтобы Jest засчитал его покрытие
import { GameSavingLoader, GameSaving } from '../index.js';

describe('GameSavingLoader', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should load and parse game saving correctly', async () => {
    const loadPromise = GameSavingLoader.load();

    await jest.advanceTimersByTimeAsync(1000); 
    await jest.advanceTimersByTimeAsync(500);  

    const saving = await loadPromise;

    expect(saving).toBeInstanceOf(GameSaving);
    expect(saving.id).toBe(9);
    expect(saving.created).toBe(1546300800);
    expect(saving.userInfo).toEqual({
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    });
  });
});
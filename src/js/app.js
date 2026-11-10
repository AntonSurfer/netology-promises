import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load().then(
  (saving) => {
    console.log('Сохранение загружено:', saving);
  },
  (error) => {
    console.error('Ошибка при загрузке:', error);
  },
);
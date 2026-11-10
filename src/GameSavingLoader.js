import read from './reader.js';
import json from './parser.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((buffer) => json(buffer))
      .then((stringData) => JSON.parse(stringData))
      .then((data) => new GameSaving(data));
  }
}
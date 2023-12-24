import read from './reader.js';
import json from './parser.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data1) => json(data1))
      .then((data2) => {
        const data3 = JSON.parse(data2);
        return new GameSaving(data3);
      })
      .catch((error) => error);
  }
}

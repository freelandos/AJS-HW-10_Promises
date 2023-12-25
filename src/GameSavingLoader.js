import read from './reader.js';
import json from './parser.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((value) => JSON.parse(value))
      .then(({ id, created, userInfo }) => new GameSaving(id, created, userInfo))
  }
}

import { DICT } from '@src/model/dict';
import { Wordle } from '@src/model/wordle';
import { DEFAULT_MAX_TRIES, DEFAULT_WORD_LENGTH } from '@src/utils/constants';
import { Singleton } from '@src/utils/singleton';
import { genUUID4 } from '@src/utils/UUID';

export class Game extends Singleton<Game>() {
  private games = new Map<string, Wordle>();

  constructor() {
    super();
  }

  createGame(): string {
    const id = genUUID4();
    const dict = DICT;
    const answer = dict[Math.floor(Math.random() * dict.length)];
    const wordle = new Wordle({
      length: DEFAULT_WORD_LENGTH,
      answer,
      dict,
      maxTries: DEFAULT_MAX_TRIES,
    });
    this.games.set(id, wordle);
    return id;
  }

  getGame(id: string): Wordle | undefined {
    return this.games.get(id);
  }

  destroyGame(id: string): void {
    this.games.delete(id);
  }
}

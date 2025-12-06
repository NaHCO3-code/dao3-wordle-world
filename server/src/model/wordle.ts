import type { Result } from '@src/utils/constants';
import { alphabet, CHAR_STATUS, CHECK_ERROR } from '@src/utils/constants';

export class Wordle {
  readonly length: number;
  private answer: string;
  readonly dict: string[];
  readonly maxTries: number;
  readonly history: string[];
  readonly charStatus: { [char: string]: CHAR_STATUS };

  constructor(config: {
    length: number;
    answer: string;
    dict: string[];
    maxTries: number;
  }) {
    this.length = config.length;
    this.answer = config.answer;
    this.dict = config.dict;
    this.maxTries = config.maxTries;
    this.history = [];
    this.charStatus = alphabet.split('').reduce(
      (acc, char) => {
        acc[char] = CHAR_STATUS.UNKNOWN;
        return acc;
      },
      {} as { [char: string]: CHAR_STATUS }
    );
  }

  setCharStatus(char: string, status: CHAR_STATUS): CHAR_STATUS {
    this.charStatus[char] = Math.min(status, this.charStatus[char]);
    return this.charStatus[char];
  }

  check(word: string): Result<CHAR_STATUS[], CHECK_ERROR> {
    if (word.length !== this.length) {
      return CHECK_ERROR.INVAILD_LENGTH;
    }
    if (this.history.length >= this.maxTries) {
      return CHECK_ERROR.MAX_TRIES_EXCEEDED;
    }
    if (!this.dict.includes(word)) {
      return CHECK_ERROR.INVALID_WORD;
    }
    this.history.push(word);
    return word.split('').map((char, index) => {
      if (char === this.answer[index]) {
        return this.setCharStatus(char, CHAR_STATUS.CORRECT);
      } else if (this.answer.includes(char)) {
        return this.setCharStatus(char, CHAR_STATUS.MISPLACED);
      } else {
        return this.setCharStatus(char, CHAR_STATUS.ABSENT);
      }
    });
  }
}

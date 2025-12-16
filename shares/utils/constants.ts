/* type utils */
export type Result<Ok, ERR> = Ok | ERR;

/* default settings */
export const DEFAULT_WORD_LENGTH = 5;
export const DEFAULT_MAX_TRIES = 6;

/* status */
export enum CHAR_STATUS {
  CORRECT = 0,
  MISPLACED = 1,
  ABSENT = 2,
  UNKNOWN = 3,
}
export enum CHECK_ERROR {
  INVAILD_LENGTH,
  INVALID_WORD,
  MAX_TRIES_EXCEEDED,
}

/* literals */
export const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

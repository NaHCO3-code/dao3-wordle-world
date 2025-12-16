/* server to client  */

import type { CHAR_STATUS } from './utils/constants';

export const ClientEvent = {
  inputLetter: 'I.keyDown',
  inputEnter: 'I.enter',
} as const;
export type ClientEventType = {
  [ClientEvent.inputLetter]: {
    currentInput: string;
  };
  [ClientEvent.inputEnter]: {
    history: string[];
    historyStatus: CHAR_STATUS[][];
    charStatus: { [char: string]: CHAR_STATUS };
  };
};

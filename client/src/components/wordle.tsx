import { Box } from '../xylem/basic';
import type { xignal } from '../xylem/xignal';
import { xcomputed, xreactive, xref } from '../xylem/xignal';
import { xComponent } from '../xylem/xylem';
import {
  ColorCreate,
  Coord2AddPosition,
  Coord2AddScale,
  Coord2Create,
  Vec2Add,
  Vec2Create,
} from '../utils/math';
import { grid } from '../utils/display';
import { ALPHABET, CHAR_STATUS } from '@shares/utils/constants';
import { DataChannel } from '../manager/datachannel';
import { ClientEvent } from '@shares/clientEvent';
import { Rich } from '@dao3fun/arena-rich';
import { computed } from '@dao3fun/mine-motion';
import { Word } from './word';

export function Wordle() {
  const history = xreactive(new Array(6).fill(''));
  const historyStatus = xreactive(
    new Array(6)
      .fill(0)
      .map<
        xignal<CHAR_STATUS>[]
      >(() => xreactive(new Array(5).fill(CHAR_STATUS.UNKNOWN)))
  );
  const currentId = xref(0);

  const charStatus = xreactive(
    ALPHABET.split('').reduce(
      (acc, char) => {
        acc[char] = CHAR_STATUS.UNKNOWN;
        return acc;
      },
      {} as { [char: string]: CHAR_STATUS }
    )
  );

  DataChannel.instance.listenEvent(ClientEvent.inputLetter, (data) => {
    history[currentId.value] = data.currentInput.padEnd(5, ' ');
  });
  DataChannel.instance.listenEvent(ClientEvent.inputEnter, (data) => {
    Object.keys(data.charStatus).forEach((char) => {
      charStatus[char] = data.charStatus[char];
    });
    data.history.forEach((w, i) => {
      history[i] = w.toUpperCase();
    });
    data.historyStatus.forEach((statuses, i) => {
      // historyStatus[i] = statuses;
      statuses.forEach((status, j) => {
        historyStatus[i][j] = status;
      });
    });
    currentId.value += 1;
  });
  return (
    <Box
      backgroundOpacity={xref(1)}
      position={Coord2Create({ x: 0.5, y: 0.5 }, { x: 0, y: 0 })}
      anchor={Vec2Create(0.5, 0.5)}
      size={Coord2Create({ x: 0, y: 0 }, { x: 500, y: 600 })}
    >
      {...history.map((_, index) => {
        const { size: sy, position: py } = grid(1, 1 / 60, 1 / 60, 6, index);
        return (
          <Word
            word={xcomputed(() => history[index])}
            wordStatus={historyStatus[index]}
            id={xref(index)}
            position={Coord2Create({ x: 0, y: py }, { x: 0, y: 0 })}
            size={Coord2Create({ x: 1, y: sy }, { x: 0, y: 0 })}
          ></Word>
        );
      })}
    </Box>
  );
}

import { CHAR_STATUS } from '@shares/utils/constants';
import { Char } from './char';
import { grid } from '../utils/display';
import { ColorFromHex, Coord2Create } from '../utils/math';
import { Box } from '../xylem/basic';
import { type xRef, type xignal, xcomputed, xref } from '../xylem/xignal';
import { xComponent } from '../xylem/xylem';

export function Word(props: {
  word: xRef<string>;
  wordStatus: xignal<CHAR_STATUS[]>;
  id: xRef<number>;
  position: xignal<Coord2>;
  size: xignal<Coord2>;
}) {
  const chars = xcomputed(() => props.word.value.padEnd(5, ' ').split(''));
  return (
    <Box
      backgroundOpacity={xref(0)}
      backgroundColor={ColorFromHex(0x003300)}
      size={props.size}
      position={props.position}
    >
      {...chars.value.map((_, index) => {
        const { size: sx, position: px } = grid(1, 1 / 50, 1 / 50, 5, index);
        return (
          <Char
            char={xcomputed(() => chars.value[index])}
            status={xcomputed(
              () => props.wordStatus[index] ?? CHAR_STATUS.UNKNOWN
            )}
            id={xref(index)}
            position={Coord2Create({ x: px, y: 0 }, { x: 0, y: 0 })}
            size={Coord2Create({ x: sx, y: 1 }, { x: 0, y: 0 })}
          ></Char>
        );
      })}
    </Box>
  );
}

import { ColorFromHex } from './utils/math';
import { xreactive, xref, xwatch } from './xylem/xignal';

const LIGHT_COLOR = {
  BG: 0xf0f0f0,
  TEXT: 0xf0f0f0,
  CORRECT: 0x79b851,
  MISPLACED: 0xf3c237,
  ABSENT: 0x999999,
  UNKNOWN: 0xcccccc,
};

const DARK_COLOR = {
  BG: 0x0f0f0f,
  TEXT: 0xf0f0f0,
  CORRECT: 0x79b851,
  MISPLACED: 0xf3c237,
  ABSENT: 0x999999,
  UNKNOWN: 0xcccccc,
};

export const LIGHT_MODE = xref(true);

export const BG_COLOR = xreactive(ColorFromHex(LIGHT_COLOR.BG));
export const TEXT_COLOR = xreactive(ColorFromHex(LIGHT_COLOR.TEXT));
export const TEXT_COLOR_UNKNOWN = xreactive(ColorFromHex(LIGHT_COLOR.UNKNOWN));
export const TEXT_COLOR_MISPLACED = xreactive(
  ColorFromHex(LIGHT_COLOR.MISPLACED)
);
export const TEXT_COLOR_ABSENT = xreactive(ColorFromHex(LIGHT_COLOR.ABSENT));
export const TEXT_COLOR_CORRECT = xreactive(ColorFromHex(LIGHT_COLOR.CORRECT));

xwatch(
  () => LIGHT_MODE.value,
  (isLight) => {
    if (isLight) {
      BG_COLOR.copy(ColorFromHex(LIGHT_COLOR.BG));
      TEXT_COLOR.copy(ColorFromHex(LIGHT_COLOR.TEXT));
      TEXT_COLOR_UNKNOWN.copy(ColorFromHex(LIGHT_COLOR.UNKNOWN));
      TEXT_COLOR_MISPLACED.copy(ColorFromHex(LIGHT_COLOR.MISPLACED));
      TEXT_COLOR_ABSENT.copy(ColorFromHex(LIGHT_COLOR.ABSENT));
      TEXT_COLOR_CORRECT.copy(ColorFromHex(LIGHT_COLOR.CORRECT));
    } else {
      BG_COLOR.copy(ColorFromHex(DARK_COLOR.BG));
      TEXT_COLOR.copy(ColorFromHex(DARK_COLOR.TEXT));
      TEXT_COLOR_UNKNOWN.copy(ColorFromHex(DARK_COLOR.UNKNOWN));
      TEXT_COLOR_MISPLACED.copy(ColorFromHex(DARK_COLOR.MISPLACED));
      TEXT_COLOR_ABSENT.copy(ColorFromHex(DARK_COLOR.ABSENT));
      TEXT_COLOR_CORRECT.copy(ColorFromHex(DARK_COLOR.CORRECT));
    }
  }
);

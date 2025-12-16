import { CHAR_STATUS } from '@shares/utils/constants';
import {
  TEXT_COLOR_ABSENT,
  TEXT_COLOR_CORRECT,
  TEXT_COLOR_MISPLACED,
  TEXT_COLOR_UNKNOWN,
} from '@src/states';

export function statusColor(status: CHAR_STATUS) {
  switch (status) {
    case CHAR_STATUS.CORRECT:
      return TEXT_COLOR_CORRECT;
    case CHAR_STATUS.MISPLACED:
      return TEXT_COLOR_MISPLACED;
    case CHAR_STATUS.ABSENT:
      return TEXT_COLOR_ABSENT;
    default:
      return TEXT_COLOR_UNKNOWN;
  }
}

import { DEFAULT_WORD_LENGTH } from '@src/utils/constants';
import dict from '../assets/dict.json';

export const DICT5 = dict.filter((word) => word.length === DEFAULT_WORD_LENGTH);

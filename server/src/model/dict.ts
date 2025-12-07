import { DEFAULT_WORD_LENGTH } from '@shares/utils/constants';
import dict from '../assets/dict.json';

export const DICT = dict.filter((word) => word.length === DEFAULT_WORD_LENGTH);

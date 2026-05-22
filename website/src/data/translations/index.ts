import ar from './ar';
import he from './he';
import en from './en';
import type { Language, TranslationSet } from '../../types';

const translations: Record<Language, TranslationSet> = { ar, he, en };

export default translations;

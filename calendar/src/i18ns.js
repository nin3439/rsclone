import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationRU from './locales/translationRU.json';
import translationEN from './locales/translationEN.json';
import translationPT from './locales/translationPT.json';
import translationDE from './locales/translationDE.json';
import translationIT from './locales/translationIT.json';
const resources = {
  de: {
    translation: translationDE,
  },

  pt: {
    translation: translationPT,
  },

  ru: {
    translation: translationRU,
  },
  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});
export default i18n;

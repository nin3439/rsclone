import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationRU from './locales/ru/translationRU.json';
import translationEN from './locales/en/translationEN.json';
import translationPT from './locales/pt/translationPT.json';

const resources = {
  en: {
    translation: translationEN,
  },

  pt: {
    translation: translationPT,
  },

  ru: {
    translation: translationRU,
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});
export default i18n;

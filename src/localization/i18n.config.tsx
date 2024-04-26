import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en, ar, fr, esp} from './translations/index';

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
  fr: {
    translation: fr,
  },
  esp: {
    translation: esp,
  },
};

i18next.use(initReactI18next).init({
  debug: true,
  lng: 'en',
  compatibilityJSON: 'v3',
  FallbackLng: 'en',
  resources,
});
export default i18next;

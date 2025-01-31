import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { welcome: 'Welcome' } },
    ru: { translation: { welcome: 'Добро пожаловать' } },
    uz: { translation: { welcome: 'Xush kelibsiz' } },
  },
  lng: 'ru', // Default language
  fallbackLng: 'ru',
  interpolation: { escapeValue: false },
});

export default i18n;
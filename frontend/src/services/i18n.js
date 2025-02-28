// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from '../locales/en.json';
import translationDE from '../locales/de.json';

// Set up translations
const resources = {
  en: {
    title: 'English',
    translation: translationEN,
  },
  de: {
    title: 'Deutsch',
    translation: translationDE,
  },
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    keySeparator: false, // We do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export { i18n, resources };

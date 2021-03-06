import { initReactI18next } from 'react-i18next';
import i18next, { InitOptions, Resource } from 'i18next';
import ptBR from '../locales/pt-BR.json';

const availableLanguages = ['pt-BR'];

const translationOptions: InitOptions = {
  lng: 'pt-BR',
  load: 'currentOnly',
  compatibilityJSON: 'v3',
  preload: availableLanguages,
  debug: false,
  supportedLngs: availableLanguages,
  fallbackLng: 'pt-BR',
  react: {
    useSuspense: true,
  },
  interpolation: {
    escapeValue: false,
  },
  resources: {
    'pt-BR': ptBR as Resource,
  },
};

export default i18next.use(initReactI18next).init(translationOptions);

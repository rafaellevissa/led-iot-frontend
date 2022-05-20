import { useTranslation as i18NextUseTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

type AvailableLanguages = 'pt-BR';

interface Translation<T> {
  translate: T;
  language: AvailableLanguages;
  updateLanguage: (language: AvailableLanguages) => void;
}

export const useTranslation = (
  namespace?: string | string[],
): Translation<TFunction> => {
  const {
    t,
    i18n: { language, changeLanguage },
  } = i18NextUseTranslation(namespace);

  const translate = (text: string | string[], options?: any): string =>
    t(text, options);

  const updateLanguage = (newLanguage: AvailableLanguages): void => {
    changeLanguage(newLanguage);
  };

  return {
    translate,
    language: language as AvailableLanguages,
    updateLanguage,
  };
};

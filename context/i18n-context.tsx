import { ReactNode, createContext, useContext, useState } from 'react';
import * as Localization from 'expo-localization';
import { en, de } from '@/lib/localizations';
import { I18n } from 'i18n-js';

interface TranslationContext {
  language: string;
  selectLanguage: () => void;
  i18n: I18n;
}

export const TranslationContext = createContext<TranslationContext>({
  language: '',
  selectLanguage: () => {},
  i18n: new I18n({ en, de }),
});

export const useTranslation = () => {
  const { language, selectLanguage, i18n } = useContext(TranslationContext);

  const t = (s: string) => i18n.t(`${s}`);

  return { language, selectLanguage, t };
};

export const TranslationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  let [locale, setLocale] = useState(Localization.locale);

  const selectLanguage = () => {
    setLocale(locale === 'en' ? 'de' : 'en');
  };

  const i18n = new I18n({ en, de });
  i18n.locale = locale;
  i18n.enableFallback = true;
  i18n.defaultLocale = 'en';

  const value = {
    language: locale,
    selectLanguage: selectLanguage,
    i18n: i18n,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

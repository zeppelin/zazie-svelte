import i18n from 'sveltekit-i18n';
import lang from './lang.json';

const config = ({
  fallbackLocale: 'hu',
  translations: {
    en: { lang },
    hu: { lang },
  },
  loaders: [
    {
      locale: 'en',
      key: 'common',
      loader: async () => (await import('./en.json')).default,
    },
    {
      locale: 'hu',
      key: 'common',
      loader: async () => (await import('./hu.json')).default,
    },
    {
      locale: 'en',
      key: 'index',
      loader: async () => (await import('./index.en.json')).default,
    },
    {
      locale: 'hu',
      key: 'index',
      loader: async () => (await import('./index.hu.json')).default,
    },
  ],
});

export const { t, locale, locales, loading, loadTranslations, setLocale } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));

import { locale, loadTranslations } from '$lib/translations';

export const load = async ({ url }: { url: URL }) => {
  const { pathname } = url;

  const defaultLocale = 'hu'; // get from cookie, user session, ...
  const initLocale = locale.get() || defaultLocale;

  await loadTranslations(initLocale, pathname);

  return {};
}

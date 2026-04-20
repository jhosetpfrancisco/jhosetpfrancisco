import commonEs from './common.es.json';
import commonEn from './common.en.json';
import homeEs from './home.es.json';
import homeEn from './home.en.json';
import projectsEs from './projects.es.json';
import projectsEn from './projects.en.json';

type Bundle = Record<string, unknown>;

export const TRANSLATIONS: Record<'es' | 'en', Bundle> = {
  es: {
    ...(commonEs as Bundle),
    ...(homeEs as Bundle),
    ...(projectsEs as Bundle),
  },
  en: {
    ...(commonEn as Bundle),
    ...(homeEn as Bundle),
    ...(projectsEn as Bundle),
  },
};

import {
  ApplicationConfig,
  inject,
  isDevMode,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import {
  provideTransloco,
  TRANSLOCO_LOADER,
  TranslocoService,
} from '@jsverse/transloco';
import { LucideIconsModule } from './icon.config';
import { TranslocoHttpLoader } from './core/i18n/transloco-http.loader';
import { TRANSLATIONS } from './core/i18n/translations';
import { LocaleService } from './core/i18n/locale.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      appRoutes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      })
    ),
    importProvidersFrom(LucideIconsModule),
    provideTransloco({
      config: {
        availableLangs: ['es', 'en'],
        defaultLang: 'en',
        fallbackLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
    }),
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
    provideAppInitializer(() => {
      const transloco = inject(TranslocoService);
      const locale = inject(LocaleService);
      for (const [lang, translation] of Object.entries(TRANSLATIONS)) {
        transloco.setTranslation(translation, lang, { merge: false });
      }
      locale.set(locale.detectInitial());
    }),
  ],
};

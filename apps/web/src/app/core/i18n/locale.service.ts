import { Injectable, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { TranslocoService } from '@jsverse/transloco';

export type AppLocale = 'es' | 'en';

const STORAGE_KEY = 'jf.locale';
const SUPPORTED: readonly AppLocale[] = ['es', 'en'] as const;

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private transloco = inject(TranslocoService);
  private platformId = inject(PLATFORM_ID);
  private doc = inject(DOCUMENT);

  readonly locale = signal<AppLocale>('en');

  set(locale: AppLocale): void {
    if (!this.isSupported(locale)) return;
    if (this.locale() === locale && this.transloco.getActiveLang() === locale) return;

    this.transloco.setActiveLang(locale);
    this.doc.documentElement.setAttribute('lang', locale);
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem(STORAGE_KEY, locale);
      } catch {
        // localStorage unavailable — ignore
      }
    }
    this.locale.set(locale);
  }

  toggle(): void {
    this.set(this.locale() === 'es' ? 'en' : 'es');
  }

  detectInitial(): AppLocale {
    if (!isPlatformBrowser(this.platformId)) return 'en';

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && this.isSupported(stored)) return stored as AppLocale;
    } catch {
      // ignore
    }

    return 'en';
  }

  private isSupported(v: string): v is AppLocale {
    return (SUPPORTED as readonly string[]).includes(v);
  }
}

import { Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@jsverse/transloco';
import { Observable, of } from 'rxjs';
import { TRANSLATIONS } from './translations';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  getTranslation(lang: string): Observable<Translation> {
    const bundles = TRANSLATIONS as Record<string, Record<string, unknown>>;
    return of((bundles[lang] ?? {}) as Translation);
  }
}

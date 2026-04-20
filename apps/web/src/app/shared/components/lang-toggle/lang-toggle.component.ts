import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LocaleService, AppLocale } from '../../../core/i18n/locale.service';

@Component({
  selector: 'app-lang-toggle',
  standalone: true,
  imports: [TranslocoModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="lang-toggle" role="group" [attr.aria-label]="'lang_toggle.aria' | transloco">
      <button
        type="button"
        class="lang-toggle__btn"
        [class.lang-toggle__btn--active]="locale.locale() === 'es'"
        [attr.aria-pressed]="locale.locale() === 'es'"
        [attr.aria-label]="'lang_toggle.es_aria' | transloco"
        (click)="set('es')">
        ES
      </button>
      <span class="lang-toggle__sep" aria-hidden="true">|</span>
      <button
        type="button"
        class="lang-toggle__btn"
        [class.lang-toggle__btn--active]="locale.locale() === 'en'"
        [attr.aria-pressed]="locale.locale() === 'en'"
        [attr.aria-label]="'lang_toggle.en_aria' | transloco"
        (click)="set('en')">
        EN
      </button>
    </div>
  `,
  styles: `
    :host {
      display: inline-flex;
    }

    .lang-toggle {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      font-size: var(--text-xs);
      letter-spacing: var(--tracking-widest);
      text-transform: uppercase;
      font-weight: var(--font-weight-medium);
    }

    .lang-toggle__btn {
      background: none;
      border: none;
      padding: var(--space-1) var(--space-2);
      cursor: pointer;
      color: var(--color-neutral-500);
      transition: color var(--duration-fast) var(--ease-default),
                  transform var(--duration-fast) var(--ease-default);
    }

    .lang-toggle__btn:hover {
      color: white;
      transform: translateY(-1px);
    }

    .lang-toggle__btn--active {
      color: white;
    }

    .lang-toggle__sep {
      color: var(--color-neutral-700);
      user-select: none;
    }
  `,
})
export class LangToggleComponent {
  readonly locale = inject(LocaleService);

  set(value: AppLocale): void {
    this.locale.set(value);
  }
}

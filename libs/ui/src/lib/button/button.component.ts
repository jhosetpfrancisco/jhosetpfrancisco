import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';

export type ButtonVariant = 'default' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'default' | 'lg' | 'icon';

@Component({
  selector: 'ui-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-2);
      white-space: nowrap;
      font-family: var(--font-sans);
      font-weight: var(--font-weight-medium);
      line-height: var(--leading-normal);
      cursor: pointer;
      border: none;
      text-decoration: none;
      transition: all var(--duration-fast) var(--ease-default);
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    :host(:focus-visible) {
      outline: none;
      box-shadow: 0 0 0 3px var(--color-ring);
    }

    :host(.disabled),
    :host([disabled]) {
      opacity: 0.5;
      pointer-events: none;
    }

    /* --- Variant: default --- */
    :host(.btn--default) {
      background: var(--color-primary);
      color: var(--color-primary-fg);
      border-radius: var(--radius-md);
    }

    :host(.btn--default:hover) {
      opacity: 0.9;
    }

    /* --- Variant: outline --- */
    :host(.btn--outline) {
      background: transparent;
      color: var(--color-fg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
    }

    :host(.btn--outline:hover) {
      background: var(--color-accent);
    }

    /* --- Variant: ghost --- */
    :host(.btn--ghost) {
      background: transparent;
      color: var(--color-fg);
      border-radius: var(--radius-md);
    }

    :host(.btn--ghost:hover) {
      background: var(--color-accent);
    }

    /* --- Variant: link --- */
    :host(.btn--link) {
      background: transparent;
      color: var(--color-fg);
      padding: 0 !important;
      height: auto !important;
    }

    :host(.btn--link:hover) {
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    /* --- Size: sm --- */
    :host(.btn--sm) {
      height: 2rem;
      padding: 0 var(--space-3);
      font-size: var(--text-sm);
      border-radius: var(--radius-md);
    }

    /* --- Size: default --- */
    :host(.btn--default-size) {
      height: 2.25rem;
      padding: 0 var(--space-4);
      font-size: var(--text-sm);
    }

    /* --- Size: lg --- */
    :host(.btn--lg) {
      height: 2.5rem;
      padding: 0 var(--space-6);
      font-size: var(--text-base);
    }

    /* --- Size: icon --- */
    :host(.btn--icon) {
      height: 2.25rem;
      width: 2.25rem;
      padding: 0;
    }
  `,
  host: {
    'role': 'button',
    '[class]': 'hostClasses()',
    '[attr.tabindex]': '0',
  },
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('default');
  readonly size = input<ButtonSize>('default');

  readonly hostClasses = computed(() => {
    const v = this.variant();
    const s = this.size();
    const sizeClass = s === 'default' ? 'btn--default-size' : `btn--${s}`;
    return `btn--${v} ${sizeClass}`;
  });
}

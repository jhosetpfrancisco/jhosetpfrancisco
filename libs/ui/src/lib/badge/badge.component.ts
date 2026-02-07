import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';

export type BadgeVariant = 'default' | 'outline' | 'muted';

@Component({
  selector: 'ui-badge',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      gap: var(--space-1);
      padding: var(--space-1) var(--space-3);
      font-size: var(--text-xs);
      font-weight: var(--font-weight-medium);
      letter-spacing: var(--tracking-wider);
      text-transform: uppercase;
      line-height: var(--leading-normal);
      border-radius: var(--radius-full);
      white-space: nowrap;
      user-select: none;
    }

    :host(.badge--default) {
      background: var(--color-primary);
      color: var(--color-primary-fg);
    }

    :host(.badge--outline) {
      background: transparent;
      color: var(--color-subtle);
      border: 1px solid var(--color-border);
    }

    :host(.badge--muted) {
      background: var(--color-muted);
      color: var(--color-subtle);
    }
  `,
  host: {
    '[class]': 'hostClass()',
  },
})
export class BadgeComponent {
  readonly variant = input<BadgeVariant>('default');

  readonly hostClass = computed(() => `badge--${this.variant()}`);
}

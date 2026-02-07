import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';

export type SeparatorOrientation = 'horizontal' | 'vertical';

@Component({
  selector: 'ui-separator',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
  styles: `
    :host {
      display: block;
      flex-shrink: 0;
      background: var(--color-border);
    }

    :host(.separator--horizontal) {
      height: 1px;
      width: 100%;
    }

    :host(.separator--vertical) {
      width: 1px;
      height: 100%;
      display: inline-block;
    }
  `,
  host: {
    'role': 'separator',
    '[class]': 'hostClass()',
    '[attr.aria-orientation]': 'orientation()',
  },
})
export class SeparatorComponent {
  readonly orientation = input<SeparatorOrientation>('horizontal');

  readonly hostClass = computed(() => `separator--${this.orientation()}`);
}

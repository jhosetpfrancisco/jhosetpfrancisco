import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';

export type ContainerSize = '3xl' | '4xl' | '5xl' | '6xl';

@Component({
  selector: 'ui-container',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  styles: `
    :host {
      display: block;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-left: var(--space-6);
      padding-right: var(--space-6);
    }

    :host(.container--3xl) { max-width: var(--container-max-3xl); }
    :host(.container--4xl) { max-width: var(--container-max-4xl); }
    :host(.container--5xl) { max-width: var(--container-max-5xl); }
    :host(.container--6xl) { max-width: var(--container-max-6xl); }
  `,
  host: {
    '[class]': 'hostClass()',
  },
})
export class ContainerComponent {
  readonly maxWidth = input<ContainerSize>('6xl');

  readonly hostClass = computed(() => `container--${this.maxWidth()}`);
}

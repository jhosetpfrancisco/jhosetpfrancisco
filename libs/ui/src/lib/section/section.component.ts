import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'ui-section',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  styles: `
    :host {
      display: block;
      padding-top: var(--space-32);
      padding-bottom: var(--space-32);
    }
  `,
  host: {
    '[id]': 'sectionId()',
  },
})
export class SectionComponent {
  readonly sectionId = input<string | undefined>(undefined);
}

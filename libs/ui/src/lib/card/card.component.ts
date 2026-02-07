import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--space-6);
      border-radius: var(--radius-xl);
      border: 1px solid var(--color-border);
      background: var(--color-bg);
      color: var(--color-fg);
    }
  `,
})
export class CardComponent {}

@Component({
  selector: 'ui-card-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
      padding: var(--space-6) var(--space-6) 0;
    }
  `,
})
export class CardHeaderComponent {}

@Component({
  selector: 'ui-card-title',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  host: { 'class': 'ui-card-title' },
  styles: `
    :host {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-medium);
      line-height: var(--leading-normal);
    }
  `,
})
export class CardTitleComponent {}

@Component({
  selector: 'ui-card-description',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  styles: `
    :host {
      font-size: var(--text-sm);
      color: var(--color-subtle);
    }
  `,
})
export class CardDescriptionComponent {}

@Component({
  selector: 'ui-card-content',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  styles: `
    :host {
      display: block;
      padding: 0 var(--space-6);
    }
  `,
})
export class CardContentComponent {}

@Component({
  selector: 'ui-card-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  styles: `
    :host {
      display: flex;
      align-items: center;
      padding: 0 var(--space-6) var(--space-6);
    }
  `,
})
export class CardFooterComponent {}

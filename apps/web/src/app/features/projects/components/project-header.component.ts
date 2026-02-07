import { Component, ChangeDetectionStrategy, input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IconComponent } from '@jhosetpfrancisco/ui';

@Component({
  selector: 'app-project-header',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="header">
      <div class="header__inner">
        <button class="header__back" (click)="goBack()">
          <ui-icon name="arrow-left" size="sm" />
          <span>Volver al Portafolio</span>
        </button>

        <a
          [href]="ctaUrl()"
          target="_blank"
          rel="noopener noreferrer"
          class="header__cta"
        >
          {{ ctaLabel() }}
          <ui-icon name="external-link" size="xs" />
        </a>
      </div>
    </header>
  `,
  styles: `
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: var(--z-fixed);
      background: var(--color-inverse);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .header__inner {
      max-width: var(--container-max-6xl);
      margin: 0 auto;
      padding: var(--space-4) var(--space-6);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .header__back {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      color: white;
      background: none;
      border: none;
      cursor: pointer;
      font-weight: var(--font-weight-medium);
      transition: opacity var(--duration-fast) var(--ease-default);
    }

    .header__back:hover {
      opacity: 0.8;
    }

    .header__cta {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-2) var(--space-6);
      background: white;
      color: black;
      border-radius: var(--radius-lg);
      font-weight: var(--font-weight-medium);
      text-decoration: none;
      font-size: var(--text-sm);
      transition: background var(--duration-fast) var(--ease-default);
    }

    .header__cta:hover {
      background: rgba(255, 255, 255, 0.9);
    }
  `,
})
export class ProjectHeaderComponent {
  private readonly router: Router = inject(Router);

  readonly ctaLabel = input.required<string>();
  readonly ctaUrl = input.required<string>();

  goBack(): void {
    this.router.navigate(['/']);
  }
}

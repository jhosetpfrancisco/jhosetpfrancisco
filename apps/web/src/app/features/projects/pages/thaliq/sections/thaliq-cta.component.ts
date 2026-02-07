import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IconComponent } from '@jhosetpfrancisco/ui';

@Component({
  selector: 'app-thaliq-cta',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="cta-section">
      <div class="cta-section__bg-pattern"></div>
      <div class="container cta-section__inner">
        <h3 class="cta-section__title">Conoce Thaliq</h3>
        <p class="cta-section__desc">
          Descubre como Thaliq puede transformar la forma en que tu empresa
          utiliza la inteligencia artificial.
        </p>
        <div class="cta-section__actions">
          <a
            href="https://www.thaliq.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="cta-btn cta-btn--primary"
          >
            Ver Plataforma
            <ui-icon name="external-link" size="sm" />
          </a>
          <button class="cta-btn cta-btn--secondary" (click)="goToPortfolio()">
            Volver al Portafolio
            <ui-icon name="arrow-left" size="sm" />
          </button>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }

    .cta-section {
      position: relative;
      background: var(--color-inverse);
      color: var(--color-inverse-fg);
      padding: var(--space-24) 0;
      overflow: hidden;
    }

    .cta-section__bg-pattern {
      position: absolute;
      inset: 0;
      opacity: 0.06;
      background:
        linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px);
      background-size: 60px 60px;
      pointer-events: none;
    }

    .container {
      max-width: var(--container-max-4xl);
      margin: 0 auto;
      padding-left: var(--container-padding);
      padding-right: var(--container-padding);
      position: relative;
      z-index: 1;
    }

    .cta-section__inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: var(--space-6);
    }

    .cta-section__title {
      font-size: var(--text-4xl);
      font-weight: var(--font-weight-bold);
      letter-spacing: var(--tracking-tight);
      margin: 0;
    }

    .cta-section__desc {
      font-size: var(--text-lg);
      line-height: var(--leading-relaxed);
      color: rgba(255, 255, 255, 0.7);
      max-width: 36rem;
      margin: 0;
    }

    .cta-section__actions {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      margin-top: var(--space-4);
      width: 100%;
      align-items: center;
    }

    .cta-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-2);
      padding: var(--space-4) var(--space-8);
      border-radius: var(--radius-lg);
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      font-family: var(--font-sans);
      text-decoration: none;
      cursor: pointer;
      border: none;
      transition:
        background var(--duration-fast) var(--ease-default),
        opacity var(--duration-fast) var(--ease-default);
    }

    .cta-btn--primary {
      background: var(--color-inverse-fg);
      color: var(--color-inverse);
    }

    .cta-btn--primary:hover {
      opacity: 0.9;
    }

    .cta-btn--secondary {
      background: transparent;
      color: var(--color-inverse-fg);
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .cta-btn--secondary:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    @media (min-width: 768px) {
      .cta-section__title {
        font-size: var(--text-5xl);
      }

      .cta-section__actions {
        flex-direction: row;
        justify-content: center;
        width: auto;
      }
    }
  `,
})
export class ThaliqCtaComponent {
  private readonly router: Router = inject(Router);

  goToPortfolio(): void {
    this.router.navigate(['/']);
  }
}

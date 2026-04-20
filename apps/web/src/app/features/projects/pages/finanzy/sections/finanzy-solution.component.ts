import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { IconComponent } from '@jhosetpfrancisco/ui';

@Component({
  selector: 'app-finanzy-solution',
  standalone: true,
  imports: [IconComponent, TranslocoModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt">
      <div class="section__bg-grid"></div>
      <div class="container">
        <span class="section-number">{{ 'projects.finanzy.solution.number' | transloco }}</span>
        <h2 class="section-title">
          {{ 'projects.finanzy.solution.title' | transloco }}
        </h2>
        <p class="section-subtitle">
          {{ 'projects.finanzy.solution.subtitle' | transloco }}
        </p>

        <div class="solution-cards">
          @for (card of solutionCards; track card.id) {
            <div class="solution-card">
              <span class="solution-card__number">{{ card.number }}</span>
              <h3 class="solution-card__title">
                {{ 'projects.finanzy.solution.cards.' + card.id + '.title' | transloco }}
              </h3>
              <p class="solution-card__desc">
                {{ 'projects.finanzy.solution.cards.' + card.id + '.desc' | transloco }}
              </p>
            </div>
          }
        </div>

        <div class="features-box">
          <h3 class="features-box__title">
            {{ 'projects.finanzy.solution.features_title' | transloco }}
          </h3>
          <div class="features-box__grid">
            @for (key of features; track key) {
              <div class="features-box__item">
                <ui-icon name="check" size="sm" [strokeWidth]="2" />
                <span>{{ 'projects.finanzy.solution.features.' + key | transloco }}</span>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }

    .section {
      position: relative;
      padding: var(--space-24) 0;
      overflow: hidden;
    }

    .section--alt {
      background: var(--color-surface);
      color: var(--color-fg);
    }

    .section__bg-grid {
      position: absolute;
      inset: 0;
      opacity: 0.06;
      background:
        linear-gradient(rgba(0, 0, 0, 1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 0, 0, 1) 1px, transparent 1px);
      background-size: 60px 60px;
      pointer-events: none;
    }

    .container {
      max-width: var(--container-max-6xl);
      margin: 0 auto;
      padding-left: var(--container-padding);
      padding-right: var(--container-padding);
      position: relative;
      z-index: 1;
    }

    .section-number {
      display: block;
      font-size: var(--text-sm);
      font-weight: var(--font-weight-medium);
      letter-spacing: var(--tracking-widest);
      text-transform: uppercase;
      opacity: 0.5;
      margin-bottom: var(--space-4);
    }

    .section-title {
      font-size: var(--text-4xl);
      font-weight: var(--font-weight-light);
      letter-spacing: var(--tracking-tight);
      line-height: var(--leading-tight);
      margin: 0 0 var(--space-12) 0;
    }

    .section-subtitle {
      font-size: var(--text-lg);
      line-height: var(--leading-relaxed);
      color: var(--color-subtle);
      max-width: 48rem;
      margin: calc(-1 * var(--space-6)) 0 var(--space-12) 0;
    }

    .solution-cards {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-6);
      margin-bottom: var(--space-12);
    }

    .solution-card {
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
      position: relative;
    }

    .solution-card__number {
      display: block;
      font-size: var(--text-sm);
      font-weight: var(--font-weight-semibold);
      letter-spacing: var(--tracking-widest);
      color: var(--color-subtle);
      margin-bottom: var(--space-4);
    }

    .solution-card__title {
      font-size: var(--text-xl);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-3) 0;
    }

    .solution-card__desc {
      font-size: var(--text-base);
      line-height: var(--leading-relaxed);
      color: var(--color-subtle);
      margin: 0;
    }

    .features-box {
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
    }

    .features-box__title {
      font-size: var(--text-xl);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-6) 0;
    }

    .features-box__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-4);
    }

    .features-box__item {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      font-size: var(--text-sm);
      color: var(--color-subtle);
    }

    .features-box__item ui-icon {
      color: var(--color-fg);
      flex-shrink: 0;
    }

    @media (min-width: 768px) {
      .section-title {
        font-size: var(--text-5xl);
      }

      .solution-cards {
        grid-template-columns: repeat(3, 1fr);
      }

      .features-box__grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (min-width: 1024px) {
      .features-box__grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `,
})
export class FinanzySolutionComponent {
  readonly solutionCards = [
    { id: 'c1', number: '01' },
    { id: 'c2', number: '02' },
    { id: 'c3', number: '03' },
  ];
  readonly features = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'];
}

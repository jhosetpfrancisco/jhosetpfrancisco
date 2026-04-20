import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { IconComponent } from '@jhosetpfrancisco/ui';

@Component({
  selector: 'app-mente-bonita-solution',
  standalone: true,
  imports: [IconComponent, TranslocoModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt">
      <div class="section__bg-grid"></div>
      <div class="container">
        <span class="section-number">{{ 'projects.mentebonita.solution.number' | transloco }}</span>
        <h2 class="section-title">{{ 'projects.mentebonita.solution.title' | transloco }}</h2>
        <p class="section-subtitle">
          {{ 'projects.mentebonita.solution.subtitle' | transloco }}
        </p>

        <div class="solution-cards">
          @for (card of cards; track card.id; let i = $index) {
            <div class="solution-card">
              <span class="solution-card__number">{{ card.number }}</span>
              <h3 class="solution-card__title">
                {{ 'projects.mentebonita.solution.cards.' + card.id + '.title' | transloco }}
              </h3>
              <p class="solution-card__desc">
                {{ 'projects.mentebonita.solution.cards.' + card.id + '.desc' | transloco }}
              </p>
            </div>
          }
        </div>

        <div class="features-box">
          <h3 class="features-box__title">
            {{ 'projects.mentebonita.solution.features_title' | transloco }}
          </h3>
          <div class="features-box__grid">
            @for (key of features; track key) {
              <div class="features-box__item">
                <ui-icon name="check" size="sm" />
                <div>
                  <span class="features-box__item-title">
                    {{ 'projects.mentebonita.solution.features.' + key + '.title' | transloco }}
                  </span>
                  <span class="features-box__item-desc">
                    {{ 'projects.mentebonita.solution.features.' + key + '.desc' | transloco }}
                  </span>
                </div>
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

    .container {
      max-width: var(--container-max-6xl);
      margin: 0 auto;
      padding-left: var(--container-padding);
      padding-right: var(--container-padding);
      position: relative;
      z-index: 1;
    }

    .section {
      position: relative;
      padding: var(--space-24) 0;
      overflow: hidden;
    }

    .section--alt {
      background: var(--color-surface);
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
      gap: var(--space-6);
    }

    .features-box__item {
      display: flex;
      align-items: flex-start;
      gap: var(--space-3);
    }

    .features-box__item ui-icon {
      color: var(--color-fg);
      flex-shrink: 0;
      margin-top: 2px;
    }

    .features-box__item-title {
      display: block;
      font-size: var(--text-base);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--space-1);
    }

    .features-box__item-desc {
      display: block;
      font-size: var(--text-sm);
      line-height: var(--leading-relaxed);
      color: var(--color-subtle);
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
  `,
})
export class MenteBonitaSolutionComponent {
  readonly cards = [
    { id: 'c1', number: '01' },
    { id: 'c2', number: '02' },
    { id: 'c3', number: '03' },
  ];
  readonly features = ['f1', 'f2', 'f3', 'f4'];
}

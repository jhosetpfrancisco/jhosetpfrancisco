import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { IconComponent } from '@jhosetpfrancisco/ui';

interface ValueItem {
  id: string;
  icon: string;
}

@Component({
  selector: 'app-thaliq-solution',
  standalone: true,
  imports: [IconComponent, TranslocoModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt">
      <div class="section__bg-grid"></div>
      <div class="container">
        <span class="section-number">{{ 'projects.thaliq.solution.number' | transloco }}</span>
        <h2 class="section-title">{{ 'projects.thaliq.solution.title' | transloco }}</h2>
        <p class="section-subtitle">
          {{ 'projects.thaliq.solution.subtitle' | transloco }}
        </p>

        <div class="solution-cards">
          @for (card of cards; track card.id) {
            <div class="solution-card">
              <span class="solution-card__icon" [innerHTML]="card.icon"></span>
              <h4 class="solution-card__title">
                {{ 'projects.thaliq.solution.cards.' + card.id + '.title' | transloco }}
              </h4>
              <p class="solution-card__text">
                {{ 'projects.thaliq.solution.cards.' + card.id + '.desc' | transloco }}
              </p>
            </div>
          }
        </div>

        <div class="value-box">
          <h4 class="value-box__title">
            {{ 'projects.thaliq.solution.value_title' | transloco }}
          </h4>
          <div class="value-box__grid">
            @for (item of valueItems; track item.id) {
              <div class="value-box__item">
                <ui-icon [name]="item.icon" size="sm" />
                <span>{{ 'projects.thaliq.solution.value.' + item.id | transloco }}</span>
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
      transition: border-color var(--duration-fast) var(--ease-default);
    }

    .solution-card:hover {
      border-color: var(--color-fg);
    }

    .solution-card__icon {
      display: block;
      font-size: var(--text-3xl);
      margin-bottom: var(--space-4);
    }

    .solution-card__title {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-3) 0;
    }

    .solution-card__text {
      font-size: var(--text-sm);
      color: var(--color-subtle);
      line-height: var(--leading-relaxed);
      margin: 0;
    }

    /* Value Box — dark accent for contrast */
    .value-box {
      background: var(--color-inverse);
      color: var(--color-inverse-fg);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
    }

    .value-box__title {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-6) 0;
    }

    .value-box__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-5);
    }

    .value-box__item {
      display: flex;
      align-items: flex-start;
      gap: var(--space-3);
      font-size: var(--text-sm);
      color: rgba(255, 255, 255, 0.7);
      line-height: var(--leading-relaxed);
    }

    .value-box__item ui-icon {
      color: var(--color-inverse-fg);
      flex-shrink: 0;
      margin-top: 2px;
    }

    @media (min-width: 768px) {
      .section {
        padding: var(--space-32) 0;
      }

      .section-title {
        font-size: var(--text-5xl);
      }

      .solution-cards {
        grid-template-columns: repeat(3, 1fr);
      }

      .value-box__grid {
        grid-template-columns: 1fr 1fr;
      }
    }
  `,
})
export class ThaliqSolutionComponent {
  readonly cards = [
    { id: 'c1', icon: '&#9889;' },
    { id: 'c2', icon: '&#128736;' },
    { id: 'c3', icon: '&#128279;' },
  ];
  readonly valueItems: ValueItem[] = [
    { id: 'v1', icon: 'clock' },
    { id: 'v2', icon: 'dollar-sign' },
    { id: 'v3', icon: 'users' },
    { id: 'v4', icon: 'shield' },
  ];
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { IconComponent } from '@jhosetpfrancisco/ui';

@Component({
  selector: 'app-mente-bonita-results',
  standalone: true,
  imports: [IconComponent, TranslocoModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt">
      <div class="section__bg-dots"></div>
      <div class="container">
        <span class="section-number">{{ 'projects.mentebonita.results.number' | transloco }}</span>
        <h2 class="section-title">{{ 'projects.mentebonita.results.title' | transloco }}</h2>

        <div class="results-metrics">
          @for (key of metrics; track key) {
            <div class="result-card">
              <span class="result-card__value">
                {{ 'projects.mentebonita.results.metrics.' + key + '.value' | transloco }}
              </span>
              <span class="result-card__label">
                {{ 'projects.mentebonita.results.metrics.' + key + '.label' | transloco }}
              </span>
            </div>
          }
        </div>

        <div class="achievements-box">
          <h3 class="achievements-box__title">
            {{ 'projects.mentebonita.results.achievements_title' | transloco }}
          </h3>
          <ul class="achievements-box__list">
            @for (key of achievements; track key) {
              <li class="achievements-box__item">
                <ui-icon name="check-circle" size="sm" />
                <span>{{ 'projects.mentebonita.results.achievements.' + key | transloco }}</span>
              </li>
            }
          </ul>
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

    .section__bg-dots {
      position: absolute;
      inset: 0;
      opacity: 0.08;
      background: radial-gradient(circle, rgba(0, 0, 0, 1) 1px, transparent 1px);
      background-size: 30px 30px;
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

    .results-metrics {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-6);
      margin-bottom: var(--space-12);
    }

    .result-card {
      background: var(--color-inverse);
      color: var(--color-inverse-fg);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }

    .result-card__value {
      font-size: var(--text-3xl);
      font-weight: var(--font-weight-bold);
    }

    .result-card__label {
      font-size: var(--text-sm);
      line-height: var(--leading-relaxed);
      color: rgba(255, 255, 255, 0.7);
    }

    .achievements-box {
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
    }

    .achievements-box__title {
      font-size: var(--text-xl);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-6) 0;
    }

    .achievements-box__list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: var(--space-5);
    }

    .achievements-box__item {
      display: flex;
      align-items: flex-start;
      gap: var(--space-3);
      font-size: var(--text-base);
      line-height: var(--leading-relaxed);
      color: var(--color-subtle);
    }

    .achievements-box__item ui-icon {
      color: var(--color-fg);
      flex-shrink: 0;
      margin-top: 2px;
    }

    @media (min-width: 768px) {
      .section-title {
        font-size: var(--text-5xl);
      }

      .results-metrics {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `,
})
export class MenteBonitaResultsComponent {
  readonly metrics = ['m1', 'm2', 'm3'];
  readonly achievements = ['a1', 'a2', 'a3', 'a4'];
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { IconComponent } from '@jhosetpfrancisco/ui';

interface ProblemMetric {
  id: string;
  icon: string;
}

@Component({
  selector: 'app-finanzy-problem',
  standalone: true,
  imports: [IconComponent, TranslocoModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="section__bg-dots"></div>
      <div class="container">
        <span class="section-number">{{ 'projects.finanzy.problem.number' | transloco }}</span>
        <h2 class="section-title">
          {{ 'projects.finanzy.problem.title' | transloco }}
        </h2>

        <div class="problem-grid">
          <!-- Left column -->
          <div class="problem-before">
            <h3 class="problem-before__heading">
              {{ 'projects.finanzy.problem.before_heading' | transloco }}
            </h3>
            <ul class="problem-before__list">
              @for (key of bullets; track key) {
                <li class="problem-before__item">
                  <span class="problem-before__dash">&mdash;</span>
                  <span>{{ 'projects.finanzy.problem.bullets.' + key | transloco }}</span>
                </li>
              }
            </ul>
          </div>

          <!-- Right column -->
          <div class="problem-impact">
            <h3 class="problem-impact__heading">
              {{ 'projects.finanzy.problem.impact_heading' | transloco }}
            </h3>
            <div class="metric-cards">
              @for (metric of problemMetrics; track metric.id) {
                <div class="metric-card">
                  <ui-icon [name]="metric.icon" size="md" [strokeWidth]="1.5" />
                  <span class="metric-card__value">
                    {{ 'projects.finanzy.problem.metrics.' + metric.id + '.label' | transloco }}
                  </span>
                  <span class="metric-card__label">
                    {{ 'projects.finanzy.problem.metrics.' + metric.id + '.desc' | transloco }}
                  </span>
                </div>
              }
            </div>
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
      background: var(--color-bg);
      color: var(--color-fg);
    }

    .section__bg-dots {
      position: absolute;
      inset: 0;
      opacity: 0.08;
      background: radial-gradient(circle, rgba(0, 0, 0, 1) 1px, transparent 1px);
      background-size: 30px 30px;
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

    .problem-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-10);
    }

    .problem-before__heading,
    .problem-impact__heading {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-6) 0;
    }

    .problem-before__list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }

    .problem-before__item {
      display: flex;
      align-items: flex-start;
      gap: var(--space-3);
      font-size: var(--text-base);
      line-height: var(--leading-relaxed);
      color: var(--color-subtle);
    }

    .problem-before__dash {
      color: var(--color-subtle);
      flex-shrink: 0;
      margin-top: 2px;
      opacity: 0.5;
    }

    .metric-cards {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }

    .metric-card {
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: var(--space-6);
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
    }

    .metric-card ui-icon {
      color: var(--color-subtle);
    }

    .metric-card__value {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-semibold);
      color: var(--color-fg);
    }

    .metric-card__label {
      font-size: var(--text-sm);
      line-height: var(--leading-relaxed);
      color: var(--color-subtle);
    }

    @media (min-width: 768px) {
      .section-title {
        font-size: var(--text-5xl);
      }

      .problem-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
  `,
})
export class FinanzyProblemComponent {
  readonly bullets = ['b1', 'b2', 'b3', 'b4', 'b5'];
  readonly problemMetrics: ProblemMetric[] = [
    { id: 'frustration', icon: 'frown' },
    { id: 'clarity', icon: 'eye-off' },
    { id: 'decisions', icon: 'trending-down' },
  ];
}

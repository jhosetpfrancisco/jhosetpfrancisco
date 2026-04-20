import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-thaliq-impact',
  standalone: true,
  imports: [TranslocoModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt">
      <div class="section__bg-dots"></div>
      <div class="container">
        <span class="section-number">{{ 'projects.thaliq.impact.number' | transloco }}</span>
        <h2 class="section-title">{{ 'projects.thaliq.impact.title' | transloco }}</h2>

        <div class="impact-cards">
          @for (key of cards; track key) {
            <div class="impact-card">
              <span class="impact-card__value">
                {{ 'projects.thaliq.impact.cards.' + key + '.value' | transloco }}
              </span>
              <span class="impact-card__label">
                {{ 'projects.thaliq.impact.cards.' + key + '.label' | transloco }}
              </span>
            </div>
          }
        </div>

        <div class="vision-box">
          <h4 class="vision-box__title">
            {{ 'projects.thaliq.impact.vision_title' | transloco }}
          </h4>
          <p class="vision-box__text">
            {{ 'projects.thaliq.impact.vision_p1' | transloco }}
          </p>
          <p class="vision-box__text">
            {{ 'projects.thaliq.impact.vision_p2' | transloco }}
          </p>
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

    .impact-cards {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-6);
      margin-bottom: var(--space-12);
    }

    .impact-card {
      background: var(--color-inverse);
      color: var(--color-inverse-fg);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }

    .impact-card__value {
      font-size: var(--text-3xl);
      font-weight: var(--font-weight-bold);
    }

    .impact-card__label {
      font-size: var(--text-sm);
      color: rgba(255, 255, 255, 0.7);
      line-height: var(--leading-relaxed);
    }

    .vision-box {
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
    }

    .vision-box__title {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-6) 0;
    }

    .vision-box__text {
      font-size: var(--text-base);
      color: var(--color-subtle);
      line-height: var(--leading-relaxed);
      margin: 0 0 var(--space-4) 0;
    }

    .vision-box__text:last-child {
      margin-bottom: 0;
    }

    @media (min-width: 768px) {
      .section {
        padding: var(--space-32) 0;
      }

      .section-title {
        font-size: var(--text-5xl);
      }

      .impact-cards {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `,
})
export class ThaliqImpactComponent {
  readonly cards = ['c1', 'c2', 'c3'];
}

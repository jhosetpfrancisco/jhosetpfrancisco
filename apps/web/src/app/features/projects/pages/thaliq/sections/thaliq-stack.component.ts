import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { IconComponent } from '@jhosetpfrancisco/ui';

@Component({
  selector: 'app-thaliq-stack',
  standalone: true,
  imports: [IconComponent, TranslocoModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt">
      <div class="section__bg-diagonal"></div>
      <div class="container">
        <span class="section-number">{{ 'projects.thaliq.stack.number' | transloco }}</span>
        <h2 class="section-title">{{ 'projects.thaliq.stack.title' | transloco }}</h2>

        <div class="stack-grid">
          @for (card of cards; track card) {
            <div class="stack-card">
              <span class="stack-card__category">
                {{ 'projects.thaliq.stack.cards.' + card + '.category' | transloco }}
              </span>
              <h4 class="stack-card__title">
                {{ 'projects.thaliq.stack.cards.' + card + '.title' | transloco }}
              </h4>
              <p class="stack-card__text">
                {{ 'projects.thaliq.stack.cards.' + card + '.desc' | transloco }}
              </p>
            </div>
          }
        </div>

        <div class="differentiator-box">
          <h4 class="differentiator-box__title">
            {{ 'projects.thaliq.stack.diff_title' | transloco }}
          </h4>
          <p class="differentiator-box__text">
            {{ 'projects.thaliq.stack.diff_desc' | transloco }}
          </p>
          <div class="differentiator-box__tags">
            @for (tag of diffTags; track tag) {
              <span class="tag">{{ tag }}</span>
            }
          </div>
          <div class="differentiator-box__note">
            <ui-icon name="smartphone" size="sm" />
            <span>
              <strong>{{ 'projects.thaliq.stack.diff_note_prefix' | transloco }}</strong>
              {{ 'projects.thaliq.stack.diff_note_text' | transloco }}
            </span>
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

    .section__bg-diagonal {
      position: absolute;
      inset: 0;
      opacity: 0.06;
      background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(0, 0, 0, 1) 10px,
        rgba(0, 0, 0, 1) 11px
      );
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

    .stack-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-6);
      margin-bottom: var(--space-12);
    }

    .stack-card {
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
      transition: border-color var(--duration-fast) var(--ease-default);
    }

    .stack-card:hover {
      border-color: var(--color-fg);
    }

    .stack-card__category {
      display: inline-block;
      font-size: var(--text-xs);
      font-weight: var(--font-weight-semibold);
      letter-spacing: var(--tracking-wider);
      text-transform: uppercase;
      color: var(--color-subtle);
      margin-bottom: var(--space-3);
    }

    .stack-card__title {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-3) 0;
    }

    .stack-card__text {
      font-size: var(--text-sm);
      color: var(--color-subtle);
      line-height: var(--leading-relaxed);
      margin: 0;
    }

    /* Differentiator Box — dark accent for contrast */
    .differentiator-box {
      background: var(--color-inverse);
      color: var(--color-inverse-fg);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
    }

    .differentiator-box__title {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-4) 0;
    }

    .differentiator-box__text {
      font-size: var(--text-sm);
      color: rgba(255, 255, 255, 0.7);
      line-height: var(--leading-relaxed);
      margin: 0 0 var(--space-6) 0;
    }

    .differentiator-box__tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2);
      margin-bottom: var(--space-6);
    }

    .tag {
      display: inline-block;
      font-size: var(--text-xs);
      font-weight: var(--font-weight-medium);
      padding: var(--space-1) var(--space-3);
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: var(--radius-full);
      color: rgba(255, 255, 255, 0.8);
    }

    .differentiator-box__note {
      display: flex;
      align-items: flex-start;
      gap: var(--space-3);
      padding: var(--space-4);
      font-size: var(--text-sm);
      color: rgba(255, 255, 255, 0.7);
      background: rgba(255, 255, 255, 0.06);
      border-radius: var(--radius-lg);
      line-height: var(--leading-relaxed);
    }

    .differentiator-box__note ui-icon {
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

      .stack-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `,
})
export class ThaliqStackComponent {
  readonly cards = ['frontend', 'backend', 'ai', 'infra'];
  readonly diffTags = [
    'Human in the Loop',
    'Function Calling',
    'Streaming',
    'Multi-Agent',
    'Context Management',
    'MCP Protocol',
  ];
}

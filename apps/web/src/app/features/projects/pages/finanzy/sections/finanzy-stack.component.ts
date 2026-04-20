import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { IconComponent } from '@jhosetpfrancisco/ui';

interface StackCard {
  id: string;
  icon: string;
  tech: string;
}

@Component({
  selector: 'app-finanzy-stack',
  standalone: true,
  imports: [IconComponent, TranslocoModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="section__bg-diagonal"></div>
      <div class="container">
        <span class="section-number">{{ 'projects.finanzy.stack.number' | transloco }}</span>
        <h2 class="section-title">
          {{ 'projects.finanzy.stack.title' | transloco }}
        </h2>

        <div class="stack-grid">
          @for (card of stackCards; track card.id) {
            <div class="stack-card">
              <div class="stack-card__icon">
                <ui-icon [name]="card.icon" size="md" [strokeWidth]="1.5" />
              </div>
              <h3 class="stack-card__title">
                {{ 'projects.finanzy.stack.cards.' + card.id + '.title' | transloco }}
              </h3>
              <p class="stack-card__tech">{{ card.tech }}</p>
              <p class="stack-card__desc">
                {{ 'projects.finanzy.stack.cards.' + card.id + '.desc' | transloco }}
              </p>
            </div>
          }
        </div>

        <!-- AWS Full-width card -->
        <div class="stack-card stack-card--full">
          <div class="stack-card--full__header">
            <ui-icon name="cloud" size="md" [strokeWidth]="1.5" />
            <h3 class="stack-card__title">
              {{ 'projects.finanzy.stack.aws_title' | transloco }}
            </h3>
          </div>
          <div class="stack-card__techs stack-card__techs--infra">
            @for (key of awsItems; track key) {
              <div class="stack-card__tech-item">
                <ui-icon name="server" size="xs" [strokeWidth]="1.5" />
                <span>{{ 'projects.finanzy.stack.aws.' + key | transloco }}</span>
              </div>
            }
          </div>
        </div>

        <!-- Arquitectura de IA box -->
        <div class="arch-box">
          <h3 class="arch-box__title">
            {{ 'projects.finanzy.stack.arch_title' | transloco }}
          </h3>
          <p class="arch-box__desc">
            {{ 'projects.finanzy.stack.arch_desc' | transloco }}
          </p>
          <div class="arch-box__tags">
            @for (tag of aiTags; track tag) {
              <span class="arch-box__tag">{{ tag }}</span>
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
      background: var(--color-bg);
      color: var(--color-fg);
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
      margin-bottom: var(--space-6);
    }

    .stack-card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
    }

    .stack-card__icon {
      color: var(--color-subtle);
      margin-bottom: var(--space-6);
    }

    .stack-card__title {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-2) 0;
    }

    .stack-card__tech {
      font-size: var(--text-sm);
      color: var(--color-subtle);
      margin: 0 0 var(--space-4) 0;
      font-weight: var(--font-weight-medium);
    }

    .stack-card__desc {
      font-size: var(--text-sm);
      color: var(--color-subtle);
      line-height: var(--leading-relaxed);
      margin: 0;
    }

    .stack-card--full {
      margin-bottom: var(--space-6);
    }

    .stack-card--full__header {
      display: flex;
      align-items: center;
      gap: var(--space-4);
      margin-bottom: var(--space-6);
      color: var(--color-subtle);
    }

    .stack-card--full__header .stack-card__title {
      margin-bottom: 0;
    }

    .stack-card__techs--infra {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-4);
    }

    .stack-card__tech-item {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      font-size: var(--text-sm);
      color: var(--color-subtle);
    }

    .stack-card__tech-item ui-icon {
      color: var(--color-subtle);
      flex-shrink: 0;
    }

    /* AI Architecture box - dark accent */
    .arch-box {
      background: var(--color-inverse);
      color: var(--color-inverse-fg);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
    }

    .arch-box__title {
      font-size: var(--text-xl);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-3) 0;
    }

    .arch-box__desc {
      font-size: var(--text-base);
      line-height: var(--leading-relaxed);
      color: rgba(255, 255, 255, 0.7);
      margin: 0 0 var(--space-6) 0;
      max-width: var(--container-max-3xl);
    }

    .arch-box__tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2);
    }

    .arch-box__tag {
      display: inline-block;
      font-size: var(--text-xs);
      font-weight: var(--font-weight-medium);
      padding: var(--space-1) var(--space-3);
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: var(--radius-full);
      color: rgba(255, 255, 255, 0.8);
    }

    @media (min-width: 768px) {
      .section-title {
        font-size: var(--text-5xl);
      }

      .stack-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .stack-card__techs--infra {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .stack-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  `,
})
export class FinanzyStackComponent {
  readonly stackCards: StackCard[] = [
    { id: 'mobile', icon: 'smartphone', tech: 'Flutter + Dart' },
    { id: 'landing', icon: 'globe', tech: 'Angular + Responsive' },
    { id: 'backend', icon: 'server', tech: 'NestJS + PostgreSQL' },
    { id: 'ai', icon: 'brain', tech: 'Anthropic Claude + Context-Aware' },
  ];

  readonly awsItems = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6'];

  readonly aiTags = [
    'Pattern Recognition',
    'Smart Categorization',
    'Personalized Advice',
    'Anomaly Detection',
  ];
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ContainerComponent, SectionComponent } from '@jhosetpfrancisco/ui';
import { InViewDirective } from '../../../shared/directives/in-view.directive';
import { CountUpDirective } from '../../../shared/directives/count-up.directive';

interface Stat {
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
}

@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [ContainerComponent, SectionComponent, InViewDirective, CountUpDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ui-section class="stats">
      <div class="stats__pattern"></div>
      <ui-container maxWidth="6xl" class="stats__inner">
        <div class="stats__grid">
          @for (stat of stats; track stat.label; let i = $index) {
            <div class="stats__item" appInView [stagger]="i">
              <div class="stats__value" [appCountUp]="stat.numericValue" [suffix]="stat.suffix"></div>
              <h3 class="stats__label">{{ stat.label }}</h3>
              <p class="stats__desc">{{ stat.description }}</p>
            </div>
          }
        </div>
      </ui-container>
    </ui-section>
  `,
  styles: `
    .stats {
      background: var(--color-bg);
      border-top: 1px solid var(--color-neutral-200);
      position: relative;
      z-index: 10;
    }

    .stats__pattern {
      position: absolute;
      inset: 0;
      opacity: 0.06;
      background-image:
        linear-gradient(rgba(0, 0, 0, 1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 0, 0, 1) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    .stats__inner {
      position: relative;
      z-index: 10;
    }

    .stats__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-12);
    }

    @media (min-width: 768px) {
      .stats__grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .stats__grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .stats__item {
      text-align: center;
    }

    .stats__value {
      font-size: var(--text-5xl);
      font-weight: var(--font-weight-light);
      color: var(--color-fg);
      margin-bottom: var(--space-4);
      transition: transform var(--duration-fast) var(--ease-default);
    }

    @media (min-width: 768px) {
      .stats__value {
        font-size: var(--text-6xl);
      }
    }

    .stats__value:hover {
      transform: scale(1.1);
    }

    .stats__label {
      font-size: var(--text-sm);
      letter-spacing: var(--tracking-widest);
      color: var(--color-neutral-600);
      text-transform: uppercase;
      margin-bottom: var(--space-3);
    }

    .stats__desc {
      color: var(--color-neutral-500);
      font-size: var(--text-sm);
      line-height: var(--leading-relaxed);
    }
  `,
})
export class StatsSectionComponent {
  readonly stats: Stat[] = [
    {
      numericValue: 6,
      suffix: '+',
      label: 'Años de experiencia',
      description: 'Desarrollando soluciones enterprise',
    },
    {
      numericValue: 3,
      suffix: '',
      label: 'Productos creados',
      description: 'Desde concepto hasta producción',
    },
    {
      numericValue: 100,
      suffix: 'K+',
      label: 'Transacciones procesadas',
      description: 'En sistemas bancarios críticos',
    },
    {
      numericValue: 15,
      suffix: '+',
      label: 'Tecnologías dominadas',
      description: 'Full stack, mobile, DevOps & IA',
    },
  ];
}

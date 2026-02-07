import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '@jhosetpfrancisco/ui';

@Component({
  selector: 'app-finanzy-problem',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="section__bg-dots"></div>
      <div class="container">
        <span class="section-number">01 &mdash; El Problema</span>
        <h2 class="section-title">
          Finanzas Personales = Confusi&oacute;n
        </h2>

        <div class="problem-grid">
          <!-- Left column -->
          <div class="problem-before">
            <h3 class="problem-before__heading">La Realidad de las Finanzas Personales</h3>
            <ul class="problem-before__list">
              @for (item of problemBullets; track item) {
                <li class="problem-before__item">
                  <span class="problem-before__dash">&mdash;</span>
                  <span>{{ item }}</span>
                </li>
              }
            </ul>
          </div>

          <!-- Right column -->
          <div class="problem-impact">
            <h3 class="problem-impact__heading">Consecuencias</h3>
            <div class="metric-cards">
              @for (metric of problemMetrics; track metric.label) {
                <div class="metric-card">
                  <ui-icon [name]="metric.icon" size="md" [strokeWidth]="1.5" />
                  <span class="metric-card__value">{{ metric.label }}</span>
                  <span class="metric-card__label">{{ metric.description }}</span>
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
  readonly problemBullets = [
    'Las apps existentes son complejas y abrumadoras para el usuario promedio',
    'La falta de educaci\u00f3n financiera dificulta el seguimiento de gastos',
    'Los m\u00e9todos manuales (hojas de c\u00e1lculo) son tediosos y se abandonan r\u00e1pido',
    'No existe una herramienta que combine simplicidad con inteligencia real',
    'Los usuarios necesitan gu\u00eda personalizada, no solo datos crudos',
  ];

  readonly problemMetrics = [
    {
      icon: 'frown',
      label: 'Frustraci\u00f3n',
      description:
        'El 70% de los usuarios abandonan apps financieras en el primer mes por su complejidad',
    },
    {
      icon: 'eye-off',
      label: 'Sin Claridad',
      description:
        'La mayor\u00eda de personas no tiene visibilidad real de a d\u00f3nde va su dinero cada mes',
    },
    {
      icon: 'trending-down',
      label: 'Decisiones Pobres',
      description:
        'Sin datos claros y contexto, las decisiones financieras se toman por intuici\u00f3n',
    },
  ];
}

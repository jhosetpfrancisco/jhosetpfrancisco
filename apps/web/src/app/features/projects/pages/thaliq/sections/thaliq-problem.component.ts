import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '@jhosetpfrancisco/ui';

@Component({
  selector: 'app-thaliq-problem',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="section__bg-dots"></div>
      <div class="container">
        <span class="section-number">01 &mdash; El Problema</span>
        <h2 class="section-title">El Costo de Tener un Agente IA</h2>

        <div class="problem-grid">
          <div class="problem-bullets">
            <ul class="bullet-list">
              <li class="bullet-list__item">
                <ui-icon name="x" size="sm" />
                <span>Equipos de ingenieros especializados en IA durante meses</span>
              </li>
              <li class="bullet-list__item">
                <ui-icon name="x" size="sm" />
                <span>Infraestructura compleja y costosa de mantener</span>
              </li>
              <li class="bullet-list__item">
                <ui-icon name="x" size="sm" />
                <span>Integraciones custom para cada herramienta y API</span>
              </li>
              <li class="bullet-list__item">
                <ui-icon name="x" size="sm" />
                <span>Iteraciones lentas que retrasan el time-to-market</span>
              </li>
              <li class="bullet-list__item">
                <ui-icon name="x" size="sm" />
                <span>Sin visibilidad ni control sobre el comportamiento del agente</span>
              </li>
            </ul>
          </div>

          <div class="problem-metrics">
            <div class="metric-card">
              <span class="metric-card__value">$50K-$200K</span>
              <span class="metric-card__label">Costo promedio de desarrollo de un agente IA custom</span>
            </div>
            <div class="metric-card">
              <span class="metric-card__value">3-6 meses</span>
              <span class="metric-card__label">Tiempo de desarrollo hasta produccion</span>
            </div>
            <div class="metric-card">
              <span class="metric-card__value">Ongoing</span>
              <span class="metric-card__label">Mantenimiento, actualizaciones e infraestructura continua</span>
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

    .bullet-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }

    .bullet-list__item {
      display: flex;
      align-items: flex-start;
      gap: var(--space-3);
      font-size: var(--text-base);
      line-height: var(--leading-relaxed);
      color: var(--color-subtle);
    }

    .bullet-list__item ui-icon {
      color: var(--color-destructive);
      flex-shrink: 0;
      margin-top: 2px;
    }

    .problem-metrics {
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

    .metric-card__value {
      font-size: var(--text-2xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-fg);
    }

    .metric-card__label {
      font-size: var(--text-sm);
      line-height: var(--leading-relaxed);
      color: var(--color-subtle);
    }

    @media (min-width: 768px) {
      .section {
        padding: var(--space-32) 0;
      }

      .section-title {
        font-size: var(--text-5xl);
      }

      .problem-grid {
        grid-template-columns: 1fr 1fr;
        gap: var(--space-16);
      }
    }
  `,
})
export class ThaliqProblemComponent {}

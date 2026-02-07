import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '@jhosetpfrancisco/ui';

@Component({
  selector: 'app-mente-bonita-problem',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="section__bg-dots"></div>
      <div class="container">
        <span class="section-number">01 &mdash; El Problema</span>
        <h2 class="section-title">Gesti\u00f3n Manual y Fragmentada</h2>

        <div class="problem-grid">
          <!-- Left column -->
          <div class="problem-before">
            <h3 class="problem-before__heading">Antes de la Soluci\u00f3n</h3>
            <ul class="problem-before__list">
              <li class="problem-before__item">
                <ui-icon name="x" size="sm" />
                <span>
                  Agendamiento manual de sesiones de mindfulness con
                  especialistas, generando errores y conflictos de horario
                </span>
              </li>
              <li class="problem-before__item">
                <ui-icon name="x" size="sm" />
                <span>
                  Comunicaci\u00f3n dispersa entre pacientes, especialistas y
                  administradores sin un canal unificado
                </span>
              </li>
              <li class="problem-before__item">
                <ui-icon name="x" size="sm" />
                <span>
                  Facturaci\u00f3n y seguimiento de pagos gestionados con hojas
                  de c\u00e1lculo, sin trazabilidad real
                </span>
              </li>
              <li class="problem-before__item">
                <ui-icon name="x" size="sm" />
                <span>
                  Imposibilidad de escalar el modelo de negocio a m\u00faltiples
                  organizaciones (B2B) de forma eficiente
                </span>
              </li>
            </ul>
          </div>

          <!-- Right column -->
          <div class="problem-impact">
            <h3 class="problem-impact__heading">Impacto en el Negocio</h3>
            <div class="metric-cards">
              <div class="metric-card">
                <span class="metric-card__value">~70%</span>
                <span class="metric-card__label">
                  del tiempo administrativo dedicado a tareas manuales
                  repetitivas
                </span>
              </div>
              <div class="metric-card">
                <span class="metric-card__value">Limitado</span>
                <span class="metric-card__label">
                  crecimiento por falta de infraestructura tecnol\u00f3gica
                  escalable
                </span>
              </div>
              <div class="metric-card">
                <span class="metric-card__value">Fragmentada</span>
                <span class="metric-card__label">
                  experiencia de usuario entre pacientes, especialistas y
                  empresas
                </span>
              </div>
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

    .problem-before__item ui-icon {
      color: var(--color-destructive);
      flex-shrink: 0;
      margin-top: 2px;
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
      .section-title {
        font-size: var(--text-5xl);
      }

      .problem-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
  `,
})
export class MenteBonitaProblemComponent {}

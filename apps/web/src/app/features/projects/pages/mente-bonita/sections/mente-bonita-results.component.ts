import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '@jhosetpfrancisco/ui';

@Component({
  selector: 'app-mente-bonita-results',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt">
      <div class="section__bg-dots"></div>
      <div class="container">
        <span class="section-number">04 &mdash; Resultados</span>
        <h2 class="section-title">Impacto Transformacional</h2>

        <div class="results-metrics">
          <div class="result-card">
            <span class="result-card__value">100%</span>
            <span class="result-card__label">
              Digitalizaci\u00f3n de la operaci\u00f3n de agendamiento,
              sesiones y facturaci\u00f3n
            </span>
          </div>
          <div class="result-card">
            <span class="result-card__value">B2B + B2C</span>
            <span class="result-card__label">
              Modelo de negocio dual que permite vender a empresas y
              usuarios finales simult\u00e1neamente
            </span>
          </div>
          <div class="result-card">
            <span class="result-card__value">360\u00b0</span>
            <span class="result-card__label">
              Cobertura completa del ciclo de vida del servicio de
              bienestar mental
            </span>
          </div>
        </div>

        <div class="achievements-box">
          <h3 class="achievements-box__title">Logros Clave</h3>
          <ul class="achievements-box__list">
            <li class="achievements-box__item">
              <ui-icon name="check-circle" size="sm" />
              <span>
                Plataforma multitenant funcional que soporta m\u00faltiples
                organizaciones con aislamiento completo de datos
              </span>
            </li>
            <li class="achievements-box__item">
              <ui-icon name="check-circle" size="sm" />
              <span>
                Integraci\u00f3n nativa de videollamadas eliminando la
                dependencia de herramientas externas como Zoom o Meet
              </span>
            </li>
            <li class="achievements-box__item">
              <ui-icon name="check-circle" size="sm" />
              <span>
                Sistema de notificaciones as\u00edncrono que procesa miles de
                emails sin afectar el rendimiento de la aplicaci\u00f3n
              </span>
            </li>
            <li class="achievements-box__item">
              <ui-icon name="check-circle" size="sm" />
              <span>
                Arquitectura preparada para escalar horizontalmente con
                costos predecibles y mantenimiento simplificado
              </span>
            </li>
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
export class MenteBonitaResultsComponent {}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '@jhosetpfrancisco/ui';

@Component({
  selector: 'app-thaliq-solution',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt">
      <div class="section__bg-grid"></div>
      <div class="container">
        <span class="section-number">02 &mdash; La Solucion</span>
        <h2 class="section-title">Agentes IA en Minutos, No Meses</h2>
        <p class="section-subtitle">
          Thaliq elimina la complejidad tecnica para que cualquier empresa pueda
          tener su propio agente de IA sin necesidad de un equipo de ingenieros.
        </p>

        <div class="solution-cards">
          <div class="solution-card">
            <span class="solution-card__icon">&#9889;</span>
            <h4 class="solution-card__title">Deploy en Minutos</h4>
            <p class="solution-card__text">
              Configura y despliega un agente funcional en minutos, no semanas.
              Sin servidores, sin DevOps, sin friccion.
            </p>
          </div>
          <div class="solution-card">
            <span class="solution-card__icon">&#128736;</span>
            <h4 class="solution-card__title">No-Code/Low-Code</h4>
            <p class="solution-card__text">
              Interfaz visual para definir prompts, herramientas y flujos. Los
              equipos de negocio pueden iterar sin depender de ingenieria.
            </p>
          </div>
          <div class="solution-card">
            <span class="solution-card__icon">&#128279;</span>
            <h4 class="solution-card__title">Conecta Todo</h4>
            <p class="solution-card__text">
              Integraciones pre-construidas con APIs, bases de datos y
              herramientas MCP. Conecta tu stack en clicks.
            </p>
          </div>
        </div>

        <div class="value-box">
          <h4 class="value-box__title">Propuesta de Valor</h4>
          <div class="value-box__grid">
            <div class="value-box__item">
              <ui-icon name="clock" size="sm" />
              <span>Time-to-market reducido de meses a minutos</span>
            </div>
            <div class="value-box__item">
              <ui-icon name="dollar-sign" size="sm" />
              <span>Costo de entrada hasta 90% menor vs desarrollo custom</span>
            </div>
            <div class="value-box__item">
              <ui-icon name="users" size="sm" />
              <span>Equipos no-tecnicos pueden gestionar agentes</span>
            </div>
            <div class="value-box__item">
              <ui-icon name="shield" size="sm" />
              <span>Seguridad y escalabilidad enterprise desde el dia uno</span>
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

    .section--alt {
      background: var(--color-surface);
    }

    .section__bg-grid {
      position: absolute;
      inset: 0;
      opacity: 0.06;
      background:
        linear-gradient(rgba(0, 0, 0, 1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 0, 0, 1) 1px, transparent 1px);
      background-size: 60px 60px;
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

    .section-subtitle {
      font-size: var(--text-lg);
      line-height: var(--leading-relaxed);
      color: var(--color-subtle);
      max-width: 48rem;
      margin: calc(-1 * var(--space-6)) 0 var(--space-12) 0;
    }

    .solution-cards {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-6);
      margin-bottom: var(--space-12);
    }

    .solution-card {
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
      transition: border-color var(--duration-fast) var(--ease-default);
    }

    .solution-card:hover {
      border-color: var(--color-fg);
    }

    .solution-card__icon {
      display: block;
      font-size: var(--text-3xl);
      margin-bottom: var(--space-4);
    }

    .solution-card__title {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-3) 0;
    }

    .solution-card__text {
      font-size: var(--text-sm);
      color: var(--color-subtle);
      line-height: var(--leading-relaxed);
      margin: 0;
    }

    /* Value Box — dark accent for contrast */
    .value-box {
      background: var(--color-inverse);
      color: var(--color-inverse-fg);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
    }

    .value-box__title {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-6) 0;
    }

    .value-box__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-5);
    }

    .value-box__item {
      display: flex;
      align-items: flex-start;
      gap: var(--space-3);
      font-size: var(--text-sm);
      color: rgba(255, 255, 255, 0.7);
      line-height: var(--leading-relaxed);
    }

    .value-box__item ui-icon {
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

      .solution-cards {
        grid-template-columns: repeat(3, 1fr);
      }

      .value-box__grid {
        grid-template-columns: 1fr 1fr;
      }
    }
  `,
})
export class ThaliqSolutionComponent {}

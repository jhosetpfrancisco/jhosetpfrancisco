import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-thaliq-use-cases',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="container">
        <span class="section-number">05 &mdash; Casos de Uso</span>
        <h2 class="section-title">Soluciones para Cada Industria</h2>

        <div class="use-cases-grid">
          <div class="use-case-card">
            <span class="use-case-card__icon">&#128722;</span>
            <h4 class="use-case-card__title">E-commerce</h4>
            <p class="use-case-card__text">
              Agentes de atencion al cliente, recomendaciones de productos,
              gestion de pedidos y soporte post-venta automatizado 24/7.
            </p>
          </div>
          <div class="use-case-card">
            <span class="use-case-card__icon">&#128187;</span>
            <h4 class="use-case-card__title">SaaS / Tech</h4>
            <p class="use-case-card__text">
              Onboarding inteligente, soporte tecnico L1/L2, asistentes de
              documentacion y agentes internos para equipos de producto.
            </p>
          </div>
          <div class="use-case-card">
            <span class="use-case-card__icon">&#127974;</span>
            <h4 class="use-case-card__title">Banca</h4>
            <p class="use-case-card__text">
              Asesores financieros virtuales, analisis de riesgo, deteccion de
              fraude y automatizacion de procesos regulatorios (KYC/AML).
            </p>
          </div>
          <div class="use-case-card">
            <span class="use-case-card__icon">&#127973;</span>
            <h4 class="use-case-card__title">Healthcare</h4>
            <p class="use-case-card__text">
              Triaje inteligente, asistentes para pacientes, gestion de citas
              y agentes de documentacion clinica con cumplimiento HIPAA.
            </p>
          </div>
          <div class="use-case-card">
            <span class="use-case-card__icon">&#127891;</span>
            <h4 class="use-case-card__title">Educacion</h4>
            <p class="use-case-card__text">
              Tutores personalizados, asistentes de evaluacion, chatbots de
              admisiones y agentes de soporte estudiantil 24/7.
            </p>
          </div>
          <div class="use-case-card">
            <span class="use-case-card__icon">&#127968;</span>
            <h4 class="use-case-card__title">Real Estate</h4>
            <p class="use-case-card__text">
              Agentes de calificacion de leads, asistentes de busqueda de
              propiedades, automatizacion de follow-ups y analisis de mercado.
            </p>
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

    .use-cases-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-6);
    }

    .use-case-card {
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
      transition: border-color var(--duration-fast) var(--ease-default);
    }

    .use-case-card:hover {
      border-color: var(--color-fg);
    }

    .use-case-card__icon {
      display: block;
      font-size: var(--text-3xl);
      margin-bottom: var(--space-4);
    }

    .use-case-card__title {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-3) 0;
    }

    .use-case-card__text {
      font-size: var(--text-sm);
      color: var(--color-subtle);
      line-height: var(--leading-relaxed);
      margin: 0;
    }

    @media (min-width: 768px) {
      .section {
        padding: var(--space-32) 0;
      }

      .section-title {
        font-size: var(--text-5xl);
      }

      .use-cases-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `,
})
export class ThaliqUseCasesComponent {}

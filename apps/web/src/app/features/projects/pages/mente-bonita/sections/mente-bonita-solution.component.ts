import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '@jhosetpfrancisco/ui';

@Component({
  selector: 'app-mente-bonita-solution',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt">
      <div class="section__bg-grid"></div>
      <div class="container">
        <span class="section-number">02 &mdash; La Soluci\u00f3n</span>
        <h2 class="section-title">Plataforma 360 Multitenant</h2>
        <p class="section-subtitle">
          Dise\u00f1amos y desarrollamos una plataforma integral que centraliza
          la gesti\u00f3n de servicios de bienestar mental, permitiendo a
          m\u00faltiples organizaciones operar de forma independiente bajo una
          infraestructura compartida.
        </p>

        <div class="solution-cards">
          <div class="solution-card">
            <span class="solution-card__number">01</span>
            <h3 class="solution-card__title">Agendamiento Inteligente</h3>
            <p class="solution-card__desc">
              Sistema de reservas en tiempo real con disponibilidad
              din\u00e1mica de especialistas, prevenci\u00f3n de conflictos y
              notificaciones autom\u00e1ticas por email.
            </p>
          </div>
          <div class="solution-card">
            <span class="solution-card__number">02</span>
            <h3 class="solution-card__title">Videollamadas Integradas</h3>
            <p class="solution-card__desc">
              Sesiones de mindfulness por videollamada con AWS Chime SDK,
              sin necesidad de aplicaciones externas, con salas
              din\u00e1micas y grabaci\u00f3n opcional.
            </p>
          </div>
          <div class="solution-card">
            <span class="solution-card__number">03</span>
            <h3 class="solution-card__title">Arquitectura Multitenant</h3>
            <p class="solution-card__desc">
              Cada organizaci\u00f3n opera con datos aislados bajo un mismo
              despliegue, con configuraci\u00f3n personalizada de marca,
              roles y permisos granulares.
            </p>
          </div>
        </div>

        <div class="features-box">
          <h3 class="features-box__title">Features Clave</h3>
          <div class="features-box__grid">
            <div class="features-box__item">
              <ui-icon name="check" size="sm" />
              <div>
                <span class="features-box__item-title">
                  Sistema de Notificaciones
                </span>
                <span class="features-box__item-desc">
                  Emails transaccionales con SES y colas as\u00edncronas con SQS
                  para recordatorios y confirmaciones
                </span>
              </div>
            </div>
            <div class="features-box__item">
              <ui-icon name="check" size="sm" />
              <div>
                <span class="features-box__item-title">
                  Dashboard de Especialistas
                </span>
                <span class="features-box__item-desc">
                  Panel completo para gestionar agenda, pacientes, historial de
                  sesiones y m\u00e9tricas de rendimiento
                </span>
              </div>
            </div>
            <div class="features-box__item">
              <ui-icon name="check" size="sm" />
              <div>
                <span class="features-box__item-title">
                  Portal Corporativo B2B
                </span>
                <span class="features-box__item-desc">
                  Interfaz dedicada para empresas con gesti\u00f3n de empleados,
                  planes y reportes de uso del servicio
                </span>
              </div>
            </div>
            <div class="features-box__item">
              <ui-icon name="check" size="sm" />
              <div>
                <span class="features-box__item-title">
                  Experiencia Unificada
                </span>
                <span class="features-box__item-desc">
                  Flujo consistente para pacientes, especialistas y
                  administradores desde una \u00fanica aplicaci\u00f3n
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
      position: relative;
    }

    .solution-card__number {
      display: block;
      font-size: var(--text-sm);
      font-weight: var(--font-weight-semibold);
      letter-spacing: var(--tracking-widest);
      color: var(--color-subtle);
      margin-bottom: var(--space-4);
    }

    .solution-card__title {
      font-size: var(--text-xl);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-3) 0;
    }

    .solution-card__desc {
      font-size: var(--text-base);
      line-height: var(--leading-relaxed);
      color: var(--color-subtle);
      margin: 0;
    }

    .features-box {
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
    }

    .features-box__title {
      font-size: var(--text-xl);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-6) 0;
    }

    .features-box__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-6);
    }

    .features-box__item {
      display: flex;
      align-items: flex-start;
      gap: var(--space-3);
    }

    .features-box__item ui-icon {
      color: var(--color-fg);
      flex-shrink: 0;
      margin-top: 2px;
    }

    .features-box__item-title {
      display: block;
      font-size: var(--text-base);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--space-1);
    }

    .features-box__item-desc {
      display: block;
      font-size: var(--text-sm);
      line-height: var(--leading-relaxed);
      color: var(--color-subtle);
    }

    @media (min-width: 768px) {
      .section-title {
        font-size: var(--text-5xl);
      }

      .solution-cards {
        grid-template-columns: repeat(3, 1fr);
      }

      .features-box__grid {
        grid-template-columns: 1fr 1fr;
      }
    }
  `,
})
export class MenteBonitaSolutionComponent {}

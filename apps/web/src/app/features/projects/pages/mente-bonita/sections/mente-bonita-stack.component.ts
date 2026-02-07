import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mente-bonita-stack',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="section__bg-diagonal"></div>
      <div class="container">
        <span class="section-number">03 &mdash; Stack</span>
        <h2 class="section-title">Stack Tecnol\u00f3gico Enterprise</h2>

        <div class="stack-grid">
          <div class="stack-card">
            <h3 class="stack-card__title">Frontend</h3>
            <div class="stack-card__techs">
              <div class="stack-card__tech">
                <span class="stack-card__tech-name">Angular</span>
                <span class="stack-card__tech-desc">
                  Framework principal con standalone components, signals y
                  lazy loading para m\u00e1ximo rendimiento
                </span>
              </div>
              <div class="stack-card__tech">
                <span class="stack-card__tech-name">RxJS</span>
                <span class="stack-card__tech-desc">
                  Programaci\u00f3n reactiva para manejo de estado, flujos
                  as\u00edncronos y comunicaci\u00f3n en tiempo real
                </span>
              </div>
            </div>
          </div>
          <div class="stack-card">
            <h3 class="stack-card__title">Backend</h3>
            <div class="stack-card__techs">
              <div class="stack-card__tech">
                <span class="stack-card__tech-name">NestJS</span>
                <span class="stack-card__tech-desc">
                  Arquitectura modular con inyecci\u00f3n de dependencias,
                  guards, interceptors y validaci\u00f3n robusta
                </span>
              </div>
              <div class="stack-card__tech">
                <span class="stack-card__tech-name">PostgreSQL</span>
                <span class="stack-card__tech-desc">
                  Base de datos relacional con esquemas separados por tenant,
                  migraciones automatizadas y backups
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="stack-card stack-card--full">
          <h3 class="stack-card__title">Infraestructura AWS</h3>
          <div class="stack-card__techs stack-card__techs--infra">
            <div class="stack-card__tech">
              <span class="stack-card__tech-name">AWS Chime SDK</span>
              <span class="stack-card__tech-desc">
                Videollamadas en tiempo real con salas din\u00e1micas y
                gesti\u00f3n de participantes
              </span>
            </div>
            <div class="stack-card__tech">
              <span class="stack-card__tech-name">SQS</span>
              <span class="stack-card__tech-desc">
                Colas de mensajes para procesamiento as\u00edncrono de
                notificaciones y eventos
              </span>
            </div>
            <div class="stack-card__tech">
              <span class="stack-card__tech-name">SES</span>
              <span class="stack-card__tech-desc">
                Servicio de email transaccional para confirmaciones,
                recordatorios y comunicaciones
              </span>
            </div>
            <div class="stack-card__tech">
              <span class="stack-card__tech-name">EC2 / ECS</span>
              <span class="stack-card__tech-desc">
                Despliegue containerizado con escalado autom\u00e1tico y
                alta disponibilidad
              </span>
            </div>
            <div class="stack-card__tech">
              <span class="stack-card__tech-name">RDS PostgreSQL</span>
              <span class="stack-card__tech-desc">
                Base de datos gestionada con replicas de lectura y failover
                autom\u00e1tico
              </span>
            </div>
            <div class="stack-card__tech">
              <span class="stack-card__tech-name">CloudWatch</span>
              <span class="stack-card__tech-desc">
                Monitoreo centralizado con m\u00e9tricas, logs y alarmas para
                operaci\u00f3n 24/7
              </span>
            </div>
          </div>
        </div>

        <div class="arch-box">
          <h3 class="arch-box__title">Arquitectura Multitenant</h3>
          <p class="arch-box__desc">
            Cada organizaci\u00f3n opera con aislamiento completo de datos bajo
            una infraestructura compartida, optimizando costos y simplificando
            el mantenimiento.
          </p>
          <div class="arch-box__tags">
            <span class="arch-box__tag">Schema Isolation</span>
            <span class="arch-box__tag">Tenant Context Middleware</span>
            <span class="arch-box__tag">Row-Level Security</span>
            <span class="arch-box__tag">Shared Infrastructure</span>
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

    .stack-card--full {
      margin-bottom: var(--space-6);
    }

    .stack-card__title {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-6) 0;
    }

    .stack-card__techs {
      display: flex;
      flex-direction: column;
      gap: var(--space-5);
    }

    .stack-card__techs--infra {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-5);
    }

    .stack-card__tech {
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
    }

    .stack-card__tech-name {
      font-size: var(--text-base);
      font-weight: var(--font-weight-semibold);
    }

    .stack-card__tech-desc {
      font-size: var(--text-sm);
      line-height: var(--leading-relaxed);
      color: var(--color-subtle);
    }

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
        grid-template-columns: 1fr 1fr;
      }

      .stack-card__techs--infra {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `,
})
export class MenteBonitaStackComponent {}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '@jhosetpfrancisco/ui';

@Component({
  selector: 'app-thaliq-stack',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt">
      <div class="section__bg-diagonal"></div>
      <div class="container">
        <span class="section-number">04 &mdash; Stack</span>
        <h2 class="section-title">Stack Tecnologico Enterprise</h2>

        <div class="stack-grid">
          <div class="stack-card">
            <span class="stack-card__category">Frontend</span>
            <h4 class="stack-card__title">Angular + TypeScript</h4>
            <p class="stack-card__text">
              Aplicacion SPA con Angular standalone components, signals y
              change detection OnPush. UI reactiva, accesible y performante.
            </p>
          </div>
          <div class="stack-card">
            <span class="stack-card__category">Backend</span>
            <h4 class="stack-card__title">NestJS + PostgreSQL</h4>
            <p class="stack-card__text">
              API modular con NestJS, TypeORM y PostgreSQL. Arquitectura
              hexagonal, CQRS-ready y migraciones automatizadas.
            </p>
          </div>
          <div class="stack-card">
            <span class="stack-card__category">Motor IA</span>
            <h4 class="stack-card__title">Claude SDK + Custom Agentic Engine</h4>
            <p class="stack-card__text">
              Motor de IA construido sobre el SDK puro de Claude. Agentic SDK
              propio con human-in-the-loop, function calling y multi-agent workflows.
            </p>
          </div>
          <div class="stack-card">
            <span class="stack-card__category">Infraestructura</span>
            <h4 class="stack-card__title">AWS Cloud</h4>
            <p class="stack-card__text">
              Infraestructura en AWS con ECS Fargate, RDS, S3, CloudFront y
              CI/CD automatizado. Auto-scaling y alta disponibilidad.
            </p>
          </div>
        </div>

        <div class="differentiator-box">
          <h4 class="differentiator-box__title">Custom Agentic SDK: El Diferenciador</h4>
          <p class="differentiator-box__text">
            Thaliq utiliza el SDK puro de Claude como base, sobre el cual se
            construyo un Agentic SDK propio con capacidades avanzadas de
            orquestacion, control y extensibilidad.
          </p>
          <div class="differentiator-box__tags">
            <span class="tag">Human in the Loop</span>
            <span class="tag">Function Calling</span>
            <span class="tag">Streaming</span>
            <span class="tag">Multi-Agent</span>
            <span class="tag">Context Management</span>
            <span class="tag">MCP Protocol</span>
          </div>
          <div class="differentiator-box__note">
            <ui-icon name="smartphone" size="sm" />
            <span>
              <strong>Proximamente:</strong> SDKs nativos para iOS y Android,
              permitiendo integrar agentes Thaliq directamente en apps moviles.
            </span>
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
      margin-bottom: var(--space-12);
    }

    .stack-card {
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
      transition: border-color var(--duration-fast) var(--ease-default);
    }

    .stack-card:hover {
      border-color: var(--color-fg);
    }

    .stack-card__category {
      display: inline-block;
      font-size: var(--text-xs);
      font-weight: var(--font-weight-semibold);
      letter-spacing: var(--tracking-wider);
      text-transform: uppercase;
      color: var(--color-subtle);
      margin-bottom: var(--space-3);
    }

    .stack-card__title {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-3) 0;
    }

    .stack-card__text {
      font-size: var(--text-sm);
      color: var(--color-subtle);
      line-height: var(--leading-relaxed);
      margin: 0;
    }

    /* Differentiator Box — dark accent for contrast */
    .differentiator-box {
      background: var(--color-inverse);
      color: var(--color-inverse-fg);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
    }

    .differentiator-box__title {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-4) 0;
    }

    .differentiator-box__text {
      font-size: var(--text-sm);
      color: rgba(255, 255, 255, 0.7);
      line-height: var(--leading-relaxed);
      margin: 0 0 var(--space-6) 0;
    }

    .differentiator-box__tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2);
      margin-bottom: var(--space-6);
    }

    .tag {
      display: inline-block;
      font-size: var(--text-xs);
      font-weight: var(--font-weight-medium);
      padding: var(--space-1) var(--space-3);
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: var(--radius-full);
      color: rgba(255, 255, 255, 0.8);
    }

    .differentiator-box__note {
      display: flex;
      align-items: flex-start;
      gap: var(--space-3);
      padding: var(--space-4);
      font-size: var(--text-sm);
      color: rgba(255, 255, 255, 0.7);
      background: rgba(255, 255, 255, 0.06);
      border-radius: var(--radius-lg);
      line-height: var(--leading-relaxed);
    }

    .differentiator-box__note ui-icon {
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

      .stack-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `,
})
export class ThaliqStackComponent {}

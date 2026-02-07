import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-thaliq-capabilities',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="section__bg-dots"></div>
      <div class="container">
        <span class="section-number">03 &mdash; Capabilities</span>
        <h2 class="section-title">Todo lo que Necesitas para tu Agente</h2>

        <div class="capabilities-grid">
          <div class="capability-card">
            <span class="capability-card__icon">&#128221;</span>
            <h4 class="capability-card__title">Prompts Builder</h4>
            <p class="capability-card__text">
              Editor visual para crear, versionar y optimizar system prompts.
              Incluye templates, variables dinamicas y testing en tiempo real.
            </p>
            <div class="capability-card__tags">
              <span class="tag">System Prompts</span>
              <span class="tag">Few-Shot Learning</span>
              <span class="tag">Context Windows</span>
            </div>
          </div>

          <div class="capability-card">
            <span class="capability-card__icon">&#128218;</span>
            <h4 class="capability-card__title">RAG</h4>
            <p class="capability-card__text">
              Sube documentos y conecta fuentes de datos. El agente consulta tu
              knowledge base en cada interaccion con busqueda semantica.
            </p>
            <div class="capability-card__tags">
              <span class="tag">PDF Upload</span>
              <span class="tag">Vector Search</span>
              <span class="tag">Real-time Sync</span>
            </div>
          </div>

          <div class="capability-card">
            <span class="capability-card__icon">&#128295;</span>
            <h4 class="capability-card__title">MCP Tools</h4>
            <p class="capability-card__text">
              Conecta herramientas MCP pre-construidas o crea las tuyas.
              El agente ejecuta acciones reales: consultar APIs, enviar emails,
              actualizar bases de datos.
            </p>
            <div class="capability-card__tags">
              <span class="tag">Pre-built Tools</span>
              <span class="tag">Custom MCP</span>
              <span class="tag">Tool Chaining</span>
            </div>
          </div>

          <div class="capability-card">
            <span class="capability-card__icon">&#127760;</span>
            <h4 class="capability-card__title">HTTP Tools</h4>
            <p class="capability-card__text">
              Conecta cualquier API REST como herramienta del agente.
              Configura endpoints, autenticacion y transformaciones sin codigo.
            </p>
            <div class="capability-card__tags">
              <span class="tag">REST APIs</span>
              <span class="tag">OAuth</span>
              <span class="tag">Rate Limiting</span>
            </div>
          </div>

          <div class="capability-card">
            <span class="capability-card__icon">&#128203;</span>
            <h4 class="capability-card__title">Instructions Builder</h4>
            <p class="capability-card__text">
              Define flujos conversacionales, reglas de negocio y fallbacks
              con un editor visual. Control total sobre el comportamiento del agente.
            </p>
            <div class="capability-card__tags">
              <span class="tag">Flow Designer</span>
              <span class="tag">Business Rules</span>
              <span class="tag">Fallbacks</span>
            </div>
          </div>

          <div class="capability-card">
            <span class="capability-card__icon">&#129302;</span>
            <h4 class="capability-card__title">Multi-Agent Orchestration</h4>
            <p class="capability-card__text">
              Orquesta multiples agentes especializados que colaboran entre si.
              Routing inteligente, delegacion de tareas y contexto compartido.
            </p>
            <div class="capability-card__tags">
              <span class="tag">Agent Routing</span>
              <span class="tag">Task Delegation</span>
              <span class="tag">Context Sharing</span>
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

    .capabilities-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-6);
    }

    .capability-card {
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
      transition: border-color var(--duration-fast) var(--ease-default);
    }

    .capability-card:hover {
      border-color: var(--color-fg);
    }

    .capability-card__icon {
      display: block;
      font-size: var(--text-3xl);
      margin-bottom: var(--space-4);
    }

    .capability-card__title {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-3) 0;
    }

    .capability-card__text {
      font-size: var(--text-sm);
      color: var(--color-subtle);
      line-height: var(--leading-relaxed);
      margin: 0 0 var(--space-4) 0;
    }

    .capability-card__tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2);
    }

    .tag {
      display: inline-block;
      font-size: 0.6875rem;
      font-weight: var(--font-weight-medium);
      padding: 2px var(--space-2);
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-full);
      color: var(--color-subtle);
    }

    @media (min-width: 768px) {
      .section {
        padding: var(--space-32) 0;
      }

      .section-title {
        font-size: var(--text-5xl);
      }

      .capabilities-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `,
})
export class ThaliqCapabilitiesComponent {}

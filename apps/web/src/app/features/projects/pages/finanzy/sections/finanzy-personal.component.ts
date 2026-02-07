import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '@jhosetpfrancisco/ui';

@Component({
  selector: 'app-finanzy-personal',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt">
      <div class="section__bg-dots"></div>
      <div class="container">
        <span class="section-number">04 &mdash; Proyecto Personal</span>
        <h2 class="section-title">
          De la Idea a Producci&oacute;n
        </h2>

        <div class="personal-cards">
          @for (card of personalCards; track card.title) {
            <div class="personal-card">
              <div class="personal-card__icon">
                <ui-icon [name]="card.icon" size="md" [strokeWidth]="1.5" />
              </div>
              <h3 class="personal-card__title">{{ card.title }}</h3>
              <p class="personal-card__desc">{{ card.description }}</p>
            </div>
          }
        </div>

        <div class="vision-box">
          <h3 class="vision-box__title">Visi&oacute;n del Proyecto</h3>
          <p class="vision-box__text">
            Finanzy nace de una necesidad personal: gestionar finanzas de forma
            simple sin depender de hojas de c&aacute;lculo complicadas. La idea
            evolucion&oacute; hasta convertirse en una app completa que combina la
            simplicidad de uso con el poder de la inteligencia artificial.
          </p>
          <p class="vision-box__text">
            Cada decisi&oacute;n t&eacute;cnica fue tomada pensando en escalabilidad
            y experiencia de usuario. Desde la elecci&oacute;n de Flutter para cubrir
            ambas plataformas m&oacute;viles con un solo c&oacute;digo, hasta la
            integraci&oacute;n de Anthropic Claude para ofrecer un asistente
            financiero que realmente entiende el contexto del usuario.
          </p>
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

    .personal-cards {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-6);
      margin-bottom: var(--space-12);
    }

    .personal-card {
      background: var(--color-inverse);
      color: var(--color-inverse-fg);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }

    .personal-card__icon {
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: var(--space-3);
    }

    .personal-card__title {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-semibold);
      margin: 0;
    }

    .personal-card__desc {
      font-size: var(--text-sm);
      color: rgba(255, 255, 255, 0.7);
      line-height: var(--leading-relaxed);
      margin: 0;
    }

    .vision-box {
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
    }

    .vision-box__title {
      font-size: var(--text-xl);
      font-weight: var(--font-weight-semibold);
      margin: 0 0 var(--space-6) 0;
    }

    .vision-box__text {
      font-size: var(--text-base);
      line-height: var(--leading-relaxed);
      color: var(--color-subtle);
      max-width: var(--container-max-4xl);
      margin: 0;
    }

    .vision-box__text + .vision-box__text {
      margin-top: var(--space-6);
    }

    @media (min-width: 768px) {
      .section-title {
        font-size: var(--text-5xl);
      }

      .personal-cards {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `,
})
export class FinanzyPersonalComponent {
  readonly personalCards = [
    {
      icon: 'code-2',
      title: 'Full-Stack',
      description:
        'Desarrollo completo end-to-end: desde la arquitectura del backend hasta los p\u00edxeles de la UI m\u00f3vil.',
    },
    {
      icon: 'smartphone',
      title: 'Mobile',
      description:
        'App nativa con Flutter que cubre iOS y Android desde un solo c\u00f3digo base con rendimiento nativo.',
    },
    {
      icon: 'brain',
      title: 'AI-Powered',
      description:
        'Integraci\u00f3n profunda con Anthropic Claude para un asistente financiero que realmente entiende.',
    },
  ];
}

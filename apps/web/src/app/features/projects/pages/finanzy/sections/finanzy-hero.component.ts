import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '@jhosetpfrancisco/ui';

@Component({
  selector: 'app-finanzy-hero',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero">
      <div class="hero__bg-pattern"></div>
      <div class="container hero__inner">
        <span class="badge">CASE STUDY &bull; PROYECTO PERSONAL</span>
        <h1 class="hero__title">Finanzy</h1>
        <p class="hero__subtitle">
          Finanzas personales simplificadas con IA: Finance Easy = Finanzy
        </p>
        <div class="hero__tags">
          @for (tag of heroTags; track tag) {
            <span class="tag">{{ tag }}</span>
          }
        </div>
        <div class="hero__note">
          <ui-icon name="smartphone" size="sm" [strokeWidth]="1.5" />
          <span>Disponible en iOS y Android</span>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }

    .hero {
      position: relative;
      background: var(--color-inverse);
      color: var(--color-inverse-fg);
      padding-top: var(--space-32);
      padding-bottom: var(--space-20);
      overflow: hidden;
    }

    .hero__bg-pattern {
      position: absolute;
      inset: 0;
      opacity: 0.06;
      background:
        linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px);
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

    .hero__inner {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-6);
    }

    .badge {
      display: inline-block;
      font-size: var(--text-xs);
      font-weight: var(--font-weight-semibold);
      letter-spacing: var(--tracking-widest);
      text-transform: uppercase;
      padding: var(--space-2) var(--space-4);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: var(--radius-full);
      color: rgba(255, 255, 255, 0.8);
    }

    .hero__title {
      font-size: var(--text-6xl);
      font-weight: var(--font-weight-bold);
      letter-spacing: var(--tracking-tight);
      line-height: var(--leading-tight);
      margin: 0;
    }

    .hero__subtitle {
      font-size: var(--text-xl);
      line-height: var(--leading-relaxed);
      color: rgba(255, 255, 255, 0.7);
      max-width: 42rem;
      margin: 0;
    }

    .hero__tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2);
      margin-top: var(--space-4);
    }

    .tag {
      display: inline-block;
      font-size: var(--text-xs);
      font-weight: var(--font-weight-medium);
      padding: var(--space-1) var(--space-3);
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: var(--radius-full);
      color: rgba(255, 255, 255, 0.8);
    }

    .hero__note {
      display: inline-flex;
      align-items: center;
      gap: var(--space-3);
      color: rgba(255, 255, 255, 0.7);
      font-size: var(--text-sm);
      padding: var(--space-3) var(--space-5);
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-lg);
    }

    @media (min-width: 768px) {
      .hero__title {
        font-size: var(--text-7xl);
      }

      .hero__subtitle {
        font-size: var(--text-2xl);
      }
    }

    @media (min-width: 1024px) {
      .hero__title {
        font-size: var(--text-8xl);
      }
    }
  `,
})
export class FinanzyHeroComponent {
  readonly heroTags = [
    'Flutter',
    'NestJS',
    'PostgreSQL',
    'AWS',
    'Anthropic AI',
    'Angular',
  ];
}

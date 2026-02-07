import {
  Component,
  ChangeDetectionStrategy,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IconComponent, ButtonComponent } from '@jhosetpfrancisco/ui';
import { InViewDirective } from '../../../shared/directives/in-view.directive';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [IconComponent, ButtonComponent, InViewDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero">
      <div class="hero__container">
        <div class="hero__content">
          <span class="hero__subtitle" appInView [stagger]="0">Senior Full Stack Developer</span>

          <h1 class="hero__title" appInView [stagger]="1">Jhosetp Francisco</h1>

          <div class="hero__divider" appInView [stagger]="2"></div>

          <p class="hero__description" appInView [stagger]="3">
            Desarrollo web y mobile. Infraestructura y DevOps.
            <br />
            Especialista en banca, finanzas y soluciones con IA.
          </p>

          <div class="hero__ctas" appInView [stagger]="4">
            <ui-button variant="default" size="lg" (click)="scrollTo('#projects')">
              Ver Proyectos
            </ui-button>
            <ui-button variant="outline" size="lg" (click)="scrollTo('#contact')">
              Contacto
            </ui-button>
          </div>

          <div class="hero__arrow">
            <ui-icon name="arrow-down" size="sm" />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }

    .hero__container {
      width: 100%;
      max-width: var(--container-max-5xl);
      margin: 0 auto;
      padding: 0 var(--space-6);
      position: relative;
      z-index: 10;
    }

    .hero__content {
      max-width: var(--container-max-5xl);
    }

    .hero__subtitle {
      display: inline-block;
      font-size: var(--text-sm);
      letter-spacing: var(--tracking-widest);
      color: var(--color-neutral-500);
      text-transform: uppercase;
      margin-bottom: var(--space-6);
    }

    .hero__title {
      font-size: var(--text-6xl);
      color: white;
      letter-spacing: var(--tracking-tight);
      margin-bottom: var(--space-8);
      line-height: var(--leading-tight);
    }

    @media (min-width: 768px) {
      .hero__title {
        font-size: var(--text-7xl);
      }
    }

    @media (min-width: 1024px) {
      .hero__title {
        font-size: var(--text-8xl);
      }
    }

    .hero__divider {
      width: 4rem;
      height: 2px;
      background: white;
      margin-bottom: var(--space-8);
    }

    .hero__description {
      font-size: var(--text-xl);
      color: var(--color-neutral-400);
      margin-bottom: var(--space-12);
      max-width: var(--container-max-3xl);
      line-height: var(--leading-relaxed);
    }

    @media (min-width: 768px) {
      .hero__description {
        font-size: var(--text-2xl);
      }
    }

    .hero__ctas {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      margin-bottom: var(--space-20);
    }

    @media (min-width: 640px) {
      .hero__ctas {
        flex-direction: row;
      }
    }

    /* Override button colors for dark hero */
    .hero__ctas ui-button.btn--default {
      background: white;
      color: black;
    }

    .hero__ctas ui-button.btn--default:hover {
      background: var(--color-neutral-200);
      opacity: 1;
    }

    .hero__ctas ui-button.btn--outline {
      border-color: var(--color-neutral-600);
      color: white;
    }

    .hero__ctas ui-button.btn--outline:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: var(--color-neutral-400);
    }

    .hero__arrow {
      padding-top: var(--space-12);
      color: var(--color-neutral-700);
      animation: bounce 2s infinite ease-in-out;
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(8px); }
    }
  `,
})
export class HeroSectionComponent {
  private readonly platformId = inject(PLATFORM_ID);

  scrollTo(selector: string): void {
    if (isPlatformBrowser(this.platformId)) {
      document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

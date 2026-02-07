import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  ContainerComponent,
  SectionComponent,
  IconComponent,
} from '@jhosetpfrancisco/ui';
import { InViewDirective } from '../../../shared/directives/in-view.directive';

interface ContactMethod {
  icon: string;
  label: string;
  value: string;
  href: string;
}

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ContainerComponent, SectionComponent, IconComponent, InViewDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ui-section sectionId="contact" class="contact">
      <div class="contact__glow"></div>
      <ui-container maxWidth="6xl" class="contact__inner">
        <div class="contact__header" appInView>
          <h2 class="section-label">Contacto</h2>
          <div class="section-divider"></div>
          <p class="contact__subtitle">
            ¿Tienes un proyecto en mente o quieres colaborar? Estoy disponible para nuevas oportunidades.
          </p>
        </div>

        <div class="contact__grid">
          @for (method of contactMethods; track method.label; let i = $index) {
            <a
              class="contact__card"
              appInView [stagger]="i"
              [href]="method.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="contact__card-inner">
                <div class="contact__icon">
                  <ui-icon [name]="method.icon" size="sm" [strokeWidth]="1.5" />
                </div>
                <div>
                  <p class="contact__label">{{ method.label }}</p>
                  <p class="contact__value">{{ method.value }}</p>
                </div>
              </div>
            </a>
          }
        </div>
      </ui-container>
    </ui-section>
  `,
  styles: `
    .contact {
      background: var(--color-bg);
      border-top: 1px solid var(--color-neutral-200);
      position: relative;
      z-index: 10;
      overflow: hidden;
    }

    .contact__glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 500px;
      height: 500px;
      border-radius: var(--radius-full);
      pointer-events: none;
      background: radial-gradient(
        circle,
        rgba(0, 0, 0, 0.03) 0%,
        rgba(0, 0, 0, 0.015) 30%,
        transparent 70%
      );
    }

    .contact__inner {
      position: relative;
      z-index: 10;
    }

    .contact__header {
      margin-bottom: var(--space-20);
    }

    .contact__subtitle {
      font-size: var(--text-xl);
      color: var(--color-neutral-700);
      max-width: var(--container-max-3xl);
      line-height: var(--leading-relaxed);
    }

    .contact__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-8);
      max-width: var(--container-max-4xl);
    }

    @media (min-width: 768px) {
      .contact__grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .contact__card {
      display: block;
      border: 1px solid var(--color-neutral-200);
      background: rgba(250, 250, 250, 0.5);
      padding: var(--space-8);
      text-decoration: none;
      color: inherit;
      transition: border-color var(--duration-fast) var(--ease-default),
                  background var(--duration-fast) var(--ease-default),
                  transform var(--duration-fast) var(--ease-default);
    }

    .contact__card:hover {
      border-color: var(--color-neutral-400);
      background: white;
      transform: translateY(-4px);
    }

    .contact__card-inner {
      display: flex;
      align-items: flex-start;
      gap: var(--space-4);
    }

    .contact__icon {
      color: var(--color-neutral-400);
      margin-top: 2px;
      transition: color var(--duration-fast) var(--ease-default),
                  transform var(--duration-fast) var(--ease-default);
    }

    .contact__card:hover .contact__icon {
      color: var(--color-fg);
      transform: scale(1.2) rotate(5deg);
    }

    .contact__label {
      font-size: var(--text-xs);
      letter-spacing: var(--tracking-widest);
      color: var(--color-neutral-500);
      text-transform: uppercase;
      margin-bottom: var(--space-2);
    }

    .contact__value {
      color: var(--color-fg);
    }

    .section-label {
      font-size: var(--text-sm);
      letter-spacing: var(--tracking-widest);
      color: var(--color-neutral-600);
      text-transform: uppercase;
      margin-bottom: var(--space-6);
    }

    .section-divider {
      width: 3rem;
      height: 2px;
      background: var(--color-fg);
      margin-bottom: var(--space-8);
    }
  `,
})
export class ContactSectionComponent {
  readonly contactMethods: ContactMethod[] = [
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: 'Jhosetp Francisco',
      href: 'https://www.linkedin.com/in/jhosetpfrancisco',
    },
    {
      icon: 'github',
      label: 'GitHub',
      value: '@jhosetpfrancisco',
      href: 'https://github.com/jhosetpfrancisco',
    },
    {
      icon: 'mail',
      label: 'Email',
      value: 'jhosetp.chino@hotmail.com',
      href: 'mailto:jhosetp.chino@hotmail.com',
    },
    {
      icon: 'globe',
      label: 'Website',
      value: 'jhosetpfrancisco.com',
      href: 'https://jhosetpfrancisco.com',
    },
  ];
}

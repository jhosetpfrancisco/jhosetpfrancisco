import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  ContainerComponent,
  SectionComponent,
  IconComponent,
} from '@jhosetpfrancisco/ui';
import { InViewDirective } from '../../../shared/directives/in-view.directive';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [ContainerComponent, SectionComponent, IconComponent, InViewDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ui-section sectionId="experience" class="exp">
      <ui-container maxWidth="6xl">
        <div class="exp__header" appInView>
          <h2 class="section-label">Experiencia Profesional</h2>
          <div class="section-divider"></div>
        </div>

        <div class="exp__list">
          @for (exp of experiences; track exp.role; let i = $index) {
            <div class="exp__item" appInView [stagger]="i">
              <div class="exp__top">
                <div>
                  <h3 class="exp__role">{{ exp.role }}</h3>
                  <p class="exp__company">{{ exp.company }}</p>
                </div>
                <div class="exp__period">
                  <ui-icon name="calendar" size="xs" [strokeWidth]="1.5" />
                  <span>{{ exp.period }}</span>
                </div>
              </div>

              <p class="exp__desc">{{ exp.description }}</p>

              <div class="exp__achievements">
                @for (a of exp.achievements; track a) {
                  <div class="exp__achievement">
                    <span class="exp__dash">&mdash;</span>
                    <span>{{ a }}</span>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </ui-container>
    </ui-section>
  `,
  styles: `
    .exp {
      background: var(--color-bg);
      border-top: 1px solid var(--color-neutral-200);
      position: relative;
      z-index: 10;
    }

    .exp__header {
      margin-bottom: var(--space-20);
    }

    .exp__list {
      display: flex;
      flex-direction: column;
      gap: var(--space-20);
    }

    .exp__item {
      border-left: 2px solid var(--color-neutral-200);
      padding-left: var(--space-8);
      transition: border-color var(--duration-fast) var(--ease-default);
    }

    .exp__item:hover {
      border-left-color: var(--color-neutral-400);
    }

    .exp__top {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      margin-bottom: var(--space-6);
    }

    @media (min-width: 1024px) {
      .exp__top {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
      }
    }

    .exp__role {
      font-size: var(--text-2xl);
      color: var(--color-fg);
      margin-bottom: var(--space-2);
    }

    .exp__company {
      color: var(--color-neutral-600);
    }

    .exp__period {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      color: var(--color-neutral-500);
      font-size: var(--text-sm);
    }

    .exp__desc {
      color: var(--color-neutral-700);
      margin-bottom: var(--space-8);
      line-height: var(--leading-relaxed);
      max-width: var(--container-max-3xl);
    }

    .exp__achievements {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }

    .exp__achievement {
      display: flex;
      align-items: flex-start;
      gap: var(--space-4);
      color: var(--color-neutral-600);
    }

    .exp__dash {
      color: var(--color-neutral-200);
      margin-top: 2px;
      flex-shrink: 0;
    }

    .exp__achievement span:last-child {
      line-height: var(--leading-relaxed);
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
export class ExperienceSectionComponent {
  readonly experiences: Experience[] = [
    {
      role: 'Mid-Senior Full Stack Developer',
      company: 'Banco Ripley Perú',
      period: 'Feb 2023 - Presente',
      description:
        'Desarrollo e implementación de mejoras y optimizaciones en productos digitales del banco, trabajando tanto en microservicios como en la capa cliente.',
      achievements: [
        'Optimización del rendimiento en la carga del home y módulo de productos',
        'Diseño e implementación de nuevos features en microservicios backend',
        'Mejoras continuas en la experiencia de usuario del canal digital',
        'Colaboración en arquitectura de soluciones escalables para banca retail',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Akiba',
      period: 'Ene 2021 - Presente',
      description:
        'Adaptación y mejora continua de la plataforma web, incluyendo la migración a un nuevo diseño bajo altos estándares de calidad de software y rendimiento.',
      achievements: [
        'Migración completa de la plataforma a un nuevo diseño optimizado',
        'Mejora continua del rendimiento para una carga rápida y eficiente',
        'Implementación de estándares de calidad y mejores prácticas frontend',
        'Evolución de freelance a colaborador de largo plazo (+5 años)',
      ],
    },
    {
      role: 'ICT Trainee',
      company: 'Statkraft',
      period: 'Oct 2019 - Jul 2021',
      description:
        'Mejora de procesos internos en áreas de contabilidad e hidrología, automatizando flujos de trabajo y desarrollando herramientas internas.',
      achievements: [
        'Automatización de procesos contables internos',
        'Desarrollo de herramientas para el área de hidrología',
        'Optimización de flujos de trabajo operativos',
      ],
    },
  ];
}

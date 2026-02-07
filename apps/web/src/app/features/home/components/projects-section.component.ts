import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  ContainerComponent,
  SectionComponent,
  IconComponent,
} from '@jhosetpfrancisco/ui';
import { InViewDirective } from '../../../shared/directives/in-view.directive';

interface Project {
  title: string;
  description: string;
  icon: string;
  image: string;
  tags: string[];
  link: string;
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [ContainerComponent, SectionComponent, IconComponent, InViewDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ui-section sectionId="projects" class="projects">
      <div class="projects__pattern"></div>
      <ui-container maxWidth="6xl" class="projects__inner">
        <div class="projects__header" appInView>
          <h2 class="section-label">Proyectos Destacados</h2>
          <div class="section-divider"></div>
          <p class="projects__subtitle">
            Soluciones innovadoras que combinan tecnología de vanguardia con impacto real
          </p>
        </div>

        <div class="projects__list">
          @for (project of projects; track project.title; let i = $index) {
            <div class="projects__item" appInView>
              <div class="projects__grid" [class.projects__grid--reverse]="i % 2 !== 0">
                <!-- Image -->
                <div class="projects__image-wrap">
                  <img
                    [src]="project.image"
                    [alt]="project.title"
                    class="projects__image"
                    loading="lazy"
                  />
                </div>

                <!-- Content -->
                <div class="projects__content">
                  <div class="projects__title-row">
                    <ui-icon [name]="project.icon" size="md" [strokeWidth]="1.5" />
                    <h3 class="projects__title">{{ project.title }}</h3>
                  </div>

                  <p class="projects__desc">{{ project.description }}</p>

                  <div class="projects__tags">
                    @for (tag of project.tags; track tag) {
                      <span class="projects__tag">{{ tag }}</span>
                    }
                  </div>

                  <button class="projects__link" (click)="navigate(project.link)">
                    Ver más
                    <ui-icon name="external-link" size="xs" [strokeWidth]="1.5" />
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      </ui-container>
    </ui-section>
  `,
  styles: `
    .projects {
      background: var(--color-bg);
      border-top: 1px solid var(--color-neutral-200);
      position: relative;
      z-index: 10;
    }

    .projects__pattern {
      position: absolute;
      inset: 0;
      opacity: 0.06;
      background-image: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 60px,
        rgba(0, 0, 0, 1) 60px,
        rgba(0, 0, 0, 1) 62px
      );
    }

    .projects__inner {
      position: relative;
      z-index: 10;
    }

    .projects__header {
      margin-bottom: var(--space-20);
    }

    .projects__subtitle {
      font-size: var(--text-xl);
      color: var(--color-neutral-700);
      max-width: var(--container-max-3xl);
      line-height: var(--leading-relaxed);
    }

    .projects__list {
      display: flex;
      flex-direction: column;
      gap: var(--space-24);
    }

    .projects__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-12);
      align-items: center;
    }

    @media (min-width: 1024px) {
      .projects__grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .projects__image-wrap {
      position: relative;
      aspect-ratio: 4 / 3;
      overflow: hidden;
      background: var(--color-surface);
      border: 1px solid var(--color-neutral-200);
    }

    .projects__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--duration-slow) var(--ease-default);
    }

    .projects__item:hover .projects__image {
      transform: scale(1.05);
    }

    @media (min-width: 1024px) {
      .projects__grid--reverse .projects__image-wrap {
        order: 2;
      }

      .projects__grid--reverse .projects__content {
        order: 1;
      }
    }

    .projects__content {
      display: flex;
      flex-direction: column;
    }

    .projects__title-row {
      display: flex;
      align-items: center;
      gap: var(--space-4);
      margin-bottom: var(--space-6);
      color: var(--color-neutral-500);
    }

    .projects__title {
      font-size: var(--text-3xl);
      color: var(--color-fg);
    }

    .projects__desc {
      color: var(--color-neutral-700);
      margin-bottom: var(--space-8);
      line-height: var(--leading-relaxed);
      font-size: var(--text-lg);
    }

    .projects__tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-3);
      margin-bottom: var(--space-8);
    }

    .projects__tag {
      font-size: var(--text-xs);
      letter-spacing: var(--tracking-wider);
      color: var(--color-neutral-500);
      text-transform: uppercase;
    }

    .projects__link {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      font-size: var(--text-sm);
      color: var(--color-neutral-600);
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      transition: color var(--duration-fast) var(--ease-default),
                  transform var(--duration-fast) var(--ease-default);
    }

    .projects__link:hover {
      color: var(--color-fg);
      transform: translateX(5px);
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
export class ProjectsSectionComponent {
  private readonly router = inject(Router);

  readonly projects: Project[] = [
    {
      title: 'MenteBonita',
      description:
        'Plataforma integral de booking para servicios de bienestar mental y físico. Conecta usuarios con profesionales de Mindfulness, Psicología, Nutrición y más.',
      icon: 'zap',
      image:
        'https://images.unsplash.com/photo-1655970580622-4a547789c850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjB3ZWxsbmVzcyUyMG1lZGl0YXRpb24lMjBzcGF8ZW58MXx8fHwxNzcwNDE4MjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Angular', 'NestJS', 'PostgreSQL', 'AWS'],
      link: '/projects/mentebonita',
    },
    {
      title: 'Thaliq',
      description:
        'Plataforma B2B de agentes conversacionales con IA. Solución Plug & Play que permite a empresas integrar agentes inteligentes con contexto de negocio mediante RAG, HTTP Calls, MCP e instrucciones personalizadas.',
      icon: 'zap',
      image:
        'https://images.unsplash.com/photo-1756967385885-0f20d517f72f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDM5MzcyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Angular', 'NestJS', 'Claude SDK', 'RAG'],
      link: '/projects/thaliq',
    },
    {
      title: 'Finanzy',
      description:
        'App de finanzas personales con IA que simplifica la gestión del dinero. Incluye un asistente financiero inteligente que aprende de tus hábitos y te ayuda a tomar mejores decisiones.',
      icon: 'zap',
      image:
        'https://images.unsplash.com/photo-1758519292135-2af0ad50f552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGZpbmFuY2UlMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzcwMzk0MDYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Flutter', 'NestJS', 'Claude SDK', 'PostgreSQL'],
      link: '/projects/finanzy',
    },
  ];

  navigate(link: string): void {
    this.router.navigate([link]);
  }
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ContainerComponent, SectionComponent } from '@jhosetpfrancisco/ui';
import { InViewDirective } from '../../../shared/directives/in-view.directive';

interface TechCategory {
  name: string;
  techs: string[];
}

@Component({
  selector: 'app-tech-stack-section',
  standalone: true,
  imports: [ContainerComponent, SectionComponent, InViewDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ui-section sectionId="stack" class="stack">
      <div class="stack__pattern"></div>
      <ui-container maxWidth="6xl" class="stack__inner">
        <div class="stack__header" appInView>
          <h2 class="section-label">Stack Tecnológico</h2>
          <div class="section-divider"></div>
        </div>

        <div class="stack__grid">
          @for (cat of categories; track cat.name; let i = $index) {
            <div class="stack__category" appInView [stagger]="i">
              <h3 class="stack__cat-name">{{ cat.name }}</h3>
              <div class="stack__list">
                @for (tech of cat.techs; track tech) {
                  <div class="stack__tech">{{ tech }}</div>
                }
              </div>
            </div>
          }
        </div>
      </ui-container>
    </ui-section>
  `,
  styles: `
    .stack {
      background: var(--color-bg);
      border-top: 1px solid var(--color-neutral-200);
      position: relative;
      z-index: 10;
    }

    .stack__pattern {
      position: absolute;
      inset: 0;
      opacity: 0.08;
      background-image: radial-gradient(circle, rgba(0, 0, 0, 1) 1px, transparent 1px);
      background-size: 30px 30px;
    }

    .stack__inner {
      position: relative;
      z-index: 10;
    }

    .stack__header {
      margin-bottom: var(--space-20);
    }

    .stack__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-16);
    }

    @media (min-width: 768px) {
      .stack__grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .stack__grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .stack__cat-name {
      font-size: var(--text-xs);
      letter-spacing: var(--tracking-widest);
      color: var(--color-neutral-500);
      text-transform: uppercase;
      margin-bottom: var(--space-6);
    }

    .stack__list {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }

    .stack__tech {
      color: var(--color-neutral-700);
      cursor: default;
      transition: color var(--duration-fast) var(--ease-default),
                  transform var(--duration-fast) var(--ease-default);
    }

    .stack__tech:hover {
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
export class TechStackSectionComponent {
  readonly categories: TechCategory[] = [
    { name: 'Frontend', techs: ['Angular', 'React', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Mobile', techs: ['Flutter', 'Ionic', 'Android', 'iOS'] },
    { name: 'Backend', techs: ['NestJS', '.NET', 'Express.js', 'PostgreSQL'] },
    { name: 'DevOps & Cloud', techs: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'] },
    { name: 'IA & Otros', techs: ['Claude SDK', 'RAG', 'Function Calling', 'MCP', 'LLMOps', 'LangFuse'] },
  ];
}

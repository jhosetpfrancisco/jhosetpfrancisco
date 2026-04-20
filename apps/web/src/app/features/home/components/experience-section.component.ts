import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import {
  ContainerComponent,
  SectionComponent,
  IconComponent,
} from '@jhosetpfrancisco/ui';
import { InViewDirective } from '../../../shared/directives/in-view.directive';

interface Experience {
  id: string;
  company: string;
  achievements: string[];
}

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [ContainerComponent, SectionComponent, IconComponent, InViewDirective, TranslocoModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ui-section sectionId="experience" class="exp">
      <ui-container maxWidth="6xl">
        <div class="exp__header" appInView>
          <h2 class="section-label">{{ 'home.experience.label' | transloco }}</h2>
          <div class="section-divider"></div>
        </div>

        <div class="exp__list">
          @for (exp of experiences; track exp.id; let i = $index) {
            <div class="exp__item" appInView [stagger]="i">
              <div class="exp__top">
                <div>
                  <h3 class="exp__role">{{ 'home.experience.items.' + exp.id + '.role' | transloco }}</h3>
                  <p class="exp__company">{{ exp.company }}</p>
                </div>
                <div class="exp__period">
                  <ui-icon name="calendar" size="xs" [strokeWidth]="1.5" />
                  <span>{{ 'home.experience.items.' + exp.id + '.period' | transloco }}</span>
                </div>
              </div>

              <p class="exp__desc">{{ 'home.experience.items.' + exp.id + '.desc' | transloco }}</p>

              <div class="exp__achievements">
                @for (key of exp.achievements; track key) {
                  <div class="exp__achievement">
                    <span class="exp__dash">&mdash;</span>
                    <span>{{ 'home.experience.items.' + exp.id + '.achievements.' + key | transloco }}</span>
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
    { id: 'ripley', company: 'Banco Ripley Perú', achievements: ['a1', 'a2', 'a3', 'a4'] },
    { id: 'akiba', company: 'Akiba', achievements: ['a1', 'a2', 'a3', 'a4'] },
    { id: 'statkraft', company: 'Statkraft', achievements: ['a1', 'a2', 'a3'] },
  ];
}

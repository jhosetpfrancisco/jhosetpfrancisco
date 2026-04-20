import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { ContainerComponent, SectionComponent, IconComponent } from '@jhosetpfrancisco/ui';
import { InViewDirective } from '../../../shared/directives/in-view.directive';

interface Highlight {
  id: string;
  icon: string;
}

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [ContainerComponent, SectionComponent, IconComponent, InViewDirective, TranslocoModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ui-section sectionId="about" class="about">
      <div class="about__pattern"></div>
      <ui-container maxWidth="6xl" class="about__inner">
        <div class="about__header" appInView>
          <h2 class="section-label">{{ 'home.about.label' | transloco }}</h2>
          <div class="section-divider"></div>
          <p class="about__intro">{{ 'home.about.intro' | transloco }}</p>
        </div>

        <div class="about__grid">
          @for (h of highlights; track h.id; let i = $index) {
            <div class="about__card" appInView [stagger]="i">
              <div class="about__icon">
                <ui-icon [name]="h.icon" size="lg" [strokeWidth]="1.5" />
              </div>
              <h3 class="about__title">{{ 'home.about.highlights.' + h.id + '.title' | transloco }}</h3>
              <p class="about__desc">{{ 'home.about.highlights.' + h.id + '.desc' | transloco }}</p>
            </div>
          }
        </div>
      </ui-container>
    </ui-section>
  `,
  styles: `
    .about {
      background: var(--color-bg);
      border-top: 1px solid var(--color-neutral-200);
      position: relative;
      z-index: 10;
    }

    .about__pattern {
      position: absolute;
      inset: 0;
      opacity: 0.06;
      background-image:
        linear-gradient(rgba(0, 0, 0, 1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 0, 0, 1) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    .about__inner {
      position: relative;
      z-index: 10;
    }

    .about__header {
      margin-bottom: var(--space-20);
    }

    .about__intro {
      font-size: var(--text-xl);
      color: var(--color-neutral-700);
      max-width: var(--container-max-4xl);
      line-height: var(--leading-relaxed);
    }

    @media (min-width: 768px) {
      .about__intro {
        font-size: var(--text-2xl);
      }
    }

    .about__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-8);
    }

    @media (min-width: 768px) {
      .about__grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .about__grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .about__card {
      cursor: default;
    }

    .about__icon {
      color: var(--color-neutral-400);
      margin-bottom: var(--space-6);
      transition: color var(--duration-fast) var(--ease-default),
                  transform var(--duration-fast) var(--ease-default);
    }

    .about__card:hover .about__icon {
      color: var(--color-fg);
      transform: scale(1.1);
    }

    .about__title {
      font-size: var(--text-lg);
      color: var(--color-fg);
      margin-bottom: var(--space-3);
    }

    .about__desc {
      color: var(--color-neutral-600);
      line-height: var(--leading-relaxed);
    }

    /* Shared section heading styles */
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
export class AboutSectionComponent {
  readonly highlights: Highlight[] = [
    { id: 'fullstack', icon: 'code-2' },
    { id: 'mobile', icon: 'smartphone' },
    { id: 'devops', icon: 'layers' },
    { id: 'fintech', icon: 'briefcase' },
  ];
}

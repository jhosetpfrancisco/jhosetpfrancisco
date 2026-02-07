import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { ProjectHeaderComponent } from '../../components/project-header.component';
import { FinanzyHeroComponent } from './sections/finanzy-hero.component';
import { FinanzyProblemComponent } from './sections/finanzy-problem.component';
import { FinanzySolutionComponent } from './sections/finanzy-solution.component';
import { FinanzyStackComponent } from './sections/finanzy-stack.component';
import { FinanzyPersonalComponent } from './sections/finanzy-personal.component';
import { FinanzyCtaComponent } from './sections/finanzy-cta.component';
import { SeoService } from '../../../../shared/services/seo.service';

@Component({
  selector: 'app-finanzy-page',
  standalone: true,
  imports: [
    ProjectHeaderComponent,
    FinanzyHeroComponent,
    FinanzyProblemComponent,
    FinanzySolutionComponent,
    FinanzyStackComponent,
    FinanzyPersonalComponent,
    FinanzyCtaComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-project-header
      ctaLabel="Ver Landing Page"
      ctaUrl="https://finanzy.app/"
    />

    <app-finanzy-hero />
    <app-finanzy-problem />
    <app-finanzy-solution />
    <app-finanzy-stack />
    <app-finanzy-personal />
    <app-finanzy-cta />
  `,
  styles: `
    :host {
      display: block;
      background: var(--color-bg);
      color: var(--color-fg);
      font-family: var(--font-sans);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `,
})
export class FinanzyPageComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Finanzy — Plataforma Financiera Personal',
      description:
        'Caso de estudio: Finanzy, plataforma de finanzas personales. Landing page, diseño de producto y desarrollo frontend.',
      url: '/projects/finanzy',
      keywords:
        'Finanzy, finanzas personales, landing page, producto digital, Jhosetp Francisco',
    });
  }
}

import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { ProjectHeaderComponent } from '../../components/project-header.component';
import { MenteBonitaHeroComponent } from './sections/mente-bonita-hero.component';
import { MenteBonitaProblemComponent } from './sections/mente-bonita-problem.component';
import { MenteBonitaSolutionComponent } from './sections/mente-bonita-solution.component';
import { MenteBonitaStackComponent } from './sections/mente-bonita-stack.component';
import { MenteBonitaResultsComponent } from './sections/mente-bonita-results.component';
import { MenteBonitaCtaComponent } from './sections/mente-bonita-cta.component';
import { SeoService } from '../../../../shared/services/seo.service';

@Component({
  selector: 'app-mente-bonita-page',
  standalone: true,
  imports: [
    ProjectHeaderComponent,
    MenteBonitaHeroComponent,
    MenteBonitaProblemComponent,
    MenteBonitaSolutionComponent,
    MenteBonitaStackComponent,
    MenteBonitaResultsComponent,
    MenteBonitaCtaComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-project-header
      ctaLabel="Ver Demo Live"
      ctaUrl="https://mentebonita.com/"
    />

    <app-mente-bonita-hero />
    <app-mente-bonita-problem />
    <app-mente-bonita-solution />
    <app-mente-bonita-stack />
    <app-mente-bonita-results />
    <app-mente-bonita-cta />
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
export class MenteBonitaPageComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'MenteBonita — Plataforma de Bienestar Mental',
      description:
        'Caso de estudio: MenteBonita, plataforma de bienestar mental. Desarrollo full stack con Angular, .NET y arquitectura cloud.',
      url: '/projects/mentebonita',
      keywords:
        'MenteBonita, bienestar mental, Angular, .NET, caso de estudio, Jhosetp Francisco',
    });
  }
}

import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { ProjectHeaderComponent } from '../../components/project-header.component';
import { ThaliqHeroComponent } from './sections/thaliq-hero.component';
import { ThaliqProblemComponent } from './sections/thaliq-problem.component';
import { ThaliqSolutionComponent } from './sections/thaliq-solution.component';
import { ThaliqCapabilitiesComponent } from './sections/thaliq-capabilities.component';
import { ThaliqStackComponent } from './sections/thaliq-stack.component';
import { ThaliqUseCasesComponent } from './sections/thaliq-use-cases.component';
import { ThaliqImpactComponent } from './sections/thaliq-impact.component';
import { ThaliqCtaComponent } from './sections/thaliq-cta.component';
import { SeoService } from '../../../../shared/services/seo.service';

@Component({
  selector: 'app-thaliq-page',
  standalone: true,
  imports: [
    ProjectHeaderComponent,
    ThaliqHeroComponent,
    ThaliqProblemComponent,
    ThaliqSolutionComponent,
    ThaliqCapabilitiesComponent,
    ThaliqStackComponent,
    ThaliqUseCasesComponent,
    ThaliqImpactComponent,
    ThaliqCtaComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-project-header ctaLabel="Ver Plataforma" ctaUrl="https://www.thaliq.com/" />

    <main class="page">
      <app-thaliq-hero />
      <app-thaliq-problem />
      <app-thaliq-solution />
      <app-thaliq-capabilities />
      <app-thaliq-stack />
      <app-thaliq-use-cases />
      <app-thaliq-impact />
      <app-thaliq-cta />
    </main>
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

    .page {
      padding-top: 64px;
    }
  `,
})
export class ThaliqPageComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Thaliq — Plataforma de IA Empresarial',
      description:
        'Caso de estudio: Thaliq, plataforma de inteligencia artificial para empresas. Arquitectura cloud, procesamiento de datos y automatización.',
      url: '/projects/thaliq',
      keywords:
        'Thaliq, inteligencia artificial, IA empresarial, cloud, automatización, Jhosetp Francisco',
    });
  }
}

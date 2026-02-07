import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { HeroSectionComponent } from '../components/hero-section.component';
import { StatsSectionComponent } from '../components/stats-section.component';
import { AboutSectionComponent } from '../components/about-section.component';
import { TechStackSectionComponent } from '../components/tech-stack-section.component';
import { ProjectsSectionComponent } from '../components/projects-section.component';
import { ExperienceSectionComponent } from '../components/experience-section.component';
import { ContactSectionComponent } from '../components/contact-section.component';
import { SeoService } from '../../../shared/services/seo.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    StatsSectionComponent,
    AboutSectionComponent,
    TechStackSectionComponent,
    ProjectsSectionComponent,
    ExperienceSectionComponent,
    ContactSectionComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div id="hero">
      <app-hero-section />
    </div>
    <app-stats-section />
    <app-about-section />
    <app-tech-stack-section />
    <app-projects-section />
    <app-experience-section />
    <app-contact-section />
  `,
})
export class HomePageComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Jhosetp Francisco — Senior Full Stack Developer',
      description:
        'Portfolio de Jhosetp Francisco — Senior Full Stack Developer especializado en banca, finanzas, IA y soluciones enterprise. Angular, .NET, Flutter, DevOps.',
      url: '/',
      keywords:
        'Jhosetp Francisco, Full Stack Developer, Angular, .NET, Flutter, DevOps, portfolio',
    });
  }
}

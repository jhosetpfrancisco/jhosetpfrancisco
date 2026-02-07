import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  url: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

const BASE_URL = 'https://www.jhosetpfrancisco.com';
const SITE_NAME = 'Jhosetp Francisco';
const DEFAULT_TITLE = 'Jhosetp Francisco — Senior Full Stack Developer';
const DEFAULT_DESCRIPTION =
  'Portfolio de Jhosetp Francisco — Senior Full Stack Developer especializado en banca, finanzas, IA y soluciones enterprise. Angular, .NET, Flutter, DevOps.';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly doc = inject(DOCUMENT);

  update(config: SeoConfig): void {
    const fullTitle =
      config.title === DEFAULT_TITLE
        ? config.title
        : `${config.title} — ${SITE_NAME}`;
    const fullUrl = `${BASE_URL}${config.url}`;
    const ogType = config.ogType ?? 'website';
    const twitterCard = config.twitterCard ?? 'summary';

    this.title.setTitle(fullTitle);

    this.meta.updateTag({ name: 'description', content: config.description });
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({
      property: 'og:description',
      content: config.description,
    });
    this.meta.updateTag({ property: 'og:url', content: fullUrl });
    this.meta.updateTag({ property: 'og:type', content: ogType });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    if (config.ogImage) {
      this.meta.updateTag({ property: 'og:image', content: config.ogImage });
    }

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: twitterCard });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({
      name: 'twitter:description',
      content: config.description,
    });
    if (config.ogImage) {
      this.meta.updateTag({ name: 'twitter:image', content: config.ogImage });
    }

    // Canonical
    this.updateCanonical(fullUrl);
  }

  reset(): void {
    this.title.setTitle(DEFAULT_TITLE);
    this.meta.updateTag({ name: 'description', content: DEFAULT_DESCRIPTION });
    this.meta.updateTag({
      property: 'og:title',
      content: DEFAULT_TITLE,
    });
    this.meta.updateTag({
      property: 'og:description',
      content: DEFAULT_DESCRIPTION,
    });
    this.meta.updateTag({ property: 'og:url', content: BASE_URL });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:title', content: DEFAULT_TITLE });
    this.meta.updateTag({
      name: 'twitter:description',
      content: DEFAULT_DESCRIPTION,
    });
    this.updateCanonical(BASE_URL);
  }

  private updateCanonical(url: string): void {
    let link: HTMLLinkElement | null =
      this.doc.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}

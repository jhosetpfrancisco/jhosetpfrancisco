import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollProgressComponent } from '../scroll-progress/scroll-progress.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, FooterComponent, ScrollProgressComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="layout">
      <a class="skip-link" href="#main-content">Saltar al contenido</a>
      <app-scroll-progress />
      <app-navigation />
      <main id="main-content">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  styles: `
    .layout {
      min-height: 100vh;
      background: var(--color-inverse);
      color: var(--color-inverse-fg);
      position: relative;
    }

    .skip-link {
      position: absolute;
      top: -100%;
      left: var(--space-4);
      z-index: 9999;
      padding: var(--space-3) var(--space-6);
      background: white;
      color: black;
      font-weight: var(--font-weight-medium);
      text-decoration: none;
    }

    .skip-link:focus {
      top: var(--space-4);
    }
  `,
})
export class MainLayoutComponent {}

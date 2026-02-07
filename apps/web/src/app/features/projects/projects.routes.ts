import { Route } from '@angular/router';

export const PROJECTS_ROUTES: Route[] = [
  {
    path: 'mentebonita',
    loadComponent: () =>
      import('./pages/mente-bonita/mente-bonita-page.component').then(
        (m) => m.MenteBonitaPageComponent
      ),
  },
  {
    path: 'finanzy',
    loadComponent: () =>
      import('./pages/finanzy/finanzy-page.component').then(
        (m) => m.FinanzyPageComponent
      ),
  },
  {
    path: 'thaliq',
    loadComponent: () =>
      import('./pages/thaliq/thaliq-page.component').then(
        (m) => m.ThaliqPageComponent
      ),
  },
];

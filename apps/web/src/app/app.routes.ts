import { Route } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/home/home.routes').then((m) => m.HOME_ROUTES),
      },
    ],
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./features/projects/projects.routes').then(
        (m) => m.PROJECTS_ROUTES
      ),
  },
];

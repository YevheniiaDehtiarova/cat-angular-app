import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./components/cat-view/cat-view.component').then(c => c.CatViewComponent)
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./components/cat-detail/cat-detail.component').then(c => c.CatDetailComponent)
  }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'loading', pathMatch: 'full' },
  { 
    path: 'loading', 
    loadComponent: () => import('./loading/loading.component').then(m => m.LoadingComponent) 
  },
  { 
    path: 'login', 
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) 
  },
  {
    path: 'app',
    loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
    children: [
      { path: '', redirectTo: 'news', pathMatch: 'full' },
      { 
        path: 'news', 
        loadComponent: () => import('./features/news/news.component').then(m => m.NewsComponent) 
      },
      { 
        path: 'participants', 
        loadComponent: () => import('./features/participants/participants.component').then(m => m.ParticipantsComponent) 
      },
      { 
        path: 'evaluation', 
        loadComponent: () => import('./features/evaluation/evaluation.component').then(m => m.EvaluationComponent) 
      },
    ]
  },
  { path: '**', redirectTo: 'login' } 
];

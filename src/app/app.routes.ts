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
      { path: '', redirectTo: 'Neuigkeiten', pathMatch: 'full' },
      { 
        path: 'Neuigkeiten', 
        loadComponent: () => import('./features/news/news.component').then(m => m.NewsComponent) 
      },
      { 
        path: 'Teilnehmer-Listen', 
        loadComponent: () => import('./features/participants/participants.component').then(m => m.ParticipantsComponent),
        children: [
          { 
            path: ':item',
            loadComponent: () => import('./features/participants/participants-details/participants-details.component').then(m => m.ParticipantsDetailsComponent)
          }
        ]
      },
      { 
        path: 'Bewertung', 
        loadComponent: () => import('./features/evaluation/evaluation.component').then(m => m.EvaluationComponent) 
      },
      {
        path: 'Gewerk',
        loadComponent: () => import('./features/trades/trades.component').then(m => m.TradesComponent),
        children: [
          {
            path: ':item',
            loadComponent: () => import('./features/trades/trade-detail/trade-detail.component').then(m => m.TradeDetailComponent)
          }
        ]
      },
      {
        path: 'Firmen',
        loadComponent: () => import('./features/companies/companies.component').then(m => m.CompaniesComponent),
        children: [
          {
            path: ':item',
            loadComponent: () => import('./features/companies/company-detail/company-detail.component').then(m => m.CompanyDetailComponent)
          }
        ]
      }
    ]
  },
  { path: '**', redirectTo: 'login' } 
];

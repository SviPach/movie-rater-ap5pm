import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'ratings',
        loadComponent: () =>
          import('../ratings/ratings.page').then((m) => m.RatingsPage),
      },
      {
        path: 'history',
        loadComponent: () =>
          import('../history/history.page').then((m) => m.HistoryPage),
      },
      {
        path: 'stats',
        loadComponent: () =>
          import('../stats/stats.page').then((m) => m.StatsPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
      {
        path: 'movie/:id',
        loadComponent: () =>
          import('../movie-details/movie-details.page').then(
            (m) => m.MovieDetailsPage,
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
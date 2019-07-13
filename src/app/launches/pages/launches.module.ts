import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LaunchesPage } from './launches.page';
import { LaunchResolver } from '../resolvers/launch.resolver';

const routes: Routes = [
  {
    path: 'launches',
    component: LaunchesPage,
    children: [
      {
        path: 'next',
        loadChildren: './next/next.module#NextPageModule'
      },
      {
        path: 'upcoming',
        loadChildren: './upcoming/upcoming.module#UpcomingPageModule'
      },
      {
        path: 'past',
        loadChildren: './past/past.module#PastPageModule'
      },
      {
        path: ':id',
        loadChildren: './launch-details/launch-details.module#LaunchDetailsPageModule',
        resolve: {
          launch : LaunchResolver
        }
      },

    ]
  },
  {
    path: '',
    redirectTo: '/launches/next',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LaunchesPage],
})
export class LaunchesPageModule { }

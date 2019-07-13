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
        loadChildren: './next-launches/next-launches.module#NextLaunchesPageModule'
      },
      {
        path: 'upcoming',
        loadChildren: './upcoming-launches/upcoming-launches.module#UpcomingLaunchesPageModule'
      },
      {
        path: 'past',
        loadChildren: './past-launches/past-launches.module#PastLaunchesPageModule'
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

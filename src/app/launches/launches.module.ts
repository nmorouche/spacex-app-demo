import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LaunchesPage } from './launches.page';

const routes: Routes = [
  {
    path: 'launches',
    component: LaunchesPage,
    children: [
      {
        path: 'upcoming',
        loadChildren: './launches/upcoming-launches/upcoming-launches.module#UpcomingLaunchesPageModule'
      },
      {
        path: 'past',
        loadChildren: './launches/past-launches/past-launches.module#PastLaunchesPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'launches/upcoming',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LaunchesPage]
})
export class LaunchesPageModule { }

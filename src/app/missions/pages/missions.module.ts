import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MissionsPage } from './missions.page';
import { MissionResolver } from '../resolvers/mission.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MissionsPage
      },
      {
        path: ':id',
        loadChildren: './details/details.module#DetailsPageModule',
        resolve: {
          mission: MissionResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MissionsPage]
})
export class MissionsPageModule { }

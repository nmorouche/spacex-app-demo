import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MissionsPage } from './missions.page';
import { MissionResolver } from '../resolvers/mission.resolver';
import { CoreModule } from 'src/app/app-core/core.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';


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
        loadChildren: './mission-details/mission-details.module#MissionDetailsPageModule',
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
    RouterModule.forChild(routes),
    CoreModule,
    NgxJsonViewerModule
  ],
  declarations: [MissionsPage]
})
export class MissionsPageModule { }

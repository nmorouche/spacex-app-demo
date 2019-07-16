import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PadsPage } from './pads.page';

const routes: Routes = [
  {
    path: '',
    component: PadsPage,
    children: [
      {
        path: 'launch-pads',
        loadChildren: './launch-pads/launch-pads.module#LaunchPadsPageModule'
      },
      {
        path: 'land-pads',
        loadChildren: './land-pads/land-pads.module#LandPadsPageModule'
      },
      {
        path: '',
        redirectTo: '/pads/launch-pads',
        pathMatch: 'full'
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
  declarations: [PadsPage]
})
export class PadsPageModule { }

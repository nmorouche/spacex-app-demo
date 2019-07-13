import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { IonicModule } from '@ionic/angular';

import { LaunchDetailsPage } from './launch-details.page';

const routes: Routes = [
  {
    path: '',
    component: LaunchDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxJsonViewerModule
  ],
  declarations: [LaunchDetailsPage]
})
export class LaunchDetailsPageModule {}

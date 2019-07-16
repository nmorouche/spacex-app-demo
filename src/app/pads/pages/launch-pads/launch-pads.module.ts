import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LaunchPadsPage } from './launch-pads.page';

const routes: Routes = [
  {
    path: '',
    component: LaunchPadsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LaunchPadsPage]
})
export class LaunchPadsPageModule {}

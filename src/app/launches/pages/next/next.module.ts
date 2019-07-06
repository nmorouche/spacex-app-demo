import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NextPage } from './next.page';
import { SharedModule } from 'src/app/shared/components/shared.module';

const routes: Routes = [
  {
    path: '',
    component: NextPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [NextPage]
})
export class NextPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SecondPage } from './second.page';

const routes: Routes = [
  {
    path: '',
    component: SecondPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'

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
  declarations: [SecondPage]
})
export class SecondPageModule {}

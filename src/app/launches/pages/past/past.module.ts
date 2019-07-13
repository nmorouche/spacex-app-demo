import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PastPage } from './past.page';
import { CoreModule } from '../../../core/core.module';


const routes: Routes = [
  {
    path: '',
    component: PastPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CoreModule,
  ],
  declarations: [PastPage]
})
export class PastPageModule {}

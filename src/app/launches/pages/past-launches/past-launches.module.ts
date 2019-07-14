import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CoreModule } from '../../../app-core/core.module';
import { PastLaunchesPage } from './past-launches.page';

const routes: Routes = [
  {
    path: '',
    component: PastLaunchesPage
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
  declarations: [PastLaunchesPage]
})
export class PastLaunchesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpcomingLaunchesPage } from './upcoming-launches.page';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { CoreModule } from '../../../app-core/core.module';

const routes: Routes = [
  {
    path: '',
    component: UpcomingLaunchesPage
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
  declarations: [UpcomingLaunchesPage]
})
export class UpcomingLaunchesPageModule {}

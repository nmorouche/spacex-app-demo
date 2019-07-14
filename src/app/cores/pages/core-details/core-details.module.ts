import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { IonicModule } from '@ionic/angular';
import { CoreDetailsPage } from './core-details.page';

const routes: Routes = [
  {
    path: '',
    component: CoreDetailsPage
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
  declarations: [CoreDetailsPage]
})
export class CoreDetailsPageModule {}

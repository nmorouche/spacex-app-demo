import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { IonicModule } from '@ionic/angular';
import { CoresPage } from './cores.page';
import { LaunchResolver } from 'src/app/launches/resolvers/launch.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CoresPage
      },
      {
        path: ':id',
        loadChildren: './core-details/core-details.module#CoreDetailsPageModule',
      },
      {
        path: 'launch/:id',
        loadChildren: '../../launches/pages/launch-details/launch-details.module#LaunchDetailsPageModule',
        resolve: {
          launch: LaunchResolver
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
    NgxJsonViewerModule
  ],
  declarations: [CoresPage]
})
export class CoresPageModule { }

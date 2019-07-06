import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SkeletonLoaderComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    IonicModule
  ],
  exports: [
    SkeletonLoaderComponent
  ]
})
export class SharedModule { }

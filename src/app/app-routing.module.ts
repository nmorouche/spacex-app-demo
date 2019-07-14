import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './launches/pages/launches.module#LaunchesPageModule' },
  { path: 'missions', loadChildren: './missions/pages/missions.module#MissionsPageModule' },
  { path: 'about', loadChildren: './core/pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './core/pages/settings/settings.module#SettingsPageModule' },
  { path: 'history', loadChildren: './history/pages/historical-events/historical-events.module#HistoricalEventsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'virtualmirror/:folder/:imageUrl/:type/:height/:width/:api', loadChildren: './virtualmirror/virtualmirror.module#VirtualmirrorPageModule' },
  { path: 'recommendation/:age/:name/:gender', loadChildren: './recommendation/recommendation.module#RecommendationPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

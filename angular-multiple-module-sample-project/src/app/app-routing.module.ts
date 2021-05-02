import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { UrlBaseCustomPreloadingService } from './core/url-base-custom-preloading.service';

const routes: Routes = [{
  path:'student', loadChildren: ()=> import('./student/student.module').then(m=>m.StudentModule),  data: { preload: true }
}, {
  path:'collage', loadChildren: ()=> import('./collage/collage.module').then(m=>m.CollageModule),  data: { preload: true }
}];

// if you do not want to UrlBaseCustomPreloadingService, Use the PreloadAllModules which is given by the angular

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: UrlBaseCustomPreloadingService
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }

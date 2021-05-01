import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollageHomeComponent } from './collage-home/collage-home.component';

const routes: Routes = [{
  path:'', component:CollageHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollageRoutingModule { }

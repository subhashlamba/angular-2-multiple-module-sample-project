import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path:'student', loadChildren: ()=> import('./student/student.module').then(m=>m.StudentModule)
},
{
  path:'collage', loadChildren: ()=> import('./collage/collage.module').then(m=>m.CollageModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

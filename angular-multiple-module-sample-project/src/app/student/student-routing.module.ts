import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentHomeComponent } from './components/student-home/student-home.component';

const routes: Routes = [
  {path:'', component:StudentHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

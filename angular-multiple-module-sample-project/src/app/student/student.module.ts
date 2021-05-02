import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StudentHomeComponent } from './components/student-home/student-home.component';


@NgModule({
  declarations: [StudentHomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }

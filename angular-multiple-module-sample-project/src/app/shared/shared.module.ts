import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsPipe } from './user-details.pipe';



@NgModule({
  declarations: [UserDetailsPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[UserDetailsPipe]
})
export class SharedModule { }

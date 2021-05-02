import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDetailsPipe } from './user-details.pipe';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [UserDetailsPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports:[UserDetailsPipe,TranslateModule]
})
export class SharedModule { }

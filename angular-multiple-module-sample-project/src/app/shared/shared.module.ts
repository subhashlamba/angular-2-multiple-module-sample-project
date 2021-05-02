import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsPipe } from './user-details.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [UserDetailsPipe, HeaderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports:[UserDetailsPipe,TranslateModule,HeaderComponent]
})
export class SharedModule { }

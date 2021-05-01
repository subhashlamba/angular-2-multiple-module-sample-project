import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollageRoutingModule } from './collage-routing.module';
import { CollageHomeComponent } from './collage-home/collage-home.component';


@NgModule({
  declarations: [CollageHomeComponent],
  imports: [
    CommonModule,
    CollageRoutingModule
  ]
})
export class CollageModule { }

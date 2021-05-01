import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollageRoutingModule } from './collage-routing.module';
import { CollageHomeComponent } from './collage-home/collage-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CollageHomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    CollageRoutingModule
  ]
})
export class CollageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollageRoutingModule } from './collage-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CollageHomeComponent } from './components/collage-home/collage-home.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/order/', '.json');
}

@NgModule({
  declarations: [CollageHomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    CollageRoutingModule
    
  ]
})
export class CollageModule { }

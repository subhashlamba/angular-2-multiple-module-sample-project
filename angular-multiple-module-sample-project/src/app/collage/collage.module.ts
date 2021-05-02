import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollageRoutingModule } from './collage-routing.module';
import { CollageHomeComponent } from './collage-home/collage-home.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

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

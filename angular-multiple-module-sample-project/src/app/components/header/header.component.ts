import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translate:TranslateService,
     @Inject(DOCUMENT) private document: Document) { }
 
  ngOnInit(): void {
  }

  onChangeLanguage(event:any){
    this.useLanguage(event.target.value);
  }

  useLanguage(lang: string): void {
    let htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.translate.use(lang);
  }
}

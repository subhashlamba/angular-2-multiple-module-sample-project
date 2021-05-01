import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/login.service';

@Component({
  selector: 'app-collage-home',
  templateUrl: './collage-home.component.html',
  styleUrls: ['./collage-home.component.scss']
})
export class CollageHomeComponent implements OnInit {

  userDetail:any;

  constructor(public loginService:LoginService) { }
  ngOnInit(): void {
    this.userDetail = this.loginService.getLoginDetails();
  }

}

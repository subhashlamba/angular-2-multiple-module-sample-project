import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/login.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {

  userDetail:any;

  constructor(public loginService:LoginService) { }
  ngOnInit(): void {
    this.userDetail = this.loginService.getLoginDetails();
  }

}

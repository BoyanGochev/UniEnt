import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  loginHandler(data) {
    this.userService.login(data).subscribe(
      userInfo => {
        this.userService.setUserAuth(userInfo);
        this.router.navigate(['/']);
      }
    );
  }

  ngOnInit() {
  }

}

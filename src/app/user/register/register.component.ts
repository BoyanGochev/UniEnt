import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../user.service';

function passwordMatch(c: AbstractControl) {
  return c.value.password === c.value.rePassword ? null : { passwordMatch: true };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.registerForm = fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      passwords: fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        rePassword: ['', Validators.required]
      }, { validators: [passwordMatch] })
    });
  }

  registerHandler(data) {
    this.userService.registerUser(data).subscribe(
      userInfo => {
        this.userService.setUserAuth(userInfo);
        this.router.navigate(['/']);
      }
    );
  }

  ngOnInit() {
  }

}

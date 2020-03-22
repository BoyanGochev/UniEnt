import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isLoggedIn: boolean;
  username: string;

  constructor(
    private router: Router
  ) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoggedIn = sessionStorage.getItem('authtoken') !== null;
        this.username = sessionStorage.getItem('username');
      }
    });
  }

  logoutHandler() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}

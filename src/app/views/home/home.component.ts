import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/events/events.service';
import { EventModel } from 'src/app/shared/events.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events: EventModel;
  isLoggedIn: boolean;
  size: number;

  constructor(
    private router: Router,
    private eventsService: EventsService
  ) {
    this.isLoggedIn = sessionStorage.getItem('authtoken') !== null;
  }

  ngOnInit() {
    this.eventsService.getEvents().subscribe(
      (res: any) => {
        this.events = res;
        this.size = Object.keys(this.events).length;
      }
    );
  }

}

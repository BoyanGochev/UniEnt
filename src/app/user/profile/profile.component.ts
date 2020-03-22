import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/events/events.service';
import { EventModel } from 'src/app/shared/events.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  events: EventModel[];
  username: string;
  myEvents: Array<any>;
  userId: string;

  constructor(
    private eventsService: EventsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userId = sessionStorage.getItem('userId');
    this.username = sessionStorage.getItem('username');
    this.eventsService.getEvents().subscribe(
      (res: any) => {

        this.events = res;

        console.log(this.events);

        this.myEvents = this.events.filter((e) => e.organizer === this.username);
      }
    );

  }

}

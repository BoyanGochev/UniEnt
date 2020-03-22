import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organize-event',
  templateUrl: './organize-event.component.html',
  styleUrls: ['./organize-event.component.scss']
})
export class OrganizeEventComponent implements OnInit {

  constructor(
    private eventsService: EventsService,
    private router: Router
  ) { }

  createHandler(data) {
    this.eventsService.createEvent(data).subscribe(
      res => {
        this.router.navigate(['/']);
      }
    );
  }

  ngOnInit() {
  }

}

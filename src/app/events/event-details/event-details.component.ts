import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../events.service';
import { EventModel } from 'src/app/shared/events.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  event: EventModel;
  isOrganizer: boolean;
  isReady = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private eventsService: EventsService
  ) { }

  deleteHandler(id: string) {
    this.eventsService.deleteEvent(id).subscribe(
      res => {
        this.router.navigate(['/']);
      }
    );
  }

  joinHandler(id: string) {
    this.event.peopleInterestedIn += 1;
    this.eventsService.editEvent(this.event, id).subscribe(
      res => {
        this.router.navigate(['/']);
      }
    );
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.eventsService.getEvent(id).subscribe(
      (res: any) => {
        this.event = res;
        this.isOrganizer = sessionStorage.getItem('username') === this.event.organizer;
        this.isReady = true;
      }
    );
  }

}

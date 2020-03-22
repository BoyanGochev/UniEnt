import { Component, OnInit } from '@angular/core';
import { EventModel } from 'src/app/shared/events.model';
import { EventsService } from '../events.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.scss']
})
export class EditEventsComponent implements OnInit {

  event: EventModel;
  id: string;

  constructor(
    private eventsService: EventsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  editHandler(data) {
    this.eventsService.editEvent(data, this.id).subscribe(
      res => {
        this.router.navigate(['/']);
      }
    );
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.eventsService.getEvent(this.id).subscribe(
      (res: any) => {
        this.event = res;
      }
    );
  }

}

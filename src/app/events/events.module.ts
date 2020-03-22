import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizeEventComponent } from './organize-event/organize-event.component';
import { EditEventsComponent } from './edit-events/edit-events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [OrganizeEventComponent, EditEventsComponent, EventDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class EventsModule { }

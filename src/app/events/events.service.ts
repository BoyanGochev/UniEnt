import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventModel } from '../shared/events.model';
import { environment } from '../../environments/environment';

const baseUrl = environment.baseUrl;
const appKey = environment.appKey;

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  event: EventModel;
  eventsUrl = `${baseUrl}/appdata/${appKey}/events`;

  get httpKinveyOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: `Kinvey ${sessionStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      })
    };
  }

  constructor(
    private http: HttpClient
  ) { }

  createEvent(input) {
    this.event = input;
    this.event.peopleInterestedIn = 1;
    this.event.organizer = sessionStorage.getItem('username');
    return this.http.post(this.eventsUrl, JSON.stringify(this.event), this.httpKinveyOptions);
  }

  editEvent(input, id) {
    this.event = input;
    return this.http.put(`${this.eventsUrl}/${id}`, JSON.stringify(this.event), this.httpKinveyOptions);
  }

  getEvents() {
    return this.http.get(this.eventsUrl, this.httpKinveyOptions);
  }

  getEvent(id) {
    return this.http.get(`${this.eventsUrl}/${id}`, this.httpKinveyOptions);
  }

  deleteEvent(id) {
    return this.http.delete(`${this.eventsUrl}/${id}`, this.httpKinveyOptions);
  }
}

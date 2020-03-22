import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { OrganizeEventComponent } from './events/organize-event/organize-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EditEventsComponent } from './events/edit-events/edit-events.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
   path: 'login',
   component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'create',
    component: OrganizeEventComponent
  },
  {
    path: 'details/:id',
    component: EventDetailsComponent
  },
  {
    path: 'edit/:id',
    component: EditEventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

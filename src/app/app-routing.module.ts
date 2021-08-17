import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingDialogComponent } from './booking-dialog/booking-dialog.component';
import { MeetingRoomsComponent } from './meeting-rooms/meeting-rooms.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  {
    path: 'booking',
    component: BookingDialogComponent
  },
  {
    path: 'room-detail',
    component: RoomsComponent
  },
  {
    path: '',
    component: MeetingRoomsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
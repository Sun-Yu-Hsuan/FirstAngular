// We’ve defined a component with a custom tag, added the tag to our HTML but we haven’t told Angular that we want to use Angular on this page.
// To do that we need to do something called bootstrapping.

// In Angular your code is structured into packages called Angular Modules, or NgModules for short. Every app requires at least one module, the root module
// imports
// The other Angular Modules that export material we need in this Angular Module. Almost every application’s root module should import the BrowserModule.

// declarations
// The list of components or directives belonging to this module.

// bootstrap
// Identifies the root component that Angular should bootstrap when it starts the application.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetingRoomsComponent } from './meeting-rooms/meeting-rooms.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BookingDialogComponent } from './booking-dialog/booking-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MeetingRoomsComponent,
    RoomsComponent,
    BookingDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule,
    NgbModule,
   ],
  providers: [],
  exports: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }

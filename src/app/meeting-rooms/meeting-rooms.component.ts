// Every @___ should be
import { stringify } from '@angular/compiler/src/util';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeetingService } from '../meeting.service';

// Define which tag (it is use in html, ex <app-meeting-rooms>) to control, and the html tempate & style css
@Component({
  selector: 'app-meeting-rooms',
  templateUrl: './meeting-rooms.component.html',
  styleUrls: ['./meeting-rooms.component.scss']
})

// Use class "MeetingRoomsComponent" to control the selector that define in the @Component.
// REF:https://codecraft.tv/courses/angular/quickstart/first-app/s
export class MeetingRoomsComponent implements OnInit {

  dummyData: any[] = [
    {id: 1, room: "Tokyo", class: 'tokyo',url: 'https://stillmed.olympics.com/media/Images/OlympicOrg/News/2021/03/11/2020-03-11-Session-Tokyo-thumbnail.jpg?interpolation=lanczos-none&resize=2120:1200'},
    {id: 2, room: "Dresden", class: 'dresden', url: 'https://www.cruisemapper.com/images/ports/3976-large-d9bed9294f487ca32c91e38760d6c240.jpg'},
    {id: 3, room: "Moscow", class: 'moscow', url: 'https://img.nordangliaeducation.com/resources/asia/_filecache/f06/01a/219211-cropped-w1920-h488-of-1-FFFFFF-moscow.jpg'}
  ]

  // dummyData: any[];
  // show: string; 
  // This tells Angular that the joke property is an input property and 
  // therefore in HTML we can bind to it using the [] input property binding syntax.
  // This @Input now becomes part of the public interface of our component.

  show = false; 
  roomName = 'T';
  // typeStatus: any;
  
  constructor(
    private router: Router,
    private meetingService: MeetingService
  ) { }

  ngOnInit(): void {
    console.log('data', this.dummyData);
  }
  
  showUI = (roomName: string) => {
    this.roomName = roomName;
    console.log('app-meeting-rooms = ' + roomName);
  }
  
  showAllUI = () => {
    this.show = !this.show;
  }
  // This function will naviagte to the another page though the path in router
  // router.navigate(['/path_in_router'])
  booking(): void{
    this.router.navigate(['/booking']);
  }
// This function will send an "get" API to get info.
  govInfo(): void{
    this.meetingService.testGetAPI().subscribe(res => {
      console.log(res);
    })
  }

  // This function will send an "post" API to post info get from get API.
  sendInfo(room?: any): void{
    console.log(room);
    this.meetingService.testPostAPI(room).subscribe(res => {
      console.log(res);
    });
  }

}

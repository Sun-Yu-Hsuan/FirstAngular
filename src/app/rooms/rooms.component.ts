import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
// class bookList {
//   room!: string;
//   date!: string;
//   time!: string;
//   opcode!: string;
//   constructor(room: string, date: string, time: string, opcode: string) {
//     this.room = room;
//     this.date = date;
//     this.time = time;
//     this.opcode = opcode;
//   }
// }
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})

// classes are blueprints for objects, or in other words instructions for how to create an object. 
// To actually create an object using a class we use the new keyword, like so:
// EX, let joke = new JokeComponent()
export class RoomsComponent implements OnInit {
  // roomName: any;
  @Input() roomName: any;
  // @Input()
  // get roomName(): any{ return this.roomName; }
  // set roomName(room: any){
  //   this.roomName = room && room.trim();
  // }
   // @Input() typeStatus: string | undefined;
  bookingList: any;
  bookingList2: any;
  filteredList: any;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
   }

  ngOnInit(): void {

    console.log('app-rooms' + this.roomName);
    this.bookingList = [
      { room: 'tokyo',   startDate: new Date('2021-05-31 10:00'), endDate: new Date('2021-05-31 10:30'), opcode: 'RC' },
      { room: 'tokyo',   startDate: new Date('2021-06-01 10:00'), endDate: new Date('2021-06-01 10:30'), opcode: 'RC' },
      { room: 'tokyo',   startDate: new Date('2021-06-03 10:00'), endDate: new Date('2021-06-03 10:30'), opcode: 'RC' },
      { room: 'dresden', startDate: new Date('2021-07-05 16:00'), endDate: new Date('2021-06-05 17:30'), opcode: 'LW' },
      { room: 'dresden', startDate: new Date('2021-07-07 16:00'), endDate: new Date('2021-07-07 17:30'), opcode: 'LW' },
      { room: 'moscow',  startDate: new Date('2021-06-03 11:30'), endDate: new Date('2021-06-03 13:00'), opcode: 'RC' },
      { room: 'moscow',  startDate: new Date('2021-07-05 11:30'), endDate: new Date('2021-06-05 13:00'), opcode: 'KLU' },
      { room: 'moscow',  startDate: new Date('2021-07-07 11:30'), endDate: new Date('2021-07-07 13:00'), opcode: 'KLU' },
      // new bookList('dresden', '2021-07-11', '16:00 - 17:00', 'LW'),
      // new bookList('dresden', '2021-07-12', '16:00 - 17:00', 'LW'),
    ];
    
  //   // this.filteredList = this.bookingList.filter(res => { return res['room'] === this.roomName } );
  //   this.filteredList = this.bookingList.filter((res: { room: string | undefined; }) =>  res.room === this.roomName );

  //   this.bookingList2 = [
  //     new bookList('Dresden', '2021-07-11', '16:00 - 17:00', 'KLU'),
  //     new bookList('Dresden', '2021-07-12', '16:00 - 17:00', 'KLU'),
  //   ];
  }
}
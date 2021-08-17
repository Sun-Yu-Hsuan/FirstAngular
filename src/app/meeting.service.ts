import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  api = 'https://tpeoc.blob.core.windows.net/blobfs/GetFTDDamData.json';
  constructor(
    private httpClient: HttpClient
  ) { }


testGetAPI(): Observable<any> {
  return this.httpClient.get(this.api)
}

testPostAPI(data: any): Observable<any> {
  return this.httpClient.post(this.api, data)
}

data = () => {
  return [
    {id: 1, room: "Tokyo", class: 'tokyo',url: 'https://pix10.agoda.net/hotelImages/43322/0/0a1ae728c76ec0150a8ccbcd8b5a7ee4.jpg?s=1024x768'},
    {id: 2, room: "Dresden", class: 'dresden', url: 'https://content.r9cdn.net/rimg/dimg/ab/27/01df0ad9-city-18925-165428b654b.jpg?width=1750&height=1000&xhint=1589&yhint=850&crop=true'},
    {id: 3, room: "Moscow", class: 'moscow', url: 'https://www.umultirank.org/export/sites/default/.galleries/generic-images/Others/Winter-Calendar/moscow-1556561_1280.jpg_2040980717.jpg'}
  ]
}
}
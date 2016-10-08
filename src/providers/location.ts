import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Location provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Location {


  constructor(public http: Http) {
    console.log('Hello Location Provider');
  }

  reportLocation(location: Coordinates) {
    this.http.post('http://localhost:9000/api/locations',
      {
        lat: location.lat,
        lng: location.lng
      }
    ).subscribe(response => {
      console.log(response);
    });

    //TODO: make this configurable, and in a central configuration spot.
  }
}

export class Coordinates {

  constructor(public lat?: number, public lng?: number){}

  public get latitude(): number {
    return this.lat;
  }

  public set latitude(val: number) {
    this.lat = val;
  }

  public get longitude(): number {
    return this.lng;
  }

  public set longitude(val: number) {
    this.lng = val;
  }
  
}

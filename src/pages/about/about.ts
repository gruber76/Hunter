import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Subject} from 'rxjs/Subject';

import { Platform } from 'ionic-angular';

import { Location, Coordinates } from '../../providers/location';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [Location]
})
export class AboutPage {

  constructor(public navCtrl: NavController, platform: Platform, private location: Location) {


    let aSubject: Subject<any> = this.haveFun();

    platform.ready().then(() => {

      navigator.geolocation.getCurrentPosition(function (resp) {
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
        aSubject.next(resp);
        let myCoordinates: Coordinates = new Coordinates();
        myCoordinates.latitude = resp.coords.latitude;
        myCoordinates.longitude = resp.coords.longitude;
        location.reportLocation(new Coordinates(resp.coords.latitude, resp.coords.longitude));
      });

      console.log('sure');
    });

  }


  public haveFun(): Subject<any> {
    var mySubject: Subject<any> = new Subject();

    mySubject.subscribe(function(x) {
      console.log(x);
    })

    return mySubject;
  }
}

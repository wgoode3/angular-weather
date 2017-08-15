import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

var key = 'a064cf52b7b8597656c940a535530d05';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather(location: string) {
    // console.log(`http://api.openweathermap.org/data/2.5/weather?q=${ location }&appid=${ key }`);
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${ location }&appid=${ key }`)
      .map(data => data.json())
      .toPromise();  
  }

}
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import 'rxjs/add/operator/switchMap';

var locations = {
  seattle: 'Seattle,WA',
  sanjose: 'Sanjose,CA',
  burbank: 'Burbank,CA',
  dallas: 'Dallas,TX',
  dc: 'Washington,DC',
  chicago: 'Chicago,IL',
  tulsa: 'Tulsa,OK'
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  result = null;
  c = true;

  constructor(private _route: ActivatedRoute, private _weatherService: WeatherService) {
    this._route.paramMap
      .switchMap(params => {
        // console.log("weather location is: ", params.get('location'));
        return this._weatherService.getWeather(locations[params.get('location')]);
    })
    .subscribe(result => this.result = result);
  }

  ngOnInit() {
  }

  convert(bool){
    this.c = bool;
  }

}

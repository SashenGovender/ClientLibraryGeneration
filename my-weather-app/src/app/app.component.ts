import { Component } from '@angular/core';
import { WeatherForecastClient } from './sdk/sdk-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-weather-app';
  weatherData: string = "empty"

  constructor(private _weatherClient: WeatherForecastClient) {
  }

  onGetWeatherClick() {
    this._weatherClient.getNumber2().subscribe(result => {
      this.weatherData = JSON.stringify(result);
    })
  }
}

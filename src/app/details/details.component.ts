import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../services/weather/weather.service';
import { Subscription } from 'rxjs';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  city: string;
  state: string;
  temp: string;
  hum: number;
  wind: number;

  today: string;

  day1Name: string;
  day1State: string;
  day1Temp: string;

  
  day2Name: string;
  day2State: string;
  day2Temp: number;

  day3Name: string;
  day3State: string;
  day3Temp: number;

  day4Name: string;
  day4State: string;
  day4Temp: number;

  day5Name: string;
  day5State: string;
  day5Temp: number;

  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  sub4: Subscription;
  sub5: Subscription;

  constructor(public activeRouter: ActivatedRoute, public weather: WeatherService) { }

  ngOnInit() {
    const todayNumberInDay = new Date().getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Fri', 'Sat'];
    this.today = days[todayNumberInDay];

    this.activeRouter.paramMap.subscribe((route: any) => {
      this.city = route.params.city;
      this.sub1 = this.weather.getWeatherState(this.city).subscribe((state) => this.state = state);
      this.sub2 = this.weather.getWeatherState(this.city).subscribe((temperature) => this.temp = temperature)
    });
  }

  ngOnDestroy() {
  }
}

import { HttpClient ,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class WeatherProvider {
city="";
  url='http://api.openweathermap.org/data/2.5/weather?q=';
  appid='&&appid=bc2cd6fd9833d423108835c388a35bab';
  constructor(public http: HttpClient) {
      
  }
getWeather(city:string){
  return this.http.get(this.url+city+',za'+this.appid);
}

// forecast(cityId:string,numberOfDays:number){
// let url = this.url+ 'forecast/daily';
// url+='appid=' + this.appid;
// url+='&id=' + cityId;
// url+='&cnt=' + numberOfDays 

// return this.http.get(url);
// }

}

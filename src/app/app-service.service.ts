import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get('https://run.mocky.io/v3/1fd068d7-cbb2-4ceb-b697-da7fcc1c520b')
  }
}

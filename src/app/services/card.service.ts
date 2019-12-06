import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// export enum SearchType {
//   all = '',
//   movie = 'movie',
//   series = 'series',
//   episode = 'episode',
  

// }



@Injectable({
  providedIn: 'root'
})



export class CardService {
  url = "http://www.omdbapi.com";
  apiKey = "8883e4b1";


  constructor(private http: HttpClient) { }

    searchData(): Observable<any> {

      return this.http.get(`http://www.omdbapi.com/?s=cats&apikey=8883e4b1`)
        .pipe(map(results => {
          console.log('Raw data: ', results);
          return results['Search'];
        })
        );
    }

    getDetails(id){
      return this.http.get(`${this.url}?i=${id}&plot=medium&apikey=${this.apiKey}`)
    }



  
}

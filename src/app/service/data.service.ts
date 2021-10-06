import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
    apiURL = 'http://localhost:4200';
   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  constructor(
    private http: HttpClient
  ) {}
    /** GET heroes from the server */
    getDatas() {
        // return this.http.get<TableDatas[]>('../table/assests/table.json')
        //   .pipe(
        //     tap(_ => this.log('fetched heroes')),
        //     catchError(this.handleError<TableDatas[]>('getTabeleDatas', []))
        //   );
          return this.http.get('assets/json/table.json');
      }
      getTabeleDatas() {
        // return this.http.get<TableDatas[]>('../table/assests/table.json')
        //   .pipe(
        //     tap(_ => this.log('fetched heroes')),
        //     catchError(this.handleError<TableDatas[]>('getTabeleDatas', []))
        //   );
          return this.http.get('assets/json/table.json');
      }
 
      private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
    
      /** Log a HeroService message with the MessageService */
      private log(message: string) {
          console.log("message",message)
        //this.messageService.add(`HeroService: ${message}`);
      }


 
}

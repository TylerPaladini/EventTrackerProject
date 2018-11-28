import { Injectable } from '@angular/core';
import { Fishingday } from './models/fishingday';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FishingdayService {

  // Fields
  private fishingday: Fishingday[] = [];

  private baseUrl = 'http://localhost:8082/';
  private url = this.baseUrl + 'api/fishingdays';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'

    })
  };



  constructor(private http: HttpClient) { }



// show all fishing days
  public index() {
    return this.http.get<Fishingday[]>(this.url + '?sorted=true')
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Unable to list fishing days');
      })
    );
  }


  // create a new fishing day
  public createNewDay(fishingday: Fishingday) {

    return this.http.post<Fishingday>(this.url, fishingday, this.httpOptions)
    .pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('Unable to create fishing day');
      })
    );
  }
// delete fishing day by ID
  public destroy(id: number) {
    return this.http.delete(this.url + '/' + id )
    .pipe (
      catchError((err: any) => {
        console.log(err);
        return throwError('Error deleting fishing day');
      })
    );
  }

  // update a fishing day
  public update(fishingday: Fishingday) {
    return this.http.patch<Fishingday>(this.url + '/' + fishingday.id, fishingday, this.httpOptions)
    .pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('Error updating fishing day');
      })
    );

  }

  handleError(error: any) {
    console.error('Something Broke');
    return throwError(error.json().error || 'Server Error');
  }
}

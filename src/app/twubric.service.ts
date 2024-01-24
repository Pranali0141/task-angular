import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwubricService {

  private apiUrl =
    'https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json';

  constructor(private http: HttpClient) {}

  getTwubricData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

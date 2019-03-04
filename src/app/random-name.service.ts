import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class RandomNameService {

  constructor(private http: HttpClient) { }

  public getNamesJSON(): Observable<any> {
    return this.http.get('./assets/names.json');
  }
}

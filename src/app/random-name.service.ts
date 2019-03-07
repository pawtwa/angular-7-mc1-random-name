import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class RandomNameService {

  constructor(private http: HttpClient) { }

  public getNamesJSONasObservable(): Observable<any> {
    return this.http.get('./assets/names.json');
  }

  public getNamesJSONasPromise(): Promise<any> {
    return new Promise((resolve, reject) => {
        this.http.get('./assets/names.json')
            .subscribe((data) => {
                resolve(data);
            });
    });
  }
}

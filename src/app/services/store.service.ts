import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '../models/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  url = 'http://localhost:3000/api/store';

  constructor(private http: HttpClient) { }

  getStore(){
    return this.http.get<Store[]>(this.url)
  };
}

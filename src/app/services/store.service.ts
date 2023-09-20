import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceStore } from '../models/store.interface';
import { map } from 'rxjs';
import { Store } from '../models/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  url: string = 'http://localhost:3000/api/store';

  constructor(private http: HttpClient) { }
  
  getStore() {
    return this.http.get<Store[]>(this.url)
  };

}
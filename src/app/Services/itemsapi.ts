import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cars } from '../Models/interface';
import { environment } from '../../environments/environment';

@Injectable({ 
  providedIn: 'root' 
})
export class Itemsapi {
  public items = signal<Cars[]>([]);
  // private _apiUrl = 'http://localhost:5050/cars';
  private _apiUrl = environment.apiUrl;
  
  

  private _http = inject(HttpClient);

  getItems() {
    this._http.get<Cars[]>(this._apiUrl)
      .subscribe(data => this.items.set(data));
  }

  addItem(make: string, model: string, year: string, image: string) {
    const newCar = { make, model, year, image };
    this._http.post<Cars>(this._apiUrl, newCar)
      .subscribe(() => this.getItems());
  }

  deleteItem(id: string) {
    this._http.delete(`${this._apiUrl}/${id}`)
      .subscribe(() => this.getItems());
  }
}
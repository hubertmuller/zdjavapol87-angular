import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  constructor(private http: HttpClient) { }
  pobierzOsoby(): Observable<Osoba[]> {
    return this.http.get<Osoba[]>('jakisadres');
  }
}

export interface Osoba {
  imie: string;
  nazwisko: string;
  plec: string;
  szczepionka: string;
  zyczenia: {
    a: boolean;
    b: boolean;
  };
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  constructor(private http: HttpClient) { }
  pobierzOsoby(): Observable<Osoba[]> {
    return this.http.get<Osoba[]>(environment.endPointURL);
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


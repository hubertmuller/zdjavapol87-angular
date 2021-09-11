import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.append('Accept', 'application/json');
  }
  pobierzOsoby(): Observable<Osoba[]> {
    return this.http.get<Osoba[]>(environment.endPointURL + '/api/lista',{headers: this.headers});
  }

  zapiszOsobe(osoba: Osoba): Observable<any> {
    return this.http.post(environment.endPointURL + '/api/osoba', osoba, {headers: this.headers})
  }
}

export interface Osoba {
  id?: string;
  imie: string;
  nazwisko: string;
  haslo: string;
  plec: string;
  szczepionka: string;
  zyczenia: {
    x: boolean;
    y: boolean;
  };
  uwagi: string;
}


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KonwerterService {

  private kursUSD = 3.8;

  constructor() {
    console.log('constructor serwisu');
  }

  public przeliczNaMilimetry(dlugoscwMetrach: number): number {
    return dlugoscwMetrach * 1000;
  }

  public przeliczNaZlotowki(wartoscwUSD: number): number {
    return wartoscwUSD * this.kursUSD;
  }
}

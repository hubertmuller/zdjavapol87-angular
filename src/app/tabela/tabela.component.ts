import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {KonwerterService} from '../konwerter.service';
import {ListaService, Osoba} from '../lista.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit, OnDestroy {

  @Input('tytulTabeli')
  public tytul: string;

  public podtytul: string;
  private osoby: Osoba[];

  constructor(private konwerter: KonwerterService, private lista: ListaService) {
    console.log('tabela - constructor');
    this.podtytul = Math.ceil(Math.random() * 100).toString();
    this.lista.pobierzOsoby().subscribe(
      (wartosc: Osoba[]) => {
        this.osoby = wartosc;
      }
    );
  }

  public przelicz(dlugoscwMetrach: number): number {
    return this.konwerter.przeliczNaMilimetry(dlugoscwMetrach);
  }

  ngOnInit(): void {
    console.log('tabela - ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('tabela - ngOnDestroy');
  }

}

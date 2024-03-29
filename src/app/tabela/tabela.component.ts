import {Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {KonwerterService} from '../konwerter.service';
import {ListaService, Osoba} from '../lista.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TabelaComponent implements OnInit, OnDestroy {

  @Input('tytulTabeli')
  public tytul: string;

  public podtytul: string;
  public osoby: Osoba[];
  private listaOsobSub: Subscription;

  constructor(private konwerter: KonwerterService, private lista: ListaService) {
    console.log('tabela - constructor');
    this.podtytul = Math.ceil(Math.random() * 100).toString();

    this.listaOsobSub = this.lista.pobierzOsoby().subscribe(
      (wartosc: Osoba[]) => {
        console.log(wartosc);
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
    console.log('tabela - ngOnDestroy - czas umierac! wysubskrybowuje sie!');
    this.listaOsobSub.unsubscribe();
  }

}

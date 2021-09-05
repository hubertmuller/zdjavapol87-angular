import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit, OnDestroy {

  @Input('tytulTabeli')
  public tytul: string;

  public podtytul: string;

  constructor() {
    console.log('tabela - constructor');
    this.podtytul = Math.ceil(Math.random() * 100).toString();
  }

  ngOnInit(): void {
    console.log('tabela - ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('tabela - ngOnDestroy');
  }

}

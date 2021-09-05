import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  @Input()
  public tytul: string;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent implements OnInit {

  public forma = new FormGroup({
    imie: new FormControl('', {}),
    nazwisko: new FormControl('', {}),
  });

  constructor() { }

  ngOnInit(): void {
  }

}

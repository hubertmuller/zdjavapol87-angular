import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent implements OnInit {

  public forma = new FormGroup({
    imie: new FormControl('', {validators: [
      Validators.required,
      Validators.minLength(5),
        Validators.pattern(/foo/)
      ], updateOn: 'blur' }),
    nazwisko: new FormControl('', {validators: [NaszValidator.wymaganywiek(20, 40)]}),
    haslo: new FormControl('', {}),
    plec: new FormControl(null, {}),
    zyczenia: new FormGroup( {
      x: new FormControl(null, {}),
      y: new FormControl(null, {})
    }),
    szczepionka: new FormControl(null, {}),
    uwagi: new FormControl(null, {})
  });

  constructor() { }

  ngOnInit(): void {
    this.forma.controls.imie.valueChanges.subscribe(
      (value) => {
        if (value === 'Hubert') {
          console.log('jest!');
          this.forma.controls.nazwisko.setValue('Muller');
        }
      }

    );

    this.forma.valueChanges.subscribe(
      (value) => {
        if (value.imie === 'Stefan' && value.nazwisko === 'Nowak') {
          this.forma.controls.imie.setValue('');
        }
      }
    );
  }

  zmien(): void {
    this.forma.controls.imie.setValue('Stefan');
    console.log(this.forma.controls);
  }
}

class NaszValidator {
  static wymaganywiek(dolna: number, gorna: number) {
    return (control: FormControl) => {
      const wartosc = control.value;
      if (dolna <= wartosc && gorna >= wartosc) {
        return null;
      } else {
        return { poprawnyprzedzial : 'wartosc ' + wartosc + ' nie miesci sie w przedziale'};
      }
    };
  }
}

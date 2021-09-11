import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ListaService, Osoba} from '../lista.service';
import {Router} from '@angular/router';

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

  constructor(private lista: ListaService, private router: Router) { }

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

  public zapisz(): void {
    const stanFormy = this.forma.controls;
    const osoba: Osoba = {
      imie: stanFormy.imie.value,
      nazwisko: stanFormy.nazwisko.value,
      plec: stanFormy.plec.value,
      haslo: stanFormy.haslo.value,
      szczepionka: stanFormy.szczepionka.value,
      zyczenia: stanFormy.zyczenia.value,
      uwagi: stanFormy.uwagi.value,
    };
    this.lista.zapiszOsobe(osoba).subscribe (
      (value) => {
          console.log('udalo sie zapisac');
          this.router.navigate(['/potwierdzenie']);
      }
    );
  }

}



class NaszValidator {
  static wymaganywiek(dolna: number, gorna: number): any {
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

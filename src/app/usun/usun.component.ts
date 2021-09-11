import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-usun',
  templateUrl: './usun.component.html',
  styleUrls: ['./usun.component.scss']
})
export class UsunComponent implements OnInit {
  public params: Params;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( (params: Params) => {
      this.params = params;
      console.log('usunalem osobe', this.params.id);
    });
  }

  ngOnInit(): void {

  }

}

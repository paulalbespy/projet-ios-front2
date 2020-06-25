import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { RechercheService } from '../../services/recherche.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private rechercheService: RechercheService) { }

  ngOnInit(): void {
  }

  valider(f: NgForm): void {
    this.rechercheService.getRechercheCommune().subscribe( res => {
      console.log(res);
    });
  }
}

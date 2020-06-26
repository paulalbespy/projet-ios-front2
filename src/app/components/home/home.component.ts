import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { RechercheService } from '../../services/recherche.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public communesPrediction = [];
  public situation: any = '1';
  public maternelle: any = '1';
  public primaire: any = '1';
  public college: any = '1';
  public lycee: any = '1';
  public sportif: any = '1';
  public calme: any = '1';
  public bibliotheque: any = '1';
  public festival: any = '1';
  public isVisible: any = false;

  constructor(private rechercheService: RechercheService) { }

  ngOnInit(): void {
  }

  valider(): void {
    this.isVisible = false;
    const body = {
      situation: this.situation,
      college: this.college,
      lycee: this.lycee,
      primaire: this.primaire,
      maternelle: this.maternelle,
      sportif: this.sportif,
      calme: this.calme,
      bibliotheque: this.bibliotheque,
      festival: this.festival
  };
    this.rechercheService.getRechercheCommune(body).subscribe( res => {
      let communesJSON = JSON.parse(JSON.stringify(res));
      this.communesPrediction = communesJSON.map.communes.myArrayList;
      console.log(this.communesPrediction);
      this.isVisible = true;
    });
  }
}

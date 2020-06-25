import { Component, OnInit } from '@angular/core';
import {AnnonceService} from "../Annonce/annonce.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {

  filtreForm: FormGroup;
  basicFilter: Object = [];
  constructor(private annonceService: AnnonceService, private formBuilder: FormBuilder) {
    this.getBasicFilter();
  }

  ngOnInit() {
    this.annonceService.getAnnonces();
    this.annonceService.getEnergies();

    console.dir(this.annonceService.energies)

    this.filtreForm = this.formBuilder.group({
      make: [],
      model: [],
      category: [],
      energy: [],
      minYear: [],
      maxYear: [],
      minPrice: [],
      maxPrice: [],
      minFiscalHorsePower: [],
      maxFiscalHorsePower: [],
      minHorsePower: [],
      maxHorsePower: [],
      minMileage: [],
      maxMileage: [],
      minMileageSinceModification: [],
      maxMileageSinceModification: [],
      minFuelEconomy: [],
      maxFuelEconomy: [],
      minTorque: [],
      maxTorque: []
    });
  }

  onSelectFilter(event: any) {
    //let val = event.target.id;
    let val = event.target.value;
    console.dir(event.target.value);
    console.log(val);

    if(val == "croissant"){

    }else if (val == "decroissant"){

    }else if (val == "anciennes") {

    }else {
      // récentes
    }
     this.annonceService.filter(event.target.id, event.target.value);
  }

  showCompletDetail(id: number) {
    // redirect to new routes
    this.annonceService.showCompletDetail(id);
  }

  getBasicFilter() {
    this.basicFilter = [
      {value: 'Plus Récentes'},
      {value: 'Plus anciennes'},
      {value: 'Prix Décroissant'},
      {value: 'Prix croissant'}
    ]
  }

  filterAnnonce() {
    this.annonceService.filterAnnonce(this.filtreForm.value);
  }
}

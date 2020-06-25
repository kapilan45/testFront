import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';
import {Annonce} from "../Annonce/annonce";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AnnonceService} from "../Annonce/annonce.service";
import {Image} from "../Annonce/image";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {

  images: GalleryItem[] = [];

  annonce: Annonce;
 // annonce = {};
   /*{
    id: 1,
    price: 1100,
    stage: 2,
    make: 'BMW',
    model: 'X5',
    year: 2005,
    gearbox: 'manuel',
    mileage: 14000,
    category: 'break',
    energy: 'essence',
    localisation: 'paris', numberOfSeats: 5, outSideColor: 'noir',
    fiscalHorsePower: 8, horsePower: 150, firstHand: true, euroNorme: 5, co2: 120, numberOfDoor: 4,
    inSideColor: 'gris'


  };*/

  constructor(private route: ActivatedRoute, private annonceService: AnnonceService) {
  }

  ngOnInit() {

    let annonceId = this.route.snapshot.params['annonceId'];
    this.annonce = this.annonceService.annonces[annonceId];

    for (let image in this.annonce.images){

      this.images[image] = new ImageItem({
        src: "data:image/png;base64," + this.annonce.images[image]['path'],
        thumb: "data:image/png;base64," + this.annonce.images[image]['path']
      });
    }


  }



}

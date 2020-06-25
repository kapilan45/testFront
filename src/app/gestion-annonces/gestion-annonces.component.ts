import { Component, OnInit } from '@angular/core';
import {Annonce} from '../Annonce/annonce';
import {HttpClient} from '@angular/common/http';
import {GlobalConfig} from '../global-config';
import {Router} from '@angular/router';
import {AnnonceService} from '../Annonce/annonce.service';
import {ModalService} from "../modal.service";

@Component({
  selector: 'app-gestion-annonces',
  templateUrl: './gestion-annonces.component.html',
  styleUrls: ['./gestion-annonces.component.scss']
})
export class GestionAnnoncesComponent implements OnInit {

  // annonce à supprimer
  selected_annonce;

  deleteStat = "en debut";

 // annonces: Annonce;
  /* annonces = [
    {
      id: 0,
      price: 400,
      stage: 2,
      make: 'BMW',
      model: 'X5',
      year: 2005,
      mileage: 14000,
      category: 'break',
      energy: 'essence',
      localisation: 'paris',
      image: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
    },
    {
      id: 1,
      price: 880,
      stage: 2,
      make: 'BMW',
      model: 'X2',
      year: 2050,
      mileage: 100,
      category: 'break',
      energy: 'essence',
      localisation: 'paris',
      image: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
    },
    {
      id: 2,
      price: 40,
      stage: 2,
      make: 'BMW',
      model: 'X2',
      year: 2105,
      mileage: 10,
      category: 'break',
      energy: 'essence',
      localisation: 'paris',
      image: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
    }
  ]; */

  constructor(private annonceService: AnnonceService, private router: Router, private modalService: ModalService) { }

  ngOnInit() {
    this.annonceService.getUserAnnonces();
  }

  modifier(annonce: number) {
    this.router.navigate(['/depot', annonce],);
  }

  supprimer(content, annonce: Annonce) {
    // TODO affichage de modal de confirmation
    this.selected_annonce = annonce;
    this.deleteStat = "en cours";
    this.modalService.open(content);


  }

  confirmSuppression() {
    this.annonceService.deleteAnnonce(this.selected_annonce);
    // close modal
    this.modalService.close();
  }

  offreDetail(index: number) {
    this.annonceService.showCompletDetail(index);
  }
}

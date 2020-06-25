import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AnnonceService} from '../Annonce/annonce.service';
import {Annonce} from "../Annonce/annonce";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-depot-annonces',
  templateUrl: './depot-annonces.component.html',
  styleUrls: ['./depot-annonces.component.scss']
})
export class DepotAnnoncesComponent implements OnInit {

  annonce: Annonce = null;
  annonceId = null;
  annonceForm: FormGroup;
  isMake = true;
  isModele = true;
  isCategory = true;
  attachements = [];

  // Reader read uploaded file
  reader = new FileReader();

  // images: string | ArrayBuffer;
  constructor(private formBuilder: FormBuilder, private annonceService: AnnonceService, private cd: ChangeDetectorRef, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.annonce = new Annonce();
    this.annonceId = this.route.snapshot.params['id'];
    if(this.annonceId != null){
        this.annonce = this.annonceService.annonces[this.annonceId];
        this.annonceService.images = this.annonce.images;
        this.isMake = this.isModele = this.isCategory = false;
    }

    this.annonceForm = this.formBuilder.group({
      id: [this.annonce.id],
      make: [this.annonce.make],
      numberOfSeats: [this.annonce.numberOfSeats],
      maxSpeed: [this.annonce.maxSpeed],
      gearbox: [this.annonce.gearbox],
      numberOfDoor: [this.annonce.numberOfDoor],
      reinforcedCluth: [this.annonce.reinforcedCluth],
      horsePower: [this.annonce.horsePower],
      horsePowerSinceTheLatestModification: [this.annonce.horsePowerSinceTheLatestModification],
      fiscalHorsePower: [this.annonce.fiscalHorsePower],
      price: [this.annonce.price],
      stage: [this.annonce.stage],
      model: [this.annonce.model],
      year: [this.annonce.year],
      mileage: [this.annonce.mileage],
      mileageSince1stModification: [this.annonce.mileageSince1stModification],
      category: [this.annonce.category],
      energy: [this.annonce.energy],
      fuelEconomy: [this.annonce.fuelEconomy],
      fuelEconomySinceTheLatestModification: [this.annonce.fuelEconomySinceTheLatestModification],
      localisation: [this.annonce.localisation],
      outSideColor: [this.annonce.outSideColor],
      firstHand: [this.annonce.firstHand],
      euroNorme: [this.annonce.euroNorme],
      co2: [this.annonce.co2],
      inSideColor : [this.annonce.inSideColor],
      intercooler: [this.annonce.intercooler],
      highPerformanceTuningCompany: [this.annonce.highPerformanceTuningCompany],
      publishedDate: [this.annonce.publishedDate],
      trim: [this.annonce.trim],
      driveType: [this.annonce.driveType],
      torque: [this.annonce.torque],
      torqueSinceTheLatestModification: [this.annonce.torqueSinceTheLatestModification],
      exaust: [this.annonce.exaust],
      turbo: [this.annonce.turbo],
      airAdmission: [this.annonce.airAdmission],
      dumpValve: [this.annonce.dumpValve],
      airFilter: [this.annonce.airFilter],
      options: [this.annonce.options],
      technicalControl: [this.annonce.technicalControl],
      images: [this.annonce.images]
    });
  }

  uploadFichier(event) {
    if(event.target.files) {
      const [file] = event.target.files;
      this.reader.readAsDataURL(file);

      let uploadStat: any = this.annonceService.upload(file);

      if(!uploadStat) {
        let index = this.attachements.length;

        this.attachements[index] = {name : file.name};
      }
    }
  }

  uploadImage(event) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.annonceService.upload(file);
    }
  }

  deposerAnnonce() {
    this.annonceForm.patchValue({images: this.annonceService.images});
    this.annonceService.saveAnnonce(this.annonceForm.value);
  }

  activateChamp() {
      this.annonceService.getModels(this.annonceForm.value.make);
      this.isMake = false;
  }


}

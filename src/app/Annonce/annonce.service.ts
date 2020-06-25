import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Annonce} from './annonce';
import {FormGroup} from '@angular/forms';
import {GlobalConfig} from '../global-config';
import {Router} from "@angular/router";
import {Image} from "./image";
import {AuthStorageService} from "./auth-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  annonces: Annonce[];
  /*annonces: Annonce[] = [
    {
      id: 1,
      price: 1100,
      stage: 2,
      make : 'BMW',
      model : 'X5',
      year: '2005',
      mileage: 14000,
      category: 'break',
      energy: 'essence',
      localisation: 'paris',
      numberOfSeats: 4,
      options: '',
      dumpValve: '',
      airAdmission: '',
      turbo: '',
      exaust: '',
      torqueSinceTheLatestModification: 45,
      torque: 34,
      driveType: '',
      trim: '',
      airFilter: '',
      publishedDate: '',
      highPerformanceTuningCompany: '',
      intercooler: '',
      inSideColor: 'gray',
      co2: 120,
      euroNorme: 'Eruro 5',
      firstHand: true,
      outSideColor: 'red',
      fuelEconomySinceTheLatestModification: '',
      fuelEconomy: '',
      mileageSince1stModification: null,
      fiscalHorsePower: 43,
      horsePowerSinceTheLatestModification: 45,
      horsePower: 567,
      reinforcedCluth: false,
      numberOfDoor: 3,
      gearbox: 'manuelle',
      maxSpeed: 450,
      images: [{
        id: 4,
        path: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
      }]
    },{
      id: 2,
      price: 400,
      stage: 2,
      make : 'BMW',
      model : 'X5',
      year: '2005',
      mileage: 14000,
      category: 'break',
      energy: 'essence',
      localisation: 'paris',
      numberOfSeats: 4,
      options: '',
      dumpValve: '',
      airAdmission: '',
      turbo: '',
      exaust: '',
      torqueSinceTheLatestModification: 45,
      torque: 34,
      driveType: '',
      trim: '',
      airFilter: '',
      publishedDate: '',
      highPerformanceTuningCompany: '',
      intercooler: '',
      inSideColor: 'gray',
      co2: 120,
      euroNorme: 'Eruro 5',
      firstHand: true,
      outSideColor: 'red',
      fuelEconomySinceTheLatestModification: '',
      fuelEconomy: '',
      mileageSince1stModification: null,
      fiscalHorsePower: 43,
      horsePowerSinceTheLatestModification: 45,
      horsePower: 567,
      reinforcedCluth: false,
      numberOfDoor: 3,
      gearbox: 'manuelle',
      maxSpeed: 450,
      images: [{
        id: 1,
        path: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
      }]
    },{
      id: 3,
      price: 900,
      stage: 2,
      make : 'BMW',
      model : 'X5',
      year: '2005',
      mileage: 14000,
      category: 'break',
      energy: 'essence',
      localisation: 'paris',
      numberOfSeats: 4,
      options: '',
      dumpValve: '',
      airAdmission: '',
      turbo: '',
      exaust: '',
      torqueSinceTheLatestModification: 45,
      torque: 34,
      driveType: '',
      trim: '',
      airFilter: '',
      publishedDate: '',
      highPerformanceTuningCompany: '',
      intercooler: '',
      inSideColor: 'gray',
      co2: 120,
      euroNorme: 'Eruro 5',
      firstHand: true,
      outSideColor: 'red',
      fuelEconomySinceTheLatestModification: '',
      fuelEconomy: '',
      mileageSince1stModification: null,
      fiscalHorsePower: 43,
      horsePowerSinceTheLatestModification: 45,
      horsePower: 567,
      reinforcedCluth: false,
      numberOfDoor: 3,
      gearbox: 'manuelle',
      maxSpeed: 450,
      images: [{
        id: 2,
        path: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
      }]
    },{
      id: 4,
      price: 600,
      stage: 2,
       make : 'BMW',
      model : 'X5',
      year: '2005',
      mileage: 14000,
      category: 'break',
      energy: 'essence',
      localisation: 'paris',
      numberOfSeats: 4,
      options: '',
      dumpValve: '',
      airAdmission: '',
      turbo: '',
      exaust: '',
      torqueSinceTheLatestModification: 45,
      torque: 34,
      driveType: '',
      trim: '',
      airFilter: '',
      publishedDate: '',
      highPerformanceTuningCompany: '',
      intercooler: '',
      inSideColor: 'gray',
      co2: 120,
      euroNorme: 'Eruro 5',
      firstHand: true,
      outSideColor: 'red',
      fuelEconomySinceTheLatestModification: '',
      fuelEconomy: '',
      mileageSince1stModification: null,
      fiscalHorsePower: 43,
      horsePowerSinceTheLatestModification: 45,
      horsePower: 567,
      reinforcedCluth: false,
      numberOfDoor: 3,
      gearbox: 'manuelle',
      maxSpeed: 450,
      images: [{
        id: 3,
        path: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
      }]
    }
  ]; */
  energies: Object = [];
  makes: Object = [];
  models: Object = [];
  categories: Object = [];
  images: Image[] = [];

  constructor(private httpClient: HttpClient, private route: Router, private authStorageService: AuthStorageService) {
    this.getMakes();
    this.getCategories();
    this.getEnergies();
  }

  public getAnnonces(){
    this.httpClient.get<Annonce[]>(GlobalConfig.getAnnoncesApiUrl).subscribe(value => {
      this.annonces = value;
    }, error => {
      console.dir(error);
    });
  }

  public saveAnnonce(annonce: FormGroup) {
    this.httpClient
      .post(GlobalConfig.saveAnnonceApiUrl, annonce).subscribe(
        (res: Response) => {
          console.log('Enregistrement terminé !');
          // TODO
         // if (res.ok)
          this.images = [];
          this.route.navigate(['/offres'])
        },
        (error) => {
          console.log("erreur to save a annonce")
          console.dir(error);
        }
      );
  }

  public getUserAnnonces() {
    this.httpClient.get<Annonce[]>(GlobalConfig.getUserAnnoncesApiUrl).subscribe(value => {
      this.annonces = value;
    }, error => {
      console.dir(error);
    });
  }

  public deleteAnnonce(selected_annonce: Annonce){
    this.httpClient.put<Annonce[]>(GlobalConfig.deleteAnnonceApiUrl, selected_annonce).subscribe(value => {
      this.annonces = value;
    }, error => {
      console.dir(error);
    });
  }

  // TODO
  modifyAnnonce(annonce: FormGroup) {
    this.httpClient.post(GlobalConfig.modifyAnnonceApiUrl, annonce).subscribe(
        (res: Response) => {
          console.log('Modification terminé !');
          this.images = null;
          this.route.navigate(['/gestion_annonce'])
        },
        (error) => {
          console.dir(error);
          console.log('Erreur modification ! : ' + error);
        }
      );
  }

  upload(image) {
    const uploadImage = new FormData();
    uploadImage.append('image', image, image.name);

    this.httpClient.post<Image>(GlobalConfig.saveImageApiUrl, uploadImage)
    .subscribe((value) => {
      if (value != null) {
        console.log('Image uploaded successfully');
        //this.images[0] = "data:image/png;base64," + value.path;

        let index = this.images.length;
        if(index == 6){
          for (let i = 0; i < 5; i++){
            this.images[i] = this.images[i + 1];
          }
          index = 5;
        }
        //value.path =  "data:image/png;base64," + value.path;
        this.images[index] = value;

      } else {
        console.log('Image not uploaded successfully');
      }
    });
  }


  /*
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/api/image/')
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
  */

  // TODO
  filter(id: any, value: any) {

    let params = new HttpParams().set("basicFilter", value);

    this.httpClient.get<Annonce[]>(GlobalConfig.getAnnonceBasicFilter, {params: params}).subscribe(response => {
      console.log("reception ok");
      console.dir(response);
      this.annonces = response;
    });
  }


  getEnergies() {
    this.energies = [
      {energy: 'diesel'},
      {energy: 'SP95'},
      {energy: 'SP98'}
    ]
  }

  getMakes() {
    this.httpClient.get(GlobalConfig.getMakeListApi).subscribe(value => {
      this.makes = value;
    });
  }

  getModels(make: string) {
    let params = new HttpParams().set("make", make);
    this.httpClient.get(GlobalConfig.getModelByMakeApi, {params: params}).subscribe(response => {
      this.models = response;
    });
  }

  getCategories() {
    this.httpClient.get(GlobalConfig.getCategoryByModelApi).subscribe(value => {
      this.categories = value;
    });
  }

  showCompletDetail(id: number) {
    this.route.navigate(["/offres/", id]);
  }

  filterAnnonce(value: FormGroup) {
    console.dir(value);
    let url: string = 'make:' + value['make'] + ',model:' + value['model'] + ',category:' + value['category'] + ',price> ' + value['minPrice'] + ',price<' + value['maxPrice'];
    console.log(url);
    url = url.replace('null', '');
    console.log(url);

    this.httpClient.get<Annonce[]>(GlobalConfig.getAnnonceFiltred+url).subscribe(response => {
      console.log("reception filtred annonce OK ok");
      console.dir(response);
      this.annonces = response;
    });
  }
}




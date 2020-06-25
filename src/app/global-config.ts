export class GlobalConfig {

  // User connecté Identifiant
  private static userConnectedStats: boolean;

  public static apiUrl = 'http://localhost:8080/api';
  public static getAnnoncesApiUrl = 'http://localhost:8080/api/annonce';
  public static getUserAnnoncesApiUrl = 'http://localhost:8080/api/annonce/user';
  public static deleteAnnonceApiUrl = 'http://localhost:8080/api/annonce/delete';
  public static registerApiUrl = 'http://localhost:8080/api/security/register';
  public static loginApiUrl = 'http://localhost:8080/login';
  public static saveAnnonceApiUrl = 'http://localhost:8080/api/annonce/save';
  public static saveImageApiUrl = 'http://localhost:8080/api/upload/image';
  public static supprimerAnnonceApiUrl = 'http://localhost:8080/api';
  public static modifyAnnonceApiUrl = 'http://localhost:8080/api/annonce/modify';
  public static getMakeListApi = 'http://localhost:8080/api/filter/makes';
  public static getAnnonceFiltred = 'http://localhost:8080/api/annonce/filtre?search=';
  public static getAnnonceBasicFilter = 'http://localhost:8080/api/annonce/basicfilter';
  public static getEnergiesList = 'http://localhost:8080/api/filter/energies';
  public static getModelByMakeApi = 'http://localhost:8080/api/filter/models';
  public static getCategoryByModelApi = 'http://localhost:8080/api/filter/category';

// TODO
  public static getConnectedUserStatus() : boolean {
    return this.userConnectedStats;
  }

  public static setConnectedUserStatus(stat: boolean) {
    this.userConnectedStats = stat;
  }

  public static getCurrentUser(){
    return JSON.parse(localStorage.getItem('user'));
  }

  public static setCurrentUser(token: string, user: string, stat = true) {
    localStorage.setItem('user', JSON.stringify({userToken: token, usename: user}));
  }

  public static deleteCurrentUser(stat = false){
    localStorage.setItem('user', null);
  }
}

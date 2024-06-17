import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  user: any;
  constructor(private route : Router,private http: HttpClient,) { }

  saveUserConnected(u : any) {
    sessionStorage.setItem('userConnected', JSON.stringify(u)); //on store l'utilisateur de la session et on met au format JSON
  }

  getUserConnect(){
    let user : any = sessionStorage.getItem('userConnected'); // Ici on récupère l'utilisateur stocké en session
    return JSON.parse(user);
  }


  isConnected(){
    if(this.getUserConnect() != null){
      return true
    }else{
      return false
    }
}
isDisConnected(){
  if(this.getUserConnect() == null){
    return true
  }else{
    return false
  }
}
  deconnexion(){
    sessionStorage.clear();
    this.route.navigateByUrl('accueil');
  }

}
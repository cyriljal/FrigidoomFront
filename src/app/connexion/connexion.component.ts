import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  /*Permet d'avoir accès aux méthodes Http*/

  user : any;
  msgErr : any;
  filePath: any;
constructor(private http: HttpClient, private route : Router, private authService : AuthentificationService){ }
  

  connexion(val : any){
    //console.log(val) Ne sert plus à rien
    this.http.post('http://localhost:8483/connexion',val).subscribe({
      next : (data)=> { 
        this.user = data;
        if(this.user != null){
          this.authService.saveUserConnected(this.user);
          this.route.navigateByUrl('profil');
        }else{
          this.msgErr="Identifiant ou mot de passe incorrect";
        }
      },
      error : (err)=> {console.log(err)} //Si il y'a une erreur
    }) //Après post on a l'url de notre API
  }

 
}

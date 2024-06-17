import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  ingredientList:any[];
  user:any;
  ingredientCourse : any;
  course : any;
  CourseList:any[];
  recette : any;
  recetteList : any[];
  amiList : any[];
  userAmi : any;
  evenementList : any[];
  evenement:any;
  liste:any;
  demandesAmi:any;
  evenements:any;
  nombreDemandeAmis:any;
  mesAmiList:any;
  nombreEvenementEnAttente : any;
  nombreEvenements:any;
  nombreAmis:any;
  evenementsConfirmes:any[];
constructor(private authService : AuthentificationService,private http: HttpClient, private route : Router){
this.ingredientList = [];
this.CourseList=[];
this.recetteList=[];
this.amiList=[];
this.evenementList=[];
this.demandesAmi =[];
this.mesAmiList=[];
this.evenementsConfirmes=[];

}
ngOnInit(): void {
  this.user = this.authService.getUserConnect(); //Bien mettre le "user" gros nullos sinon ça va pas marcher
  
  this.http.get<any[]>('http://localhost:8483/allIngredientCourse/utilisateur/'+this.authService.getUserConnect().id,{}).subscribe((data) => {
  this.ingredientList=data;
      })

  this.http.get<any[]>('http://localhost:8483/allListeCourse/utilisateur/'+this.authService.getUserConnect().id,{}).subscribe((data) => {
    this.CourseList=data;    
      })

    this.http.get<any[]>('http://localhost:8483/recette/utilisateur/'+this.authService.getUserConnect().id,{}).subscribe((data) => {
    this.recetteList=data;    
      })

      this.http.get<any[]>('http://localhost:8483/mesAmis/ami/'+this.authService.getUserConnect().id,{}).subscribe((data) => {    
        this.amiList=data;    
      })

      this.http.get<any[]>('http://localhost:8483/allEvent/participe/'+this.authService.getUserConnect().id,{}).subscribe((data) => {
  this.evenementList=data;
      })

    this.nombreDevenementsEnAttente();
    this.nombreDemandeAmi();
    this.nombreDevenements();
    this.nombreAmi();



}
ajoutEvenement(){
  
  this.http.post('http://localhost:8483/saveEvent/test/evenement/'+this.authService.getUserConnect().id,{}).subscribe((data) => {
  this.evenement=data;
  this.route.navigateByUrl('/evenement/'+this.evenement.id);

  })
}

modifUtilisateur(){
 
        this.route.navigateByUrl('/modification-utilisateur/'+this.authService.getUserConnect().id);
      
      }/*
supprCompte(){
  this.http.delete('http://localhost:8483/utilisateur/supprimer/'+this.authService.getUserConnect().id,{})
}   */  
   
ajoutRecette() {
  this.http.post('http://localhost:8483/creationRecette/'+this.authService.getUserConnect().id,{}).subscribe((data) => {
    this.recette=data;
    this.route.navigateByUrl('/nouvelleRecette/'+this.recette.id);
  })
  }

  ajoutListe () {
    this.http.post('http://localhost:8483/createListeCourse/utilisateur/'+this.authService.getUserConnect().id,{}).subscribe((data) => {
    this.liste=data;
    this.route.navigateByUrl('/modifierListe/'+this.liste.id);
  })
  }
  
  nombreDemandeAmi(){

 
   /* Nombre de demande d'ami en attente*/
   this.http.get<any[]>('http://localhost:8483/allAmi/demande/'+this.authService.getUserConnect().id,{}).subscribe((data) => {
    this.amiList=data; 
    this.nombreDemandeAmis = this.amiList.length;   
      })
    }

    nombreDevenementsEnAttente(){
/* Nombre d'évènements en attente*/
this.http.get<any>('http://localhost:8483/allEvent/demande/'+this.authService.getUserConnect().id,{}).subscribe(
  data => {
    this.evenements = data;
    // Supposons que l'API retourne un objet avec une propriété "count" représentant le nombre d'entités
    this.nombreEvenementEnAttente = this.evenements.length;
    console.log('nombre entite :',this.nombreEvenementEnAttente);
    
  },
  error => {
    console.log('Erreur lors de la récupération du nombre d\'entités :', error);
  }
);

    }

    nombreDevenements(){

 
      /* Nombre de demande d'ami en attente*/
      this.http.get<any[]>('http://localhost:8483/allEvent/participe/'+this.authService.getUserConnect().id,{}).subscribe((data) => {
       this.evenementsConfirmes=data; 
       this.nombreEvenements = this.evenementsConfirmes.length;   
         })
       }

nombreAmi(){

 
   /* Nombre de demande d'ami en attente*/
   this.http.get<any[]>('http://localhost:8483/mesAmis/ami/'+this.authService.getUserConnect().id,{}).subscribe((data) => {
    this.mesAmiList=data; 
    this.nombreAmis = this.mesAmiList.length;   
      })
    }
}


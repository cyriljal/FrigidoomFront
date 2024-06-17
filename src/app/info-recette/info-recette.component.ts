import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-info-recette',
  templateUrl: './info-recette.component.html',
  styleUrls: ['./info-recette.component.css']
})
export class InfoRecetteComponent {
recette :any =[];
recetteId:any;
description: any;
user:any;
listAvis:any;
listIngredientRecette:any;
IngredientRecette:any;
avis:any;
selectedRecetteId:any; 
constructor(private http: HttpClient, private route : ActivatedRoute, private routing : Router,public authService : AuthentificationService){
this.listAvis=[];this.listIngredientRecette=[];this.recette=[]}

ngOnInit(): void {
    
  this.recetteId = this.route.snapshot.paramMap.get('id');

  console.log("recetteId : "+ this.recetteId)

  this.http.get('http://localhost:8483/inforecette/'+this.recetteId,{}).subscribe({
    next: (response) => { 
      console.log(response);
      this.recette = response;
    },
    error: (err) => {console.log(err)}
  });
  
  this.http.get('http://localhost:8483/recette/avis/'+this.recetteId,{}).subscribe({
   
      next :(reponse2) => { 
        this.listAvis=reponse2 ;
        
      
      console.log("avis id : "+this.avis.commentaire)}

  })

  this.http.get('http://localhost:8483/recette/ingredientRecette/'+this.recetteId,{}).subscribe({
   
      next :(reponse) => { 
        this.listIngredientRecette=reponse ;
      
      }

  })
 
 
}

addAvis(id: number) {
  this.selectedRecetteId = id;
  this.user = this.authService.getUserConnect(); //Bien mettre le "user" gros nullos sinon ça va pas marcher
  
  this.routing.navigateByUrl('/creationAvis/'+this.user.id+ '/'+this.selectedRecetteId);

  console.log('id utilisateur :'+ this.user.id + 'id recette : '+this.selectedRecetteId)
   
    };

    formatText(text: string): string {
      text = text.replace(/&#10;/g, '<br>');
      text = text.replace(/&#11;/g, '<strong>');
      text = text.replace(/&#12;/g, '</strong>');
      return text
    };
   
  }




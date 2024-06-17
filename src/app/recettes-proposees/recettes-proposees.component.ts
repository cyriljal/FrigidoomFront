import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-recettes-proposees',
  templateUrl: './recettes-proposees.component.html',
  styleUrls: ['./recettes-proposees.component.css']
})
export class RecettesProposeesComponent {

  user:any;
 selectedRecetteId :any;
  recette : any;
  recetteList : any[];
  
constructor(private authService : AuthentificationService,private http: HttpClient, private route : Router){

this.recetteList=[];
}

selectRecette(id: number) {
  this.selectedRecetteId = id;
  if (this.selectedRecetteId) {
    this.http.get('http://localhost:8483/inforecette/' + this.selectedRecetteId, {}).subscribe({
      next: (reponse) => {
        this.recette = reponse;
        this.route.navigateByUrl('/info-recette/'+this.selectedRecetteId);
        
      }, error : (err)=> {console.log(err)}
      
    });
  }
}


ngOnInit(): void {
  this.user = this.authService.getUserConnect(); //Bien mettre le "user" gros nullos sinon ça va pas marcher
  
 
    this.http.get<any[]>('http://localhost:8483/recette/utilisation/'+this.authService.getUserConnect().id,{}).subscribe((data) => {
    this.recetteList=data;    
      })

      
}
}




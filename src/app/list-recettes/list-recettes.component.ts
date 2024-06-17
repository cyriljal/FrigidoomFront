import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-list-recettes',
  templateUrl: './list-recettes.component.html',
  styleUrls: ['./list-recettes.component.css']
})
export class ListRecettesComponent {

  user:any;
  selectedRecetteId :any;
  recette : any;
  recetteList : any[];
  
  constructor(
    private authService : AuthentificationService,
    private http: HttpClient,
    private route : Router
  ){
    this.recetteList=[];
  }

  selectRecette(id: number) {
    this.selectedRecetteId = id;
    if (this.selectedRecetteId) {
      this.http.get('http://localhost:8483/inforecette/' + this.selectedRecetteId, {}).subscribe({
        next: (reponse) => {
          this.recette = reponse;
          const timestamp = new Date().getTime(); // Ajoutez un horodatage unique pour chaque requête
          this.http.get<any[]>('http://localhost:8483/recette/utilisateur/'+this.authService.getUserConnect().id + '?t=' + timestamp,{}).subscribe((data) => {
            this.recetteList=data;
            this.route.navigateByUrl('/info-recette/'+this.selectedRecetteId);
          });
        },
        error : (err)=> {console.log(err)}
      });
    }
  }

  ngOnInit(): void {
    this.user = this.authService.getUserConnect();
    const timestamp = new Date().getTime(); // Ajoutez un horodatage unique pour chaque requête
    this.http.get<any[]>('http://localhost:8483/recette/utilisateur/'+this.authService.getUserConnect().id + '?t=' + timestamp,{}).subscribe((data) => {
      this.recetteList=data;    
      console.log(this.recetteList);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-list-liste-de-course',
  templateUrl: './list-liste-de-course.component.html',
  styleUrls: ['./list-liste-de-course.component.css']
})
export class ListListeDeCourseComponent implements OnInit {

  listes : any [];
  ingredientListes:any [];
  selectedListeId :any;
  liste : any;
  listeList : any[];
  user:any;
  
  constructor (private authService: AuthentificationService, private http: HttpClient,private route : Router) {
    this.listes = []; this.ingredientListes = [];this.listeList=[];
  };
  
ngOnInit(): void {
  this.user = this.authService.getUserConnect();
  console.log(this.user);  

  this.recupAllListeCourse();

}

  ajoutListe () {
    this.http.post('http://localhost:8483/createListeCourse/utilisateur/'+this.authService.getUserConnect().id,{}).subscribe((data) => {
    this.liste=data;
    this.route.navigateByUrl('/modifierListe/'+this.liste.id);
  })
  }
  
  recupAllListeCourse() {
    this.http.get ("http://localhost:8483/allListeCourse/utilisateur/"+this.authService.getUserConnect().id)
    .subscribe({
      next: (data) => {
        this.listes = data as any[];
      },
      error: (err) => {console.log(err)}
    });
  }
  
  selectListe(id: number) {
    this.selectedListeId = id;
    if (this.selectedListeId) {
      this.http.get('http://localhost:8483/allIngredientCourse/utilisateur/' + this.authService.getUserConnect().id+'/listeCourse/'+this.selectedListeId, {}).subscribe({
        next: (reponse) => {
          this.liste = reponse;
          this.route.navigateByUrl('/afficherListe/'+this.selectedListeId);
          
        }, error : (err)=> {console.log(err)}
        
      });
    }
  }
  
  supprimerListe(id: number) {
    this.selectedListeId = id;
    if (confirm("Voulez-vous vraiment supprimer cette liste de courses ?")) {
      this.http.delete('http://localhost:8483/utilisateur/' + this.authService.getUserConnect().id + '/listeCourse/' + this.selectedListeId+'/supprimerTousLesIngredients').subscribe({
        next: () => {
          console.log("La liste de courses a été supprimée avec succès.");
          // Mettre à jour la liste des courses après la suppression
          this.http.get ("http://localhost:8483/allListeCourse/utilisateur/"+this.authService.getUserConnect().id)
            .subscribe({
              next: (data) => {
                this.listes = data as any[];
              },
              error: (err) => {console.log(err)}
            });
        },
        error: (err) => {
          console.log("Erreur lors de la suppression de la liste de courses :", err);
        }
      });
    }
  }

}



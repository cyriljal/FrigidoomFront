import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-list-liste-de-course-archive',
  templateUrl: './list-liste-de-course-archive.component.html',
  styleUrls: ['./list-liste-de-course-archive.component.css']
})
export class ListListeDeCourseArchiveComponent implements OnInit{

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
    this.user = this.authService.getUserConnect(); //Bien mettre le "user" gros nullos sinon ça va pas marcher
    this.recupAllListeCourse();  
  }

  recupAllListeCourse() {
    this.http.get ("http://localhost:8483/allListeCourseArchive/utilisateur/"+this.authService.getUserConnect().id)
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
          this.route.navigateByUrl('/afficherListeArchive/'+this.selectedListeId);
          
        }, error : (err)=> {console.log(err)}
        
      });
    }
  }

}



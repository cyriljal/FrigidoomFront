import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-afficher-liste-ingredient',
  templateUrl: './afficher-liste-ingredient.component.html',
  styleUrls: ['./afficher-liste-ingredient.component.css']
})
export class AfficherListeIngredientComponent implements OnInit{

  user:any;
  listeId: any;
  selectedListeId :any;
  liste : any;
  listeList : any[];
 
  constructor(private authService : AuthentificationService,private http: HttpClient, private route: ActivatedRoute, private router:Router){

  this.listeList=[];}

  selectListe(id: number) {
    this.selectedListeId = id;
    if (this.selectedListeId) {
      this.http.get('http://localhost:8483/allIngredientCourse/utilisateur/' + this.authService.getUserConnect().id + '/listeCourse/' + this.selectedListeId, {}).subscribe({
        next: (reponse) => {
          this.liste = reponse;
          this.router.navigateByUrl('/afficherListe/' + this.selectedListeId); // naviguer vers le composant AfficherListeIngredientComponent avec l'ID de la liste de courses sélectionnée en tant que paramètre de la route
        }, 
        error : (err)=> {console.log(err)}
      });
    }
}

  validerListeFrigo (id:number) {
    this.selectedListeId = this.route.snapshot.paramMap.get('selectedListeId');
    if (confirm("Avez-vous vraiment fait vos courses ?")) {
      this.http.put('http://localhost:8483/listeCourse/'+ this.selectedListeId +'/valider' , {}).subscribe({
        next: (reponse) => {
          this.liste = reponse;
          this.router.navigateByUrl('/course'); 
        }, 
        error : (err)=> {console.log(err)}
      });
    }
}

  ngOnInit(): void {

    this.selectedListeId = this.route.snapshot.paramMap.get('selectedListeId');
    console.log('selectedListeId:', this.selectedListeId);
    this.user = this.authService.getUserConnect();

    if (this.selectedListeId) {
      this.http.get<any[]>('http://localhost:8483/allIngredientCourse/utilisateur/' + this.authService.getUserConnect().id + '/listeCourse/' + this.selectedListeId, {}).subscribe({
        next: (reponse) => {
          this.liste = reponse;
          if (!this.liste || !this.liste.length) {
            console.log('La liste d\'ingrédients est vide ou n\'a pas été trouvée.');
          }
        },
        error: (err) => {
          console.log('Erreur lors de la récupération de la liste d\'ingrédients :', err);
        }
      });
    }
  }
}

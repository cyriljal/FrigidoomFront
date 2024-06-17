import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-list-evenement',
  templateUrl: './list-evenement.component.html',
  styleUrls: ['./list-evenement.component.css']
})
export class ListEvenementComponent {
  evenementList:any[];
  user:any;
  evenementAttente:any[];
  participe:any;
  participantsList: any[];
  participantsByEvent: { [key: number]: any[] } = {};
  idEvenement:any;
  ingredientListe : any[];
  evenement:any;
  liste : any;
 
constructor(public authService : AuthentificationService,private http: HttpClient, private route : Router){
  this.evenementList = [];
  this.evenementAttente = [];
  this.participantsList = [];
  this.ingredientListe = [];
}

ngOnInit(): void {
  
  this.user = this.authService.getUserConnect(); //Bien mettre le "user" gros nullos sinon ça va pas marcher
 
  this.http.get<any[]>('http://localhost:8483/allEvent/participe/'+this.authService.getUserConnect().id,{}).subscribe((data) => {
  this.evenementList=data;// Récupérer l'ID de chaque événement
  for (const participe of this.evenementList) {
    const idEvenement = participe.evenement.id; // ID de l'événement
    
  // Utiliser l'ID pour effectuer la requête pour les participants
  this.http.get<any[]>('http://localhost:8483/participe/event/' + idEvenement).subscribe((participants) => {
  
  this.participantsList = participants;
      // Faire quelque chose avec les participants de l'événement
      console.log('Participants de l\'événement', idEvenement, ':', participants);
    });
  }
})


}

    public isOrganisateur(evenementId: number): Observable<boolean> {
      return this.http.get<any>('http://localhost:8483/event/organisateur/' + evenementId).pipe(
        map(data => {
          return this.authService.getUserConnect().id === data.user.id;
        })
      );
    }
    
    redirectToFrigo(idEvenement: number) {
      this.route.navigate(['/frigoEvenement', idEvenement]);
    }
    
    modifierEvenement(idEvenement: number) {
        this.route.navigate(['/modifierEvenement/' + idEvenement]);
    }
    
    supprimerEvenement (idEvenement : number) {
      if (confirm("Voulez-vous vraiment supprimer cet évènement ?")) {
        this.http.delete('http://localhost:8483/event/supprimer/'+ idEvenement).subscribe({
          next: () => {
            console.log("L'évènement a été supprimée avec succès.");
            // Mettre à jour la liste d'évènement après la suppression
            this.evenementList = this.evenementList.filter(e => e.evenement.id !== idEvenement);
          },
          error: (err) => {
            console.log("Erreur lors de la suppression de la l'évènement :", err);
          }
        });
      }
    }

}
    
  


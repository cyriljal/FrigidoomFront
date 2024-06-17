import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-evenement-attente',
  templateUrl: './evenement-attente.component.html',
  styleUrls: ['./evenement-attente.component.css']
})
export class EvenementAttenteComponent {
  user:any;
  evenementList:any[];
  selectedParticipeId:any; 
  participantsList: any[];

  constructor(private authService : AuthentificationService,private http: HttpClient, private route : Router){
    this.evenementList=[];
    this.participantsList = [];
}

ngOnInit(): void {
  this.user = this.authService.getUserConnect(); //Bien mettre le "user" gros nullos sinon ça va pas marcher

  this.http.get<any[]>('http://localhost:8483/allEvent/demande/'+this.authService.getUserConnect().id,{}).subscribe((data) => {
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
  acceptEvenement(id: number) {
    this.selectedParticipeId = id;
    this.user = this.authService.getUserConnect(); //Bien mettre le "user" gros nullos sinon ça va pas marcher
    
  this.http.put('http://localhost:8483/acceptEvenement/evenement/' + this.selectedParticipeId + '/' + this.user.id, {}).subscribe({
    next: (data) => {
      console.log('Réponse de la requête PUT : ', data);
      this.route.navigateByUrl('evenementList');
    },
    error: (err) => {
      console.log('Erreur lors de la requête PUT : ', err);
    }
  });

  console.log('ID du participe : ', this.selectedParticipeId);
  console.log('ID de l\'utilisateur : ', this.user.id);
      };
}

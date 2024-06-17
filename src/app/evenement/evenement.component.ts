import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent {
  user : any;
  msgErr: any;
  listAmi:any[];
  evenement:any;
  utilisateur:any;
  evenementId:any;
  selectedParticipants: string[];

  
  constructor(private http: HttpClient, private route: Router, private routing : ActivatedRoute,private authService : AuthentificationService) {
    this.listAmi=[];this.selectedParticipants=[]
  }
  
  ngOnInit(): void {
    this.evenementId = this.routing.snapshot.paramMap.get('id');
    this.user = this.authService.getUserConnect(); //Bien mettre le "user" gros nullos sinon ça va pas marcher
    this.http.get<[]>('http://localhost:8483/mesAmis/ami/'+this.authService.getUserConnect().id,{}).subscribe({
      next :(reponse) => {   
        this.listAmi = reponse;
    }
  })
}

  creationEvenement (val:any) { const selectedParticipantsIds = this.selectedParticipants;

    for (const participantId of selectedParticipantsIds) {
      this.http.post('http://localhost:8483/creation/participe/' + this.evenementId + '/' + participantId, val).subscribe({
        next: (data) => {
          this.user = data;
          if (this.user != null) {
            
          } else {
            this.msgErr = 'fail';
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
    this.http.post('http://localhost:8483/creation/createur/participe/' + this.evenementId + '/' + this.authService.getUserConnect().id, val).subscribe({
        next: (data) => {
          this.user = data;
          if (this.user != null) {
            
          } else {
            this.msgErr = 'fail';
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
    this.http.put('http://localhost:8483/saveEvent/evenement/' + this.evenementId +'/'+ this.authService.getUserConnect().id, val).subscribe({
      next: (data) => {
        this.user = data;
        if (this.user != null) {
          this.route.navigateByUrl('evenementList');
        } else {
          this.msgErr = 'fail';
        }
      },
      error: (err) => {
        console.log(err);
      }
    });}
       
       
        updateSelectedParticipants(event: any) {
          const target = event.target;
          const participantId = target.value;
        
          if (target.checked) {
            // Ajouter l'ID du participant à la liste des participants sélectionnés
            this.selectedParticipants.push(participantId);
          } else {
            // Supprimer l'ID du participant de la liste des participants sélectionnés
            const index = this.selectedParticipants.indexOf(participantId);
            if (index !== -1) {
              this.selectedParticipants.splice(index, 1);
            }
          }
        }



      }




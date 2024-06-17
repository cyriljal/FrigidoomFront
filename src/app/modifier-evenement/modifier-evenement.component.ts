import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-modifier-evenement',
  templateUrl: './modifier-evenement.component.html',
  styleUrls: ['./modifier-evenement.component.css']
})
export class ModifierEvenementComponent {
  user : any;
  msgErr: any;
  listAmi:any[];
  event:any;
  evenement:any;
  utilisateur:any;
  idEvenement:any;
  selectedParticipants: string[];
  defaultValue: any; 
  val:any;

  constructor(private http: HttpClient, private route: Router, private routing : ActivatedRoute,private authService : AuthentificationService) {
    this.listAmi=[];this.selectedParticipants=[]; 
  }

  ngOnInit(): void {
    
    this.routing.params.subscribe(params => {
      this.idEvenement = params['id'];
      console.log('idEvenement:', this.idEvenement);
    });

    console.log("idEvenement", this.idEvenement);
    this.user = this.authService.getUserConnect(); 

    this.http.get<[]>('http://localhost:8483/mesAmis/ami/'+this.authService.getUserConnect().id,{}).subscribe({
      next :(reponse) => {   
        this.listAmi = reponse;
    }
  })

  //Permet d'avoir accès au titre, description, date de l'event etc.
  this.http.get<[]>('http://localhost:8483/event/participe/'+this.idEvenement,{}).subscribe({
    next :(reponse) => {   
      this.event = reponse;
      console.log("event", this.event);
  }
})

  }

  modifierEvenement (val:any) { 
    const selectedParticipantsIds = this.selectedParticipants;
    for (const participantId of selectedParticipantsIds) {
      this.http.put('http://localhost:8483/modification/participe/' + this.idEvenement + '/' + participantId, val).subscribe({
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
    this.http.put('http://localhost:8483/modification/createur/participe/' + this.idEvenement + '/' + this.authService.getUserConnect().id, val).subscribe({
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
    this.http.put('http://localhost:8483/updateEvent/evenement/' + this.idEvenement +'/'+ this.authService.getUserConnect().id, val).subscribe({
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




import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-list-ami',
  templateUrl: './list-ami.component.html',
  styleUrls: ['./list-ami.component.css']
})
export class ListAmiComponent {
  user:any;
  amiList : any[];
  ListDemande : any[];
  ami:any;
  liste:any;
  userAmi : any;
  selectedAmiId:any;
  selectedListeId:any;
  listeIngredientAmi : any;
constructor(private authService : AuthentificationService,private http: HttpClient, private route : Router){

this.amiList=[], this.ListDemande=[]}

ngOnInit(): void {
  this.user = this.authService.getUserConnect(); //Bien mettre le "user" gros nullos sinon ça va pas marcher
  
  this.http.get<any[]>('http://localhost:8483/ami/objet/'+this.authService.getUserConnect().id,{}).subscribe((data) => {
    this.ListDemande=data;    
      })
    this.http.get<any[]>('http://localhost:8483/mesAmis/ami/'+this.authService.getUserConnect().id,{}).subscribe((data) => {
    this.amiList=data;    
      })

}

supprimerAmi(id:number){
  this.selectedAmiId = id;       
  console.log('Supprimer ami avec ID', id);
  this.http.delete('http://localhost:8483/supprimerAmi/ami/' + this.selectedAmiId, {}).subscribe(() => {
    const index = this.amiList.findIndex((ami) => ami.id === id);
    this.amiList.splice(index, 1);
  });
}

voirFrigoAmi(id: number) {
  this.selectedAmiId = id;   
  console.log('selectedAmiId:', id);
  console.log('voir frigo', id);    
  this.http.get('http://localhost:8483/allIngredientCourse/utilisateur/' + this.selectedAmiId, {}).subscribe({
    next: (reponse) => {
      this.liste = reponse;
      this.route.navigateByUrl('/afficherFrigoAmi/' + this.selectedAmiId);
    },
    error: (err) => { console.log(err) }
  });
  
  }


}




  


import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-demande-ami',
  templateUrl: './demande-ami.component.html',
  styleUrls: ['./demande-ami.component.css']
})
export class DemandeAmiComponent {
  user:any;
  amiList : any[];
  ListDemande : any[];
  ami:any;
  liste:any;
  userAmi : any;
  selectedAmiId:any;
  selectedListeId:any;
  listeIngredientAmi : any;
constructor(public authService : AuthentificationService,private http: HttpClient, private route : Router){

this.amiList=[], this.ListDemande=[]}

ngOnInit(): void {
  this.user = this.authService.getUserConnect(); //Bien mettre le "user" gros nullos sinon ça va pas marcher
  

    this.http.get<any[]>('http://localhost:8483/allAmi/demande/'+this.authService.getUserConnect().id,{}).subscribe((data) => {
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

accepterAmi(id:number){
  this.user = this.authService.getUserConnect();
  this.selectedAmiId = id;       
  console.log('accepter ami avec ID', id);
  this.http.put('http://localhost:8483/acceptAmi/ami/' + this.selectedAmiId + '/' + this.user.id, {}).subscribe(() => {
    const index = this.amiList.findIndex((ami) => ami.id === id);
    console.log('accepter ami avec ID', id);
    this.amiList.splice(index, 1);
    this.route.navigateByUrl('/ami');
    
  });
}


isReceveur(amiId: number): Observable<boolean> { 
  return this.http.get<any>('http://localhost:8483/ami/demandeur/' + amiId,{}).pipe(
    map(data => {
      return this.authService.getUserConnect().id === data.id;
      
      
     })
  );
}




redirectToFrigo(idEvenement: number) {
  this.route.navigate(['/frigoEvenement', idEvenement]);
}



}




  


import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-touteslesrecettes',
  templateUrl: './touteslesrecettes.component.html',
  styleUrls: ['./touteslesrecettes.component.css']
})
export class TouteslesrecettesComponent {

  user:any;
  selectedRecetteId :any;
  recette : any;
  recetteListe : any[];
  
constructor(private http: HttpClient, private route : Router){

this.recetteListe=[];
}

selectRecette(id: number) {
  this.selectedRecetteId = id;
  if (this.selectedRecetteId) {
    this.http.get('http://localhost:8483/inforecette/' + this.selectedRecetteId, {}).subscribe({
      next: (reponse) => {
        this.recette = reponse;
        this.route.navigateByUrl('/info-recette/'+this.selectedRecetteId);
        
      }, error : (err)=> {console.log(err)}
      
    });
  }
}


ngOnInit(): void {
 
 
    this.http.get<any[]>('http://localhost:8483/allrecette',{}).subscribe((data) => {
    this.recetteListe=data;    
      })

      

      
}
}

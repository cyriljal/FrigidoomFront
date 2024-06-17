import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-creationavis',
  templateUrl: './creationavis.component.html',
  styleUrls: ['./creationavis.component.css']
})
export class CreationavisComponent {
  user : any;
  msgErr: any;
  recette:any;
  avis:any;
  recetteId:any;
  constructor(private http: HttpClient, private route: Router,private authService : AuthentificationService,private routing :ActivatedRoute) {}
  
  ngOnInit(): void {
    this.user = this.authService.getUserConnect(); //Bien mettre le "user" gros nullos sinon ça va pas marcher
    this.recetteId = this.routing.snapshot.paramMap.get('idRecette');

  }  


  creationAvis (val:any) { 
    this.http.post ('http://localhost:8483/creationAvis/'+this.authService.getUserConnect().id+'/'+this.recetteId, val).subscribe ({ 
      next :(data) => { this.user=data ; 
        if (this.user !=null) { 
          
          this.route.navigateByUrl ('recette'); 
        } else { 
            this.msgErr = 'fail'; } 
        }, error : (err) => { console.log(err)} }); }
}



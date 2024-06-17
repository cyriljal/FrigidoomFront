import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  user : any;
  msgErr: any;
  constructor(private http: HttpClient, private route: Router, private authService : AuthentificationService) {}
  
  inscription (val:any) { 
    this.http.post ('http://localhost:8483/inscription', val).subscribe ({ 
      next :(data) => { this.user=data ; 
        if (this.user !=null) { 
          this.authService.saveUserConnected(this.user);
          this.route.navigateByUrl ('profil'); 
        } else { 
            this.msgErr = 'fail'; } 
        }, error : (err) => { console.log(err)} }); }
}

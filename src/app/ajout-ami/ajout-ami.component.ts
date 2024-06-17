import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-ajout-ami',
  templateUrl: './ajout-ami.component.html',
  styleUrls: ['./ajout-ami.component.css'],
  
})
export class AjoutAmiComponent {
  user : any;
  msgErr: any;
  id:any;
  receveur = {login: ''};
  resultat:any;
  constructor(private http: HttpClient, private route: Router,private authService : AuthentificationService,private routing :ActivatedRoute) {}


  ngOnInit(): void {
    this.user = this.authService.getUserConnect(); //Bien mettre le "user" gros nullos sinon ça va pas marcher
   

  }


 
  ajoutAmi(val: any) {
    this.http.get('http://localhost:8483/user/login/' + this.receveur.login, {}).subscribe({
      next: (data) => {
        if (data != null) {
        this.resultat = data;
       
        console.log("id receveur :", this.resultat.id);
        
          this.http.post('http://localhost:8483/saveAmitie/ami/' + this.authService.getUserConnect().id + '/' + this.resultat.id, val).subscribe({
            next: (data) => {
              this.user = data;
              if (this.user != null) {
                console.log("login receveur", this.receveur.login);
                this.route.navigateByUrl('ami');
              } else {
                this.msgErr = 'Login incorrect';
              }
            }
          });
        } else {
          this.msgErr = 'Login incorrect';
        }
      }
    });
  }
}
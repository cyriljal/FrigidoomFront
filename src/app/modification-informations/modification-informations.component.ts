import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-modification-informations',
  templateUrl: './modification-informations.component.html',
  styleUrls: ['./modification-informations.component.css']
})
export class ModificationInformationsComponent {
 
  user:any;

  val:any;
  defaultValue: any; 
 

  constructor(private http: HttpClient,  private authService : AuthentificationService, private route : Router){
  }
  
  ngOnInit(): void {
    
    this.http.get('http://localhost:8483/user/'+this.authService.getUserConnect().id,{}).subscribe({
      next :(reponse) => { 
        this.user=reponse ;
        
      },error : (err)=> {console.log(err)}
  
  })
}
modifUser(val: any){
  this.http.put('http://localhost:8483/utilisateur/modifier/'+this.authService.getUserConnect().id,val).subscribe({
      next :(val) => { 
        this.user=val ;
        this.route.navigateByUrl('/profil');
      },error : (err)=> {console.log(err)}
  
  })
}

}

import { Component } from '@angular/core';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-menu-accueil',
  templateUrl: './menu-accueil.component.html',
  styleUrls: ['./menu-accueil.component.css']
})
export class MenuAccueilComponent {
  constructor(public authService : AuthentificationService){};


  
}

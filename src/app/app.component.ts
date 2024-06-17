import { Component } from '@angular/core';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor (public authService : AuthentificationService) {

  }

}


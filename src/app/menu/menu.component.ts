import { Component } from '@angular/core';
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  user:any;
  constructor(public authService : AuthentificationService){};
  ngOnInit(): void {
    this.user = this.authService.getUserConnect();}

}

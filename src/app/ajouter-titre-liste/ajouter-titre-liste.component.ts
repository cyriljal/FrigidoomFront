import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-titre-liste',
  templateUrl: './ajouter-titre-liste.component.html',
  styleUrls: ['./ajouter-titre-liste.component.css']
})
export class AjouterTitreListeComponent {
  form: FormGroup;
  user: any;
  msgErr: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: Router,
    private authService: AuthentificationService
  ) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  addTitreListe() {
    const val = { titre: this.form.value.title };

    this.http.post(`http://localhost:8483/createListeCourse/utilisateur/`+this.authService.getUserConnect().id, val).subscribe({
      next :(data) => { this.user=data ; 
        if (this.user !=null) { 
          this.route.navigateByUrl ('course'); 
        } else { 
            this.msgErr = 'fail'; } 
        }, error : (err) => { console.log(err)} 
      }); 
    }
}


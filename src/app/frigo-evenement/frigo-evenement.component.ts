import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-frigo-evenement',
  templateUrl: './frigo-evenement.component.html',
  styleUrls: ['./frigo-evenement.component.css']
})
export class FrigoEvenementComponent {
  ingredientList:any[];
  user:any;
  ingredientCourse : any;
  idEvenement:any;

  constructor(private authService : AuthentificationService,
    private http: HttpClient, 
    private router : Router,
    private NgModule : FormsModule,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute){
    this.ingredientList = [];
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.idEvenement = params['idEvenement'];
      console.log('idEvenement:', this.idEvenement);
    });
    
    

    this.user = this.authService.getUserConnect(); 
  
    this.http.get<any[]>('http://localhost:8483/allIngredientCourse/evenement/'+this.idEvenement,{}).subscribe((data) => {
      this.ingredientList = data;

      this.ingredientList.forEach((ingredientCourse) => {
        this.http.put('http://localhost:8483/ingredientCourse/utilisation/false/'+ ingredientCourse.id,{}).subscribe((data) => {
        ingredientCourse = data;
      }) 
     
  })
    });  
    
  }

  proposeRecette() {
    this.router.navigateByUrl('/recettesproposees');
    this.ingredientCourse.utilisation =!this.ingredientCourse.utilisation
  }

  updateUtilisation(ingredientCourse: any) {
    console.log("id ingredient : " + ingredientCourse.id);
    console.log("valeur de 1 : " + ingredientCourse.utilisation);
    ingredientCourse.utilisation =!ingredientCourse.utilisation
    console.log("valeur de 2 : " + ingredientCourse.utilisation);
   
    this.cdr.detectChanges(); // Force la détection des changements
    console.log("valeur de 3 : " + ingredientCourse.utilisation);
    this.http.put('http://localhost:8483/ingredientCourse/utilisation/true/'+ ingredientCourse.id,{}).subscribe((data) => {
      this.ingredientCourse = data;
      console.log("valeur de 4 : " + this.ingredientCourse.utilisation);
  })
}
}



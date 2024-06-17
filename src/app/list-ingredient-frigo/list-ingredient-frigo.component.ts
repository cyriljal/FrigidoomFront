import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list-ingredient-frigo',
  templateUrl: './list-ingredient-frigo.component.html',
  styleUrls: ['./list-ingredient-frigo.component.css']
})
export class ListIngredientFrigoComponent {
  ingredientList:any[];
  user:any;
  ingredientCourse : any;
  listeId:any;
 
  constructor(private authService : AuthentificationService,private http: HttpClient, private route : Router,private NgModule : FormsModule,private cdr: ChangeDetectorRef){
    this.ingredientList = [];
  }

  ngOnInit(): void {
    this.user = this.authService.getUserConnect(); 
  
    this.http.get<any[]>('http://localhost:8483/allIngredientCourse/utilisateur/'+this.authService.getUserConnect().id,{}).subscribe((data) => {
      this.ingredientList = data;

      this.ingredientList.forEach((ingredientCourse) => {
        this.http.put('http://localhost:8483/ingredientCourse/utilisation/false/'+ ingredientCourse.id,{}).subscribe((data) => {
        ingredientCourse = data;
      }) 
     
  })
    });
  }

  proposeRecette() {
    this.route.navigateByUrl('/recettesproposees');
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

  //Supprimer un ingrédient du frigo
  deleteIngredient(id: number): void {
    this.http.delete('http://localhost:8483/utilisateur/' + this.authService.getUserConnect().id + '/supprimerIngredientFrigo/supprimer/' + id, {})
      .subscribe({
        next: (reponse) => {
          console.log('Ingredient deleted');
          // Remove the deleted ingredient from the current list
          this.ingredientList = this.ingredientList.filter(ingredientCourse => ingredientCourse.id !== id);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
  
}

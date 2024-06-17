import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { AuthentificationService } from 'src/services/authentification.service';
import { ActivatedRoute,Router } from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-modifier-liste-course',
  templateUrl: './modifier-liste-course.component.html',
  styleUrls: ['./modifier-liste-course.component.css']
})

export class ModifierListeCourseComponent implements OnInit {
  formSubmitted = false;
  form: FormGroup;
  user : any;
  msgErr: any;
  listeId:any;
  liste:any;
  selectedListeId:any;
  ingredientId:any;

  ingredientControl = new FormControl('');
  mesureControl = new FormControl('');
  
  ingredients: string[] = [
    "Cuisse de poulet", 
    "Ail", 
    "Basilic", 
    "Beurre", 
    "Blanc de poulet", 
    "Blanquette de veau", 
    "Boeuf", 
    "Boeuf haché", 
    "Bouillon de légumes", 
    "Bouillon de poule", 
    "Bouillon de volaille dilué", 
    "Bouquet garni", 
    "Boeuf bourguignon", 
    "Carotte", 
    "Céleri", 
    "Champignons", 
    "Chili en poudre", 
    "Ciboulette", 
    "Citron", 
    "Citron vert", 
    "Citronnelle", 
    "Concentrés de tomates", 
    "Coriandre", 
    "Courgettes", 
    "Crême fraîche", 
    "Crevette", 
    "Cube de bouillon", 
    "Cumin arabe", 
    "Cumin en poudre", 
    "Curry", 
    "Eau", 
    "Echalottes", 
    "Epices", 
    "Epices à couscous", 
    "Escalope de dinde", 
    "Farine", 
    "Feuille de laurier", 
    "Filet de poulet", 
    "Fromage râpé", 
    "Gingembre", 
    "Graine de coriandre", 
    "Haricots rouges", 
    "Harissa", 
    "Huile", 
    "Huile d'olive", 
    "Huile de sésame", 
    "Jaune d'oeuf", 
    "Citron", 
    "Lait", 
    "Lait de coco", 
    "Lardons fumés", 
    "Lasagnes", 
    "Macis", 
    "Merguez", 
    "Miel", 
    "Moutarde", 
    "Moutarde de dijon", 
    "Muscade", 
    "Navets", 
    "Oeufs", 
    "Oignon", 
    "Orange", 
    "Parmesan", 
    "Pâte de curry", 
    "Pâtes", 
    "Pilons de poulet", 
    "Piment de Cayenne", 
    "Poireau", 
    "Pois chiches", 
    "Pois gourmands", 
    "Poivron", 
    "Poivron rouge", 
    "Poivron vert", 
    "Pomme de terre", 
    "Potimarron", 
    "Poulet fermier", 
    "Purée de tomates", 
    "Reblochon", 
    "Riz basmati", 
    "Rôti de boeuf", 
    "Sauce soja", 
    "Sucre", 
    "Thym", 
    "Tomates", 
    "Tomates cerises", 
    "Vin blanc", 
    "Vin rouge", 
    "Vinaigre de cidre", 
    "Legumes", 
    "Bouillon de boeuf", 
    "Persil"
  ];
  
  mesures: string[] = ["cas", "cac", "g", "kg", "paquet", "cl", "gousse", "branche", "pincée", "cube", "kg", "petite boite", "bouquet", "cl de jus", "bouteille", "botte", "gouttes", "jus cas", "null"];

  ingredientOptions!: Observable<string[]>;
  mesureOptions!: Observable<string[]>;

  constructor(
    private formBuilder: FormBuilder,
    private routing : ActivatedRoute,
    private http: HttpClient,
    private route: Router,
    private authService: AuthentificationService
  ) {
    this.form = this.formBuilder.group({
      ingredient: '',
      quantite: '',
      mesure: '',
    });
  }

  ngOnInit() {

    //formulaire
    this.form = this.formBuilder.group({
      ingredient: '',
      quantite: '',
      mesure: '',
    });
    
    this.ingredientControl.valueChanges.subscribe(value => {
      // Update the form control value when an ingredient is selected
      this.form.patchValue({ingredient: value});
    });
    
    this.mesureControl.valueChanges.subscribe(value => {
      // Update the form control value when a unit is selected
      this.form.patchValue({mesure: value});
    });

    this.listeId = this.routing.snapshot.paramMap.get('liste.id');
    console.log('listeId:', this.listeId);
    
    this.user = this.authService.getUserConnect().id;
    console.log('this.user', this.user);

    this.ingredientOptions = this.ingredientControl.valueChanges.pipe(
      startWith(''),
      map(valueIngredient => this._filterIngredient(valueIngredient || '')),
    );

    this.mesureOptions = this.mesureControl.valueChanges.pipe(
      startWith(''),
      map(valueMesure => this._filterMesure(valueMesure || '')),
    );

    //Afficher la liste d'ingrédients de la liste de course
    if (this.listeId) {
      this.http.get('http://localhost:8483/allIngredientCourse/utilisateur/' + this.authService.getUserConnect().id + '/listeCourse/' + this.listeId, {}).subscribe({
        next: (reponse) => {
          this.liste = reponse;
          console.log(this.liste); // add this line
          this.route.navigateByUrl('/modifierListe/' + this.listeId);
        }, 
        error: (err) => {console.log(err)}
      });
    }
    
  }

  /**FORMULAIRE */

  private _filterIngredient(valueIngredient: string): string[] {
    const filterValue = valueIngredient.toLowerCase();
    return this.ingredients.filter(ingredient => ingredient.toLowerCase().includes(filterValue));
  }

  private _filterMesure(valueMesure: string): string[] {
    const filterValue = valueMesure.toLowerCase();
    return this.mesures.filter(mesure => mesure.toLowerCase().includes(filterValue));
  }

  /**Ajouter titre liste */
  addTitreListe(val:any) {
    this.http.put(`http://localhost:8483/utilisateur/${this.authService.getUserConnect().id}/modifierListeCourse/${this.listeId}`, val)
      .subscribe({
        next: (data) => { 
          this.user = data; 
          if (this.user != null) { 
            // Mettre à jour la liste des ingrédients de la liste de course
            this.http.get(`http://localhost:8483/allIngredientCourse/utilisateur/${this.authService.getUserConnect().id}/listeCourse/${this.listeId}`, {})
              .subscribe({
                next: (reponse) => {
                  this.liste = reponse;
                  console.log(this.liste);
                  this.formSubmitted = true;
                }
              });
          } else { 
            this.msgErr = 'fail'; 
          } 
        },
        error: (err) => { 
          console.log(err);  
        }
      });
  }
  

  
  /**Ajout des ingrédients*/
  addIngredient(id: number) {
    const val = {
      ingredient: this.form.value.ingredient,
      quantite: this.form.value.quantite,
      mesure: this.form.value.mesure,
    };
  
    this.http.post('http://localhost:8483/addIngredientCourse/utilisateur/' + this.authService.getUserConnect().id + '/listeCourse/'+ this.listeId, val).subscribe({
      next: (data) => {
        console.log('form added:', this.form);
        this.user = data;
        this.listeId = id;
        if (this.user != null) {
          console.log('id added:', this.listeId);
          // Fetch the list of ingredients again after an ingredient has been added
          this.http.get('http://localhost:8483/allIngredientCourse/utilisateur/' + this.authService.getUserConnect().id + '/listeCourse/' + this.listeId, {}).subscribe({
            next: (reponse) => {
              this.liste = reponse;
              console.log(this.liste);
            },
            error: (err) => {console.log(err)}
          });
          // Clear the ingredient control to reset the suggestions
          this.form.controls['ingredient'].setValue('');
          // Reset the form
          this.form.reset();
        } else {
          this.msgErr = 'fail';
        }
      },
      error: (err) => {console.log(err)}
    });
  }
  
//Supprimer un ingrédient 
deleteIngredient(id: number): void {
  this.http.delete('http://localhost:8483/utilisateur/' + this.authService.getUserConnect().id + '/modifierIngredientCourse/' + this.listeId + '/supprimer/' + id, {})
    .subscribe({
      next: (reponse) => {
        console.log('Ingredient deleted');
        // Fetch the list of ingredients again after an ingredient has been deleted
        this.http.get('http://localhost:8483/allIngredientCourse/utilisateur/' + this.authService.getUserConnect().id + '/listeCourse/' + this.listeId, {}).subscribe({
          next: (reponse) => {
            this.liste = reponse;
            console.log(this.liste);
          },
          error: (err) => {console.log(err)}
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}

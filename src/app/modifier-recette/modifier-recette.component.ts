import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthentificationService } from 'src/services/authentification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-modifier-recette',
  templateUrl: './modifier-recette.component.html',
  styleUrls: ['./modifier-recette.component.css']
})
export class ModifierRecetteComponent {
  form: FormGroup;
  user : any;
  msgErr: any;
  recette:any;
  recetteList : any[];
  recetteId : any;
  defaultValue: any; 
  val:any;

  //ajout ingrédients et mesure
ingredientControl = new FormControl('');
uniteControl = new FormControl('');

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

unites: string[] = ["cas", "cac", "g", "kg", "paquet", "cl", "gousse", "branche", "pincée", "cube", "kg", "petite boite", "bouquet", "cl de jus", "bouteille", "botte", "gouttes", "jus cas", "null"];

ingredientOptions!: Observable<string[]>;
uniteOptions!: Observable<string[]>;

  constructor(
    private formBuilder: FormBuilder,
    private routing : ActivatedRoute,
    private http: HttpClient, 
    private route: Router,
    private authService : AuthentificationService) 
    {
    this.recetteList=[];
    this.form = this.formBuilder.group({
      ingredient: '',
      quantite: '',
      unite: '',
    });
  }
  
  ngOnInit(): void {
    this.user = this.authService.getUserConnect(); //Bien mettre le "user" gros nullos sinon ça va pas marcher
  
    this.recetteId = this.routing.snapshot.paramMap.get('recette.id');
    console.log('recetteId:', this.recetteId);

    //formulaire
    this.form = this.formBuilder.group({
      ingredient: '',
      quantite: '',
      unite: '',
    });
    
    this.ingredientControl.valueChanges.subscribe(value => {
      // Update the form control value when an ingredient is selected
      this.form.patchValue({ingredient: value});
    });
    
    this.uniteControl.valueChanges.subscribe(value => {
      // Update the form control value when a unit is selected
      this.form.patchValue({unite: value});
    });

    this.ingredientOptions = this.ingredientControl.valueChanges.pipe(
      startWith(''),
      map(valueIngredient => this._filterIngredient(valueIngredient || '')),
    );

    this.uniteOptions = this.uniteControl.valueChanges.pipe(
      startWith(''),
      map(valueUnite => this._filterUnite(valueUnite || '')),
    );

     //Afficher la liste d'ingrédients de la recette
     if (this.recetteId) {
      this.http.get('http://localhost:8483/recette/ingredientRecette/' + this.recetteId, {}).subscribe({
        next: (reponse) => {
          this.recette = reponse;
          console.log(this.recette); // add this line
          this.route.navigateByUrl('/modifierRecette/' + this.recetteId);
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

  private _filterUnite(valueUnite: string): string[] {
    const filterValue = valueUnite.toLowerCase();
    return this.unites.filter(unite => unite.toLowerCase().includes(filterValue));
  }

  creationRecette(val: any) {
    this.http.put('http://localhost:8483/modifierRecette/' + this.recetteId, val).subscribe({
      next: (data) => {
        this.user = data;
        if (this.user != null) {
          // Récupération de toutes les recettes de l'utilisateur après création de la nouvelle recette
          this.http.get<any[]>('http://localhost:8483/recette/utilisateur/' + this.authService.getUserConnect().id, {}).subscribe((data) => {
            this.recetteList = data;
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
  

  addIngredientRecette (id: number) {
    const val = {
      ingredient: this.form.value.ingredient,
      quantite: this.form.value.quantite,
      unite: this.form.value.unite,
    };
    this.http.post('http://localhost:8483/utilisateur/' + this.authService.getUserConnect().id + '/recettes/'+ this.recetteId +'/ingredients', val).subscribe({
      next: (data) => {
        console.log('form added:', this.form);
        this.user = data;
        this.recetteId = id;
        if (this.user != null) {
          console.log('id added:', this.recetteId);
          // Fetch the list of ingredients again after an ingredient has been added
          this.http.get('http://localhost:8483/recette/ingredientRecette/' + this.recetteId, {}).subscribe({
            next: (reponse) => {
              this.recette = reponse;
              console.log(this.recette);
            },
            error: (err) => {console.log(err)}
          });
          // Reset the form
          this.form.reset();
        } else {
          this.msgErr = 'fail';
        }
      },
      error: (err) => {console.log(err)}
    });
  }

  //Supprimer un ingrédient ajouté
deleteIngredient(id: number): void {
  this.http.delete('http://localhost:8483/utilisateur/' + this.authService.getUserConnect().id + '/modifierIngredientRecette/' + this.recetteId + '/supprimer/' + id, {})
    .subscribe({
      next: (reponse) => {
        console.log('Ingredient deleted');
        // Fetch the list of ingredients again after an ingredient has been added
        this.http.get('http://localhost:8483/recette/ingredientRecette/' + this.recetteId, {}).subscribe({
          next: (reponse) => {
            this.recette = reponse;
            console.log(this.recette);
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






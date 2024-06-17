import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgPipesModule } from 'ngx-pipes';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { InscriptionComponent } from './inscription/inscription.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MenuAccueilComponent } from './menu-accueil/menu-accueil.component';
import { ProfilComponent } from './profil/profil.component';

import { ListRecettesComponent } from './list-recettes/list-recettes.component';
import { ListIngredientFrigoComponent } from './list-ingredient-frigo/list-ingredient-frigo.component';
import { ListAmiComponent } from './list-ami/list-ami.component';
import { ListEvenementComponent } from './list-evenement/list-evenement.component';
import { ListListeDeCourseComponent } from './list-liste-de-course/list-liste-de-course.component';

import { AccueilComponent } from './accueil/accueil.component';
import { InfoRecetteComponent } from './info-recette/info-recette.component';
import { RecettesProposeesComponent } from './recettes-proposees/recettes-proposees.component';
import { NouvelleRecetteComponent } from './nouvelle-recette/nouvelle-recette.component';
import { EvenementAttenteComponent } from './evenement-attente/evenement-attente.component';
import { TouteslesrecettesComponent } from './touteslesrecettes/touteslesrecettes.component';
import { CreationavisComponent } from './creationavis/creationavis.component'; 
// Import MatAutocompleteModule
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { EvenementComponent } from './evenement/evenement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModificationInformationsComponent } from './modification-informations/modification-informations.component';
import { AjouterTitreListeComponent } from './ajouter-titre-liste/ajouter-titre-liste.component';
import { ModifierListeCourseComponent } from './modifier-liste-course/modifier-liste-course.component';
import { AfficherListeIngredientComponent } from './afficher-liste-ingredient/afficher-liste-ingredient.component';
import { FrigoEvenementComponent } from './frigo-evenement/frigo-evenement.component';
import { AfficherListeIngredientArchiveComponent } from './afficher-liste-ingredient-archive/afficher-liste-ingredient-archive.component';
import { ListListeDeCourseArchiveComponent } from './list-liste-de-course-archive/list-liste-de-course-archive.component';
import { AfficherFrigoAmiComponent } from './afficher-frigo-ami/afficher-frigo-ami.component';
import { ModifierRecetteComponent } from './modifier-recette/modifier-recette.component';
import { AjoutAmiComponent } from './ajout-ami/ajout-ami.component';
import { DemandeAmiComponent } from './demande-ami/demande-ami.component';
import { ModifierEvenementComponent } from './modifier-evenement/modifier-evenement.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    MenuComponent,
    MenuAccueilComponent,
    ProfilComponent,
    ListRecettesComponent,
    ListIngredientFrigoComponent,
    ListAmiComponent,
    ListEvenementComponent,
    ListListeDeCourseComponent,
    AccueilComponent,
    InfoRecetteComponent,
    RecettesProposeesComponent,
    NouvelleRecetteComponent,
    EvenementAttenteComponent,
    CreationavisComponent,
    EvenementComponent,
    TouteslesrecettesComponent,
    ModificationInformationsComponent,
    AjouterTitreListeComponent,
    ModifierListeCourseComponent,
    AfficherListeIngredientComponent,
    FrigoEvenementComponent,
    AfficherListeIngredientArchiveComponent,
    ListListeDeCourseArchiveComponent,
    AfficherFrigoAmiComponent,
    ModifierRecetteComponent,
    AjoutAmiComponent,
    DemandeAmiComponent,
    ModifierEvenementComponent
  

  ],
  imports: [
    NgPipesModule,
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatInputModule,
    CommonModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: 'inscription', component: InscriptionComponent },
      { path: 'profil', component: ProfilComponent },
      { path: 'info-recette/:id', component: InfoRecetteComponent },
      { path: 'modification-utilisateur/:id', component: ModificationInformationsComponent },
      { path: 'nouvellerecette', component: NouvelleRecetteComponent },
      { path : 'recettesproposees', component : RecettesProposeesComponent},
      { path : 'frigo', component : ListIngredientFrigoComponent},
      { path :'creationAvis/:id/:idRecette', component : CreationavisComponent},
      { path: 'touteslesrecette', component: TouteslesrecettesComponent },
      { path: 'evenement/:id', component: EvenementComponent },
      { path: 'modifierEvenement/:id', component: ModifierEvenementComponent },
      { path : 'modifierListe/:liste.id',component : ModifierListeCourseComponent },
      { path : 'afficherListe/:selectedListeId', component : AfficherListeIngredientComponent},
      { path : 'afficherListeArchive/:selectedListeId', component : AfficherListeIngredientArchiveComponent},
      { path : 'nouvelleRecette/:recette.id', component : NouvelleRecetteComponent},
      { path : 'modifierRecette/:recette.id', component : ModifierRecetteComponent},
      { path : 'frigoEvenement/:idEvenement', component : FrigoEvenementComponent},
      { path : 'afficherFrigoAmi/:selectedAmiId', component : AfficherFrigoAmiComponent},
    ]),
    // Add MatAutocompleteModule to your imports array
    MatAutocompleteModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

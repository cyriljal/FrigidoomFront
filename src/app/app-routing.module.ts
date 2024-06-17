import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MenuAccueilComponent } from './menu-accueil/menu-accueil.component';
import { ProfilComponent } from './profil/profil.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListAmiComponent } from './list-ami/list-ami.component';
import { ListIngredientFrigoComponent } from './list-ingredient-frigo/list-ingredient-frigo.component';
import { ListEvenementComponent } from './list-evenement/list-evenement.component';
import { ListRecettesComponent } from './list-recettes/list-recettes.component';
import { ListListeDeCourseComponent } from './list-liste-de-course/list-liste-de-course.component';
import { RecettesProposeesComponent } from './recettes-proposees/recettes-proposees.component';
import { EvenementAttenteComponent } from './evenement-attente/evenement-attente.component';
import { TouteslesrecettesComponent } from './touteslesrecettes/touteslesrecettes.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ModificationInformationsComponent } from './modification-informations/modification-informations.component';
import { AjouterTitreListeComponent } from './ajouter-titre-liste/ajouter-titre-liste.component';
import { ModifierListeCourseComponent } from './modifier-liste-course/modifier-liste-course.component';
import { AfficherListeIngredientComponent } from './afficher-liste-ingredient/afficher-liste-ingredient.component';
import { NouvelleRecetteComponent } from './nouvelle-recette/nouvelle-recette.component';
import { FrigoEvenementComponent } from './frigo-evenement/frigo-evenement.component';
import { ListListeDeCourseArchiveComponent } from './list-liste-de-course-archive/list-liste-de-course-archive.component';
import { DemandeAmiComponent } from './demande-ami/demande-ami.component';
import { AjoutAmiComponent } from './ajout-ami/ajout-ami.component';



const routes: Routes = [
    {component : MenuComponent, path : 'menu'},
    {component : MenuAccueilComponent, path : 'menuAccueil'},
    {component: InscriptionComponent, path: 'inscription'},
    {component: ConnexionComponent, path: 'connection'},
    {component: ProfilComponent, path: 'profil'},
    {component : AccueilComponent, path : 'accueil'},
    {component: ListAmiComponent, path: 'ami'},
    {component: ListIngredientFrigoComponent, path: 'frigo'},
    {component: ListEvenementComponent, path: 'evenementList'},
    {component : ListRecettesComponent, path : 'recette'},
    {component : ListListeDeCourseComponent, path : 'course'},
    {component : RecettesProposeesComponent, path : 'recettespossibles'},
    {component : EvenementAttenteComponent, path : 'evenementAttente'},
    {component : TouteslesrecettesComponent, path : 'touteslesrecette'},
    {component : ModificationInformationsComponent, path : 'modifutilisateur'},
    {component : AjouterTitreListeComponent, path : 'ajouterTitreListe'},
    {component : FrigoEvenementComponent, path : 'frigoEvenement'},
    {component : DemandeAmiComponent, path : 'demandeAmi'},
    {component : ListListeDeCourseArchiveComponent, path : 'courseArchive'},
    {component : AjoutAmiComponent, path : 'ajoutAmi'},
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

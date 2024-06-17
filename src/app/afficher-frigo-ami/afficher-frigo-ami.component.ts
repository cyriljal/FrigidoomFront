import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-afficher-frigo-ami',
  templateUrl: './afficher-frigo-ami.component.html',
  styleUrls: ['./afficher-frigo-ami.component.css']
})
export class AfficherFrigoAmiComponent {
  ingredients: any[];
 
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.ingredients = [];
  }

  ngOnInit(): void {; 
    const selectedAmiId = this.route.snapshot.paramMap.get('selectedAmiId');
    this.http.get<any[]>('http://localhost:8483/allIngredientCourse/utilisateur/' + selectedAmiId, {}).subscribe({
      next: (reponse) => {
        this.ingredients = reponse;
      },
      error: (err) => { console.log(err) }
    });
  }
  

}



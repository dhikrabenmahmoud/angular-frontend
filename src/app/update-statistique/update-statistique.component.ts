import { Component, OnInit } from '@angular/core';
import {Statistique} from "../statistique";
import {ActivatedRoute, Router} from "@angular/router";
import {StatistiqueService} from "../statistique.service";

@Component({
  selector: 'app-update-statistique',
  templateUrl: './update-statistique.component.html',
  styleUrls: ['./update-statistique.component.css']
})
export class UpdateStatistiqueComponent implements OnInit {
  id: number;
  statistique: Statistique = new Statistique();
  constructor(private statistiqueService: StatistiqueService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; // Récupérer l'ID du produit à partir de l'URL
    this.statistiqueService.getStatistiqueById(this.id).subscribe(
      (data) => {
        this.statistique = data; // Attribuer les détails du produit à la propriété produit
      },
      (error) => {
        console.log(error); // Gérer l'erreur en cas de problème avec l'appel API
      }
    );
  }
  onSubmit() {
    this.statistiqueService.updateStatistique(this.id, this.statistique).subscribe( data => {
        this.goToStatistiqueList();
      }
      , error => console.log(error));

  }
  goToStatistiqueList(){
    this.router.navigate(['/statistiqueList']);
  }

}

import { Component, OnInit } from '@angular/core';
import {Produit} from "../produit";
import {Actualites} from "../actualites";
import {ProduitService} from "../produit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ActualitesService} from "../actualites.service";

@Component({
  selector: 'app-update-actualites',
  templateUrl: './update-actualites.component.html',
  styleUrls: ['./update-actualites.component.css']
})
export class UpdateActualitesComponent implements OnInit {
  id: number;
  actualites: Actualites = new Actualites();
  constructor(private actualitesService: ActualitesService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; // Récupérer l'ID du produit à partir de l'URL
    this.actualitesService.getActualitesById(this.id).subscribe(
      (data) => {
        this.actualites = data; // Attribuer les détails du produit à la propriété produit
      },
      (error) => {
        console.log(error); // Gérer l'erreur en cas de problème avec l'appel API
      }
    );
  }
  onSubmit() {
    this.actualitesService.updateActualites(this.id, this.actualites).subscribe( data => {
        this.goToActualitesList();
      }
      , error => console.log(error));

  }
  goToActualitesList(){
    this.router.navigate(['/actualitesList']);
  }

}

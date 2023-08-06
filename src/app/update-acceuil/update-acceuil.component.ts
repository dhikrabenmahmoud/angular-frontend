import { Component, OnInit } from '@angular/core';
import {Produit} from "../produit";
import {Acceuil} from "../acceuil";
import {ProduitService} from "../produit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AcceuilService} from "../acceuil.service";

@Component({
  selector: 'app-update-acceuil',
  templateUrl: './update-acceuil.component.html',
  styleUrls: ['./update-acceuil.component.css']
})
export class UpdateAcceuilComponent implements OnInit {
  id: number;
  acceuil: Acceuil = new Acceuil();
  constructor(private acceuilService: AcceuilService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; // Récupérer l'ID du produit à partir de l'URL
    this.acceuilService.getAcceuilById(this.id).subscribe(
      (data) => {
        this.acceuil = data; // Attribuer les détails du produit à la propriété produit
      },
      (error) => {
        console.log(error); // Gérer l'erreur en cas de problème avec l'appel API
      }
    );
  }
  onSubmit() {
    this.acceuilService.updateAcceuil(this.id, this.acceuil).subscribe( data => {
        this.goToAcceuilList();
      }
      , error => console.log(error));

  }
  goToAcceuilList(){
    this.router.navigate(['/acceuilList']);
  }

}

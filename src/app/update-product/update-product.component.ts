import { Component, OnInit } from '@angular/core';
import {Produit} from '../produit';
import {ProduitService} from '../produit.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id: number;
  produit: Produit = new Produit();

  constructor(private produitService: ProduitService, private route: ActivatedRoute,private router: Router) {
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; // Récupérer l'ID du produit à partir de l'URL
    this.produitService.getProductById(this.id).subscribe(
      (data) => {
        this.produit = data; // Attribuer les détails du produit à la propriété produit
      },
      (error) => {
        console.log(error); // Gérer l'erreur en cas de problème avec l'appel API
      }
    );
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.produitService.updateProduit(this.id, this.produit).subscribe( data => {
        this.goToProductList();
      }
      , error => console.log(error));

  }
  goToProductList(){
    this.router.navigate(['/produitList']);
  }
}

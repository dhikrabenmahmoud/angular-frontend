import { Component, OnInit } from '@angular/core';
import {Produit} from '../produit';
import {ProduitService} from '../produit.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
produit: Produit = new  Produit();

  constructor(private produitService: ProduitService , private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
   saveProduct(){
    this.produitService.createProduct(this.produit).subscribe( data => {
        console.log(data);
        this.goToProductList();
      },
      error => console.log(error));
  }
  goToProductList(){
    this.router.navigate(['/produitList']);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.produit);
    this.saveProduct();
  }
}

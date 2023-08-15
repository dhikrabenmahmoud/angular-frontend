import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProduitService} from '../produit.service';
import {Produit} from '../produit';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  id: number;
  produit: any;
  constructor(private route: ActivatedRoute,
              private produitService: ProduitService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.produit = new Produit();
    this.produitService.getProductById(this.id).subscribe( data => {
      this.produit = data;
    });
  }

}

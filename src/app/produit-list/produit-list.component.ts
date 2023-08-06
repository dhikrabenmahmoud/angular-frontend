// @ts-ignore
// @ts-ignore
import {MatTableModule} from '@angular/material/table';
import {Component, OnInit} from '@angular/core';
import {Produit} from '../produit';
import {ProduitService} from '../produit.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css'],
})
export class ProduitListComponent implements OnInit {


  produit: Produit[];



  constructor(private produitService: ProduitService, private router: Router) {
  }

  ngOnInit(): void {
    this.getProduit();
  }

  // tslint:disable-next-line:typedef
  private getProduit() {
    this.produitService.getProduitList().subscribe(data => {
      console.log(data);
      this.produit = data;
    });
  }
  // yjibli les données fil formulaire de chaque product
  updateProduit(id: number){
    this.router.navigate(['updateProduct', id]);
  }

  deleteProduit(id: number) {
    this.produitService.deleteProduct(id).subscribe( data => {
      console.log(data);
      this.getProduit();
    });


  }
}


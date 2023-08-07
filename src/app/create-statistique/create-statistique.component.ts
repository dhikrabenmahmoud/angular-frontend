import { Component, OnInit } from '@angular/core';
import {Produit} from "../produit";
import {Statistique} from "../statistique";
import {ProduitService} from "../produit.service";
import {Router} from "@angular/router";
import {StatistiqueService} from "../statistique.service";

@Component({
  selector: 'app-create-statistique',
  templateUrl: './create-statistique.component.html',
  styleUrls: ['./create-statistique.component.css']
})
export class CreateStatistiqueComponent implements OnInit {
  statistique: Statistique = new  Statistique();

  constructor(private statistiqueService: StatistiqueService , private router: Router) { }

  ngOnInit(): void {
  }
  saveStatistique(){
    this.statistiqueService.createStatistique(this.statistique).subscribe( data => {
        console.log(data);
        this.goToStatistiqueList();
      },
      error => console.log(error));
  }
  goToStatistiqueList(){
    this.router.navigate(['/statistiqueList']);
  }

  onSubmit() {
    console.log(this.statistique);
    this.saveStatistique();

  }
}

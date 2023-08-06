import { Component, OnInit } from '@angular/core';
import {Produit} from "../produit";
import {Diagnostic} from "../diagnostic";
import {ProduitService} from "../produit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DiagnosticService} from "../diagnostic.service";

@Component({
  selector: 'app-update-diagnostic',
  templateUrl: './update-diagnostic.component.html',
  styleUrls: ['./update-diagnostic.component.css']
})
export class UpdateDiagnosticComponent implements OnInit {
  id: number;
  diagnostic: Diagnostic = new Diagnostic();
  constructor(private diagnosticService: DiagnosticService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; // Récupérer l'ID du produit à partir de l'URL
    this.diagnosticService.getDiagnosticById(this.id).subscribe(
      (data) => {
        this.diagnostic = data; // Attribuer les détails du produit à la propriété produit
      },
      (error) => {
        console.log(error); // Gérer l'erreur en cas de problème avec l'appel API
      }
    );
  }

  onSubmit() {
    this.diagnosticService.updateDiagnostic(this.id, this.diagnostic).subscribe( data => {
        this.goToDiagnosticList();
      }
      , error => console.log(error));


  }

  private goToDiagnosticList() {
    this.router.navigate(['/diagnosticList']);


  }
}

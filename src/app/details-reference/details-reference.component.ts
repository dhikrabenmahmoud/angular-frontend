import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReferencesService} from "../references.service";

@Component({
  selector: 'app-details-reference',
  templateUrl: './details-reference.component.html',
  styleUrls: ['./details-reference.component.css']
})
export class DetailsReferenceComponent implements OnInit {
  reference: any;


  constructor(
    private route: ActivatedRoute,
    private referencesService: ReferencesService

  ) {}

  ngOnInit(): void {
    const referenceId = this.route.snapshot.paramMap.get('id');

    this.referencesService.getReferencetById(Number(referenceId)).subscribe({
      next: (reference) => {
        this.reference = reference;
        console.log(this.reference.image);
      },
      error: (error) => {
        console.error('Erreur de récupération de la référence :', error);
      }
    });

  }

}

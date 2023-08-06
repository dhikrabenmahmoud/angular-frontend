import { Component, OnInit } from '@angular/core';
import {References} from '../references';
import {ReferencesService} from '../references.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-references',
  templateUrl: './update-references.component.html',
  styleUrls: ['./update-references.component.css']
})
export class UpdateReferencesComponent implements OnInit {
  id: number;
  references: References = new   References();
  private selectedImage: string;
  constructor(private referencesService: ReferencesService , private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; // Récupérer l'ID du produit à partir de l'URL
    this.referencesService.getReferencetById(this.id).subscribe(
      (data) => {
        this.references = data; // Attribuer les détails du produit à la propriété produit
      },
      (error) => {
        console.log(error); // Gérer l'erreur en cas de problème avec l'appel API
      }
    );
  }

  onSubmit() {
    this.referencesService.updateReferences(this.id, this.references).subscribe( data => {
        this.goToReferencesList();
      }
      , error => console.log(error));

  }
  goToReferencesList(){
    this.router.navigate(['/referencesList']);
  }

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0].name;
    console.log(this.selectedImage);
  }
}

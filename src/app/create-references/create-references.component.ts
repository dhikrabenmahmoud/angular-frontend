import { Component, OnInit } from '@angular/core';
import {References} from '../references';
import {Router} from '@angular/router';
import {ReferencesService} from '../references.service';

@Component({
  selector: 'app-create-references',
  templateUrl: './create-references.component.html',
  styleUrls: ['./create-references.component.css']
})
export class CreateReferencesComponent implements OnInit {
  references: References = new   References();
  private selectedImage: string;


  constructor(private referencesService: ReferencesService , private router: Router) { }

  ngOnInit(): void {
  }
  private saveReferences() {
    this.references.image = this.selectedImage ;
    this.referencesService.createReferences(this.references).subscribe( data => {
      console.log(data);
        this.goToReferencesList();
      },
      error => console.log(error));

  }
  goToReferencesList(){
    this.router.navigate(['/referencesList']);
  }
  onSubmit() {
    console.log(this.references);
    this.saveReferences();
  }

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0].name;
    console.log(this.selectedImage);
  }


}

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
    console.log("dhikra",this.references.image);
    this.saveReferences();
  }

  onFileSelected(event: any) {

      if ( event.target.files[0]) {
          var reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]);
        // tslint:disable-next-line:no-shadowed-variable
          reader.onload = (event: any) => {
            console.log(event.target);
            this.references.image = event.target.result;
          }


      }



  }


}

import { Component, OnInit } from '@angular/core';
import {References} from '../references';
 // import {Router} from "@angular/router";
import {ReferencesService} from '../references.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-references-list',
  templateUrl: './references-list.component.html',
  styleUrls: ['./references-list.component.css']
})
export class ReferencesListComponent implements OnInit {
  references: References[];

  constructor(private referencesService: ReferencesService ,private router: Router) {
  }

  ngOnInit(): void {
    this.getReferences();

  }
  private getReferences() {
    this.referencesService.getReferencesList().subscribe(data => {
      console.log(data);
      this.references = data;
    });
  }

  updateRef(id: number) {
    this.router.navigate(['updatereferences', id]);
  }

  deleteRef(id: number) {
    this.referencesService. deleteReference(id).subscribe( data => {
      console.log(data);
      this.getReferences();
    });

  }
}

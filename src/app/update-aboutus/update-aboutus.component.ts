import { Component, OnInit } from '@angular/core';
import {Aboutus} from "../aboutus";
import {ActivatedRoute, Router} from "@angular/router";
import {AboutusService} from "../aboutus.service";

@Component({
  selector: 'app-update-aboutus',
  templateUrl: './update-aboutus.component.html',
  styleUrls: ['./update-aboutus.component.css']
})
export class UpdateAboutusComponent implements OnInit {
  id: number;
  aboutus: Aboutus = new Aboutus();
  constructor(private aboutusService: AboutusService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; // Récupérer l'ID du produit à partir de l'URL
    this.aboutusService.getAboutUsById(this.id).subscribe(
      (data) => {
        this.aboutus = data; // Attribuer les détails du produit à la propriété produit
      },
      (error) => {
        console.log(error); // Gérer l'erreur en cas de problème avec l'appel API
      }
    );
  }

  onSubmit() {
    this.aboutusService.updateAboutUs(this.id, this.aboutus).subscribe( data => {
        this.goToAboutUsList();
      }
      , error => console.log(error));

  }
  goToAboutUsList(){
    this.router.navigate(['/aboutusList']);
  }
}

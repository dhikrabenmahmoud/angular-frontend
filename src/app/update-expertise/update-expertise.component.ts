import { Component, OnInit } from '@angular/core';
import {Expertise} from "../expertise";
import {ActivatedRoute, Router} from "@angular/router";
import {ExpertiseService} from "../expertise.service";

@Component({
  selector: 'app-update-expertise',
  templateUrl: './update-expertise.component.html',
  styleUrls: ['./update-expertise.component.css']
})
export class UpdateExpertiseComponent implements OnInit {
  id: number;
  expertise: Expertise = new Expertise();
  constructor(private expertiseService: ExpertiseService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; // Récupérer l'ID du produit à partir de l'URL
    this.expertiseService.getExpertiseById(this.id).subscribe(
      (data) => {
        this.expertise = data; // Attribuer les détails du produit à la propriété produit
      },
      (error) => {
        console.log(error); // Gérer l'erreur en cas de problème avec l'appel API
      }
    );
  }
  onSubmit() {
    this.expertiseService.updateExpertise(this.id, this.expertise).subscribe( data => {
        this.goToExpertiseList();
      }
      , error => console.log(error));

  }
  goToExpertiseList(){
    this.router.navigate(['/expertiseList']);
  }

}

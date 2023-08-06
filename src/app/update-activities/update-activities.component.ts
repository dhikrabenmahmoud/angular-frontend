import { Component, OnInit } from '@angular/core';
import {Produit} from "../produit";
import {Activities} from "../activities";
import {ProduitService} from "../produit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ActivitiesService} from "../activities.service";

@Component({
  selector: 'app-update-activities',
  templateUrl: './update-activities.component.html',
  styleUrls: ['./update-activities.component.css']
})
export class UpdateActivitiesComponent implements OnInit {
  id: number;
  activities: Activities = new Activities();
  constructor(private activitiesService: ActivitiesService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; // Récupérer l'ID du produit à partir de l'URL
    this.activitiesService.getActivitiesById(this.id).subscribe(
      (data) => {
        this.activities = data; // Attribuer les détails du produit à la propriété produit
      },
      (error) => {
        console.log(error); // Gérer l'erreur en cas de problème avec l'appel API
      }
    );
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.activitiesService.updateActivities(this.id, this.activities).subscribe( data => {
        this.goToActivityList();
      }
      , error => console.log(error));

  }
  goToActivityList(){
    this.router.navigate(['/activityList']);
  }


}

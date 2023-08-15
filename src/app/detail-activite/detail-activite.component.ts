import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ActivitiesService} from '../activities.service';
import {Acceuil} from '../acceuil';

@Component({
  selector: 'app-detail-activite',
  templateUrl: './detail-activite.component.html',
  styleUrls: ['./detail-activite.component.css']
})
export class DetailActiviteComponent implements OnInit {
  id: number;
  activities: any;
  constructor(private route: ActivatedRoute,
              private activityService: ActivitiesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.activities = new Acceuil();
    this.activityService.getActivitiesById(this.id).subscribe( data => {
      this.activities = data;
    });
  }

}

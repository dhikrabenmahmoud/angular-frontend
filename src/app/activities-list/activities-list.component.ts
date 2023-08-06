import { Component, OnInit } from '@angular/core';
import {Activities} from '../activities';
import {Router} from '@angular/router';
import {ActivitiesService} from '../activities.service';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {
  activities: Activities[];
  constructor(private activitiesService: ActivitiesService, private router: Router) { }

  ngOnInit(): void {
    this.getActivities();
  }

  private getActivities() {
    this.activitiesService.getActivitiesList().subscribe(data => {
      console.log(data);
      this.activities = data;
    });
  }

  updateActivity(id: number) {
    this.router.navigate(['updateActivities', id]);

  }

  deleteActiviyy(id: number) {
    this.activitiesService.deleteActivities(id).subscribe( data => {
      console.log(data);
      this.getActivities();
    });


  }

  }


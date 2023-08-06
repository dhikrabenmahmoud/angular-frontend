import { Component, OnInit } from '@angular/core';
import {Activities} from '../activities';
import {Router} from '@angular/router';
import {ActivitiesService} from '../activities.service';

@Component({
  selector: 'app-create-activities',
  templateUrl: './create-activities.component.html',
  styleUrls: ['./create-activities.component.css']
})
export class CreateActivitiesComponent implements OnInit {
  activities: Activities = new  Activities();

  constructor(private activitiesService: ActivitiesService , private router: Router) { }

  ngOnInit(): void {
  }

  saveActivity(){
    this.activitiesService.createActivities(this.activities).subscribe( data => {
        console.log(data);
        this.goToActivityList();
      },
      error => console.log(error));
  }
  goToActivityList(){
    this.router.navigate(['/activityList']);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.activities);
    this.saveActivity();
  }

}

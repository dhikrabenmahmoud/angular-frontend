import { Component, OnInit } from '@angular/core';
import {Expertise} from "../expertise";
import {Router} from "@angular/router";
import {ExpertiseService} from "../expertise.service";

@Component({
  selector: 'app-expertise-list',
  templateUrl: './expertise-list.component.html',
  styleUrls: ['./expertise-list.component.css']
})
export class ExpertiseListComponent implements OnInit {
expertise: Expertise[];
  constructor(private expertiseService: ExpertiseService, private router: Router) { }

  ngOnInit(): void {
    this.getExpertise();  }

  private getExpertise() {
    this.expertiseService.getExpertiseList().subscribe(data => {
      console.log(data);
      this.expertise = data;
    });
  }

  updateExpertise(id: number) {
    this.router.navigate(['updateExpertise', id]);
  }

  deleteExpertise(id: number) {
    this.expertiseService.deleteExpertise(id).subscribe( data => {
      console.log(data);
      this.getExpertise();
    });



  }
}

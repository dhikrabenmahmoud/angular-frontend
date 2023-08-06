import { Component, OnInit } from '@angular/core';
import {Expertise} from "../expertise";
import {Router} from "@angular/router";
import {ExpertiseService} from "../expertise.service";

@Component({
  selector: 'app-create-expertise',
  templateUrl: './create-expertise.component.html',
  styleUrls: ['./create-expertise.component.css']
})
export class CreateExpertiseComponent implements OnInit {
  expertise: Expertise = new  Expertise();

  constructor(private expertiseService: ExpertiseService , private router: Router) { }

  ngOnInit(): void {
  }
  saveExpertise(){
    this.expertiseService.createExpertise(this.expertise).subscribe( data => {
        console.log(data);
        this.goExpertiseList();
      },
      error => console.log(error));
  }
  goExpertiseList(){
    this.router.navigate(['/expertiseList']);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.expertise);
    this.saveExpertise();
  }

}

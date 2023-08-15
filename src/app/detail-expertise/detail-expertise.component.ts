import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExpertiseService} from '../expertise.service';
import {Expertise} from '../expertise';

@Component({
  selector: 'app-detail-expertise',
  templateUrl: './detail-expertise.component.html',
  styleUrls: ['./detail-expertise.component.css']
})
export class DetailExpertiseComponent implements OnInit {
  id: number;
  expertise: any;
  constructor(private route: ActivatedRoute,
              private expertiseService: ExpertiseService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.expertise = new Expertise();
    this.expertiseService.getExpertiseById(this.id).subscribe( data => {
      this.expertise = data;
    });
  }

}

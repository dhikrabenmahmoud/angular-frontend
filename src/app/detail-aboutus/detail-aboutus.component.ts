import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReferencesService} from "../references.service";
import {AboutusService} from "../aboutus.service";
import {Aboutus} from "../aboutus";

@Component({
  selector: 'app-detail-aboutus',
  templateUrl: './detail-aboutus.component.html',
  styleUrls: ['./detail-aboutus.component.css']
})
export class DetailAboutusComponent implements OnInit {
  id: number;
  aboutus: any;

  constructor(    private route: ActivatedRoute,
                  private aboutusService: AboutusService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.aboutus = new Aboutus();
    this.aboutusService.getAboutUsById(this.id).subscribe( data => {
      this.aboutus = data;
    });
  }

}

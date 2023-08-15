import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ActualitesService} from '../actualites.service';
import {Actualites} from '../actualites';

@Component({
  selector: 'app-detail-actualite',
  templateUrl: './detail-actualite.component.html',
  styleUrls: ['./detail-actualite.component.css']
})
export class DetailActualiteComponent implements OnInit {
  id: number;
  actualite: any;
  constructor(private route: ActivatedRoute,
              private actualitesService: ActualitesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.actualite = new Actualites();
    this.actualitesService.getActualitesById(this.id).subscribe( data => {
      this.actualite = data;
    });
  }

}

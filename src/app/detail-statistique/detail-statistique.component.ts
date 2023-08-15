import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StatistiqueService} from '../statistique.service';
import {Statistique} from '../statistique';

@Component({
  selector: 'app-detail-statistique',
  templateUrl: './detail-statistique.component.html',
  styleUrls: ['./detail-statistique.component.css']
})
export class DetailStatistiqueComponent implements OnInit {
  id: number;
  statistique: any;
  constructor(private route: ActivatedRoute,
              private statistiqueService: StatistiqueService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.statistique = new Statistique();
    this.statistiqueService.getStatistiqueById(this.id).subscribe( data => {
      this.statistique = data;
    });
  }

}

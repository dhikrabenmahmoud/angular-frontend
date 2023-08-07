import { Component, OnInit } from '@angular/core';
import {Statistique} from "../statistique";
import {Router} from "@angular/router";
import {StatistiqueService} from "../statistique.service";

@Component({
  selector: 'app-statistique-list',
  templateUrl: './statistique-list.component.html',
  styleUrls: ['./statistique-list.component.css']
})
export class StatistiqueListComponent implements OnInit {
statistique: Statistique[];
  constructor(private statistiqueService: StatistiqueService, private router: Router) { }

  ngOnInit(): void {
    this.getStatistique();
  }

  private getStatistique() {
    this.statistiqueService.getStatistiqueList().subscribe(data => {
      console.log(data);
      this.statistique = data;
    });
  }
  updateStatistique(id: number){
    this.router.navigate(['updateStatistique', id]);
  }

  deleteStatistique(id: number) {
    this.statistiqueService.deleteStatistique(id).subscribe( data => {
      console.log(data);
      this.getStatistique();
    });


  }
}

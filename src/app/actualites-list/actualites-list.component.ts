import { Component, OnInit } from '@angular/core';
import {Actualites} from "../actualites";
import {Router} from "@angular/router";
import {ActualitesService} from "../actualites.service";

@Component({
  selector: 'app-actualites-list',
  templateUrl: './actualites-list.component.html',
  styleUrls: ['./actualites-list.component.css']
})
export class ActualitesListComponent implements OnInit {
  actualites: Actualites[];
  constructor(private actualitesService: ActualitesService, private router: Router) { }

  ngOnInit(): void {
    this.getActualites();
  }

  updateActualites(id) {
    this.router.navigate(['updateActualites', id]);

  }

  deleteActualites(id) {
    this.actualitesService.deleteActualites(id).subscribe( data => {
      console.log(data);
      this.getActualites();
    });

  }

  private getActualites() {
    this.actualitesService.getActualitesList().subscribe(data => {
      console.log(data);
      this.actualites = data;
    });
  }
}

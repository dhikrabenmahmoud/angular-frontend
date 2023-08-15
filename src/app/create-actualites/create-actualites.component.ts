import { Component, OnInit } from '@angular/core';
import {Actualites} from '../actualites';
import {Router} from '@angular/router';
import {ActualitesService} from '../actualites.service';

@Component({
  selector: 'app-create-actualites',
  templateUrl: './create-actualites.component.html',
  styleUrls: ['./create-actualites.component.css']
})
export class CreateActualitesComponent implements OnInit {
  actualites: Actualites = new  Actualites();


  constructor(private actualitesService: ActualitesService , private router: Router) { }

  ngOnInit(): void {
  }
  saveActualites(){
    this.actualitesService.createActualites(this.actualites).subscribe( data => {
        console.log(data);
        this.goToActualitesList();
      },
      error => console.log(error));
  }
  goToActualitesList(){
    this.router.navigate(['/actualitesList']);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.actualites);
    this.saveActualites();
  }

}

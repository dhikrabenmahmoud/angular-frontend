import { Component, OnInit } from '@angular/core';
import {Acceuil} from '../acceuil';
import {Router} from '@angular/router';
import {AcceuilService} from '../acceuil.service';

@Component({
  selector: 'app-acceuil-list',
  templateUrl: './acceuil-list.component.html',
  styleUrls: ['./acceuil-list.component.css']
})
export class AcceuilListComponent implements OnInit {
acceuil: Acceuil[];
  constructor(private acceuilService: AcceuilService, private router: Router) { }

  ngOnInit(): void {
    this.getAcceuil();
   }

  private getAcceuil() {
    this.acceuilService.getAcceuilList().subscribe(data => {
      console.log(data);
      this.acceuil = data;
    });

  }

  updateAcceuil(id: number) {
    this.router.navigate(['updateAcceuil', id]);


  }

  deleteAcceuil(id: number) {
    this.acceuilService.deleteAcceuil(id).subscribe(data => {
      console.log(data);
      this.getAcceuil();
    });
  }

}

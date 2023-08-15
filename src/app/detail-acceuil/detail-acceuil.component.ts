import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AcceuilService} from '../acceuil.service';
import {Acceuil} from '../acceuil';

@Component({
  selector: 'app-detail-acceuil',
  templateUrl: './detail-acceuil.component.html',
  styleUrls: ['./detail-acceuil.component.css']
})
export class DetailAcceuilComponent implements OnInit {
  id: number;
  acceuil: any;
  constructor(private route: ActivatedRoute,
              private acceuilService: AcceuilService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.acceuil = new Acceuil();
    this.acceuilService.getAcceuilById(this.id).subscribe( data => {
      this.acceuil = data;
    });
  }

}

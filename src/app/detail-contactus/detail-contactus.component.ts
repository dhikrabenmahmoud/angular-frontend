import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContactusService} from '../contactus.service';
import {Contactus} from '../contactus';

@Component({
  selector: 'app-detail-contactus',
  templateUrl: './detail-contactus.component.html',
  styleUrls: ['./detail-contactus.component.css']
})
export class DetailContactusComponent implements OnInit {
  id: number;
  contactus: any;
  constructor(private route: ActivatedRoute,
              private contactusService: ContactusService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.contactus = new Contactus();
    this.contactusService.getContactusById(this.id).subscribe( data => {
      this.contactus = data;
    });
  }

}

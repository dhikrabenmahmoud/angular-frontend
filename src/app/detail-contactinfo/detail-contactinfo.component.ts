import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContactinfoService} from '../contactinfo.service';
import {Contactinfo} from '../contactinfo';

@Component({
  selector: 'app-detail-contactinfo',
  templateUrl: './detail-contactinfo.component.html',
  styleUrls: ['./detail-contactinfo.component.css']
})
export class DetailContactinfoComponent implements OnInit {
  id: number;
  contactinfo: any;
  constructor(private route: ActivatedRoute,
              private contactinfoService: ContactinfoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.contactinfo = new Contactinfo();
    this.contactinfoService.getContactinfoById(this.id).subscribe( data => {
      this.contactinfo = data;
    });
  }

}

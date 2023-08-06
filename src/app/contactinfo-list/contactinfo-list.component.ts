import { Component, OnInit } from '@angular/core';
import {Contactinfo} from '../contactinfo';
import {Router} from '@angular/router';
import {ContactinfoService} from '../contactinfo.service';

@Component({
  selector: 'app-contactinfo-list',
  templateUrl: './contactinfo-list.component.html',
  styleUrls: ['./contactinfo-list.component.css']
})
export class ContactinfoListComponent implements OnInit {
  contactinfo: Contactinfo[];

  constructor(private contactinfoService: ContactinfoService, private router: Router) { }

  ngOnInit(): void {
    this.getContactinfo();
  }

  private getContactinfo() {
    this.contactinfoService.getContactInfoList().subscribe(data => {
      console.log(data);
      this.contactinfo = data;
    });
  }

  updateConinfo(id: number) {
    this.router.navigate(['updateContactinfo', id]);
  }


  deleteConinfo(id: number) {
    this.contactinfoService.deleteContactinfo(id).subscribe( data => {
      console.log(data);
      this.getContactinfo();
    });

  }
}

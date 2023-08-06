import { Component, OnInit } from '@angular/core';
import {Contactus} from '../contactus';
import {Router} from '@angular/router';
import {ContactusService} from '../contactus.service';

@Component({
  selector: 'app-contactus-list',
  templateUrl: './contactus-list.component.html',
  styleUrls: ['./contactus-list.component.css']
})
export class ContactusListComponent implements OnInit {
  contactus: Contactus[];

  constructor(private contactusService: ContactusService, private router: Router) { }

  ngOnInit(): void {
    this.getContactus();  }

  private getContactus() {
    this.contactusService.getContactUsList().subscribe(data => {
      console.log(data);
      this.contactus = data;
    });
  }

  updateConUs(id: number) {
    this.router.navigate(['updateContactus', id]);
  }

  deleteConUs(id: number) {
    this.contactusService.deleteContactus(id).subscribe( data => {
      console.log(data);
      this.getContactus();
    });

  }
}

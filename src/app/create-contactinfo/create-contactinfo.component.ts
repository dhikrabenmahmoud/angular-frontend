import { Component, OnInit } from '@angular/core';
import {Contactinfo} from '../contactinfo';
import {Router} from '@angular/router';
import {ContactinfoService} from '../contactinfo.service';

@Component({
  selector: 'app-create-contactinfo',
  templateUrl: './create-contactinfo.component.html',
  styleUrls: ['./create-contactinfo.component.css']
})
export class CreateContactinfoComponent implements OnInit {
contactinfo: Contactinfo = new Contactinfo();
  constructor(private contactinfoService: ContactinfoService, private router: Router) { }

  ngOnInit(): void {
  }

  saveContactInfo(){
    this.contactinfoService. createContactinfo(this.contactinfo).subscribe( data => {
        console.log(data);
        this.goToContactinfoList();
      },
      error => console.log(error));
  }

  private goToContactinfoList() {
    this.router.navigate(['/contactinfoList']);

  }
  onSubmit() {
    console.log(this.contactinfo);
    this.saveContactInfo();

  }
}

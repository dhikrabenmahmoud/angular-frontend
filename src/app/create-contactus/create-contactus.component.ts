import { Component, OnInit } from '@angular/core';
import {Contactus} from '../contactus';
import {ContactusService} from "../contactus.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-contactus',
  templateUrl: './create-contactus.component.html',
  styleUrls: ['./create-contactus.component.css']
})
export class CreateContactusComponent implements OnInit {
  contactus: Contactus = new  Contactus();

  constructor(private contactusService: ContactusService, private router: Router) { }

  ngOnInit(): void {
  }

  saveContactUs(){
    this.contactusService. createContactus(this.contactus).subscribe( data => {
        console.log(data);
        this.goToContactusList();
      },
      error => console.log(error));
  }
  goToContactusList(){
    this.router.navigate(['/contactusList']);
  }

  onSubmit() {
    console.log(this.contactus);
    this.saveContactUs();

  }
}

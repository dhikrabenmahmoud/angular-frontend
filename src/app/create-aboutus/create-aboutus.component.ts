import { Component, OnInit } from '@angular/core';
import {Aboutus} from '../aboutus';
import {Router} from '@angular/router';
import {AboutusService} from '../aboutus.service';

@Component({
  selector: 'app-create-aboutus',
  templateUrl: './create-aboutus.component.html',
  styleUrls: ['./create-aboutus.component.css']
})
export class CreateAboutusComponent implements OnInit {
  aboutus: Aboutus = new  Aboutus();

  constructor(private aboutusService: AboutusService , private router: Router) { }

  ngOnInit(): void {
  }

  saveAboutUs(){
    this.aboutusService.createAboutUs(this.aboutus).subscribe( data => {
        console.log(data);
        this.goToAboutUsList();
      },
      error => console.log(error));
  }
  goToAboutUsList(){
    this.router.navigate(['/aboutusList']);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.aboutus);
    this.saveAboutUs();
  }

}

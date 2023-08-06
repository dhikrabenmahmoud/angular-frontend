import { Component, OnInit } from '@angular/core';
import {Aboutus} from '../aboutus';
import {Router} from '@angular/router';
import {AboutusService} from '../aboutus.service';

@Component({
  selector: 'app-aboutus-list',
  templateUrl: './aboutus-list.component.html',
  styleUrls: ['./aboutus-list.component.css']
})
export class AboutusListComponent implements OnInit {
  aboutus: Aboutus[];
  constructor(private aboutusService: AboutusService, private router: Router) { }

  ngOnInit(): void {
    this.getAboutUs();  }

  private getAboutUs() {
    this.aboutusService.getAboutUsList().subscribe(data => {
      console.log(data);
      this.aboutus = data;
    });

  }

  updateAboutUs(id: number) {
    this.router.navigate(['updateAboutUs', id]);


  }

  deleteAboutUs(id: number) {
    this.aboutusService.deleteAboutUs(id).subscribe( data => {
      console.log(data);
      this.getAboutUs();
    });


  }

  }


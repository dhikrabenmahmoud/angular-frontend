import { Component, OnInit } from '@angular/core';
import {Acceuil} from "../acceuil";
import {ProduitService} from "../produit.service";
import {Router} from "@angular/router";
import {AcceuilService} from "../acceuil.service";

@Component({
  selector: 'app-create-acceuil',
  templateUrl: './create-acceuil.component.html',
  styleUrls: ['./create-acceuil.component.css']
})
export class CreateAcceuilComponent implements OnInit {
  acceuil: Acceuil = new Acceuil();
  constructor(private acceuilService: AcceuilService , private router: Router) { }

  ngOnInit(): void {
  }
  saveAcceuil(){
    this.acceuilService.createAcceuil(this.acceuil).subscribe( data => {
        console.log(data);
        this.goToAcceuilList();
      },
      error => console.log(error));
  }
  goToAcceuilList(){
    this.router.navigate(['/acceuilList']);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.acceuil);
    this.saveAcceuil();
  }

}

import { Component, OnInit } from '@angular/core';
import {Contactus} from '../contactus';
import {ContactusService} from '../contactus.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-contactus',
  templateUrl: './update-contactus.component.html',
  styleUrls: ['./update-contactus.component.css']
})
export class UpdateContactusComponent implements OnInit {
  id: number;
  contactus: Contactus = new Contactus();
  constructor(private contactusService: ContactusService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; // Récupérer l'ID du produit à partir de l'URL
    this.contactusService.getContactusById(this.id).subscribe(
      (data) => {
        this.contactus = data; // Attribuer les détails du produit à la propriété produit
      },
      (error) => {
        console.log(error); // Gérer l'erreur en cas de problème avec l'appel API
      }
    );
  }

  onSubmit() {
    this.contactusService.updateContactus(this.id, this.contactus).subscribe( data => {
        this.goToContactusList();
      }
      , error => console.log(error));

  }

  private goToContactusList() {
    this.router.navigate(['/contactusList']);
  }
}

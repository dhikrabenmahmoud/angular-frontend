import { Component, OnInit } from '@angular/core';
import {Contactinfo} from '../contactinfo';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactinfoService} from '../contactinfo.service';

@Component({
  selector: 'app-update-contactinfo',
  templateUrl: './update-contactinfo.component.html',
  styleUrls: ['./update-contactinfo.component.css']
})
export class UpdateContactinfoComponent implements OnInit {
  id: number;
  contactinfo: Contactinfo = new Contactinfo();
  constructor(private contactinfoService: ContactinfoService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; // Récupérer l'ID du produit à partir de l'URL
    this.contactinfoService.getContactinfoById(this.id).subscribe(
      (data) => {
        this.contactinfo = data; // Attribuer les détails du produit à la propriété produit
      },
      (error) => {
        console.log(error); // Gérer l'erreur en cas de problème avec l'appel API
      }
    );
  }

  onSubmit() {
    this.contactinfoService.updateContactinfo(this.id, this.contactinfo).subscribe( data => {
        this.goToContactusList();
      }
      , error => console.log(error));

  }

  private goToContactusList() {
    this.router.navigate(['/contactinfoList']);
  }

}

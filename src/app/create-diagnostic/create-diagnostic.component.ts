import { Component, OnInit } from '@angular/core';
import {Diagnostic} from '../diagnostic';
import {Router} from '@angular/router';
import {DiagnosticService} from '../diagnostic.service';

@Component({
  selector: 'app-create-diagnostic',
  templateUrl: './create-diagnostic.component.html',
  styleUrls: ['./create-diagnostic.component.css']
})
export class CreateDiagnosticComponent implements OnInit {
  diagnostic: Diagnostic = new  Diagnostic();

  constructor(private diagnosticService: DiagnosticService , private router: Router) { }

  ngOnInit(): void {
  }
  saveDiagnostic(){
    this.diagnosticService.createDiagnostic(this.diagnostic).subscribe( data => {
        console.log(data);
        this.goToDiagnosticList();
      },
      error => console.log(error));
  }
  goToDiagnosticList(){
    this.router.navigate(['/diagnosticList']);
  }

  onSubmit() {
    console.log(this.diagnostic);
    this.saveDiagnostic();
  }


}

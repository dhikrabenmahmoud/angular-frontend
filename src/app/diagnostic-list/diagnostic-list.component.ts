import { Component, OnInit } from '@angular/core';
import {Diagnostic} from '../diagnostic';
import {Router} from '@angular/router';
import {DiagnosticService} from '../diagnostic.service';

@Component({
  selector: 'app-diagnostic-list',
  templateUrl: './diagnostic-list.component.html',
  styleUrls: ['./diagnostic-list.component.css']
})
export class DiagnosticListComponent implements OnInit {
diagnostic: Diagnostic[];
  constructor(private diagnosticService: DiagnosticService, private router: Router) { }

  ngOnInit(): void {
    this.getDiagnostic();

  }

  private getDiagnostic() {
    this.diagnosticService.getDiagnosticList().subscribe(data => {
      console.log(data);
      this.diagnostic = data;
    });


  }

  updateDiagnostic(id: number) {
    this.router.navigate(['updateDiagnostic', id]);

  }

  deleteDiagnostic(id: number) {
    this.diagnosticService.deleteDiagnostic(id).subscribe( data => {
      console.log(data);
      this.getDiagnostic();
    });

  }
}

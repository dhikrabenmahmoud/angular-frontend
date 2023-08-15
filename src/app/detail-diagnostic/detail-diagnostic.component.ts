import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DiagnosticService} from '../diagnostic.service';
import {Diagnostic} from '../diagnostic';

@Component({
  selector: 'app-detail-diagnostic',
  templateUrl: './detail-diagnostic.component.html',
  styleUrls: ['./detail-diagnostic.component.css']
})
export class DetailDiagnosticComponent implements OnInit {
  id: number;
  diagnostic: any;

  constructor(private route: ActivatedRoute,
              private diagnosticService: DiagnosticService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.diagnostic = new Diagnostic();
    this.diagnosticService.getDiagnosticById(this.id).subscribe( data => {
      this.diagnostic = data;
    });
  }

}

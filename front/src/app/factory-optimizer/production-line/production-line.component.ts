import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-production-line',
  templateUrl: './production-line.component.html',
  styleUrls: ['./production-line.component.scss']
})
export class ProductionLineComponent implements OnInit {

  @Input()
  factoryLineId: number;

  constructor() { }

  ngOnInit(): void {
  }

}

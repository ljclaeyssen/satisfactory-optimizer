import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-production-list-element',
  templateUrl: './production-list-element.component.html',
  styleUrls: ['./production-list-element.component.scss']
})
export class ProductionListElementComponent implements OnInit {

  @Input()
  public listElement: any;

  constructor() { }

  ngOnInit(): void {
  }

}

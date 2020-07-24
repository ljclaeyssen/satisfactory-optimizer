import { Component, OnInit } from '@angular/core';
import {GetFactoryLineListGQL, GetFactoryLineListQuery} from "../../../generated/graphql";

@Component({
  selector: 'app-factory-optimizer-menu',
  templateUrl: './factory-optimizer-menu.component.html',
  styleUrls: ['./factory-optimizer-menu.component.scss']
})
export class FactoryOptimizerMenuComponent implements OnInit {

  displayedFactoryLineId: number;


  constructor() { }

  ngOnInit(): void {
  }


  public showFactoryLine(factoryLineId) {
    this.displayedFactoryLineId = factoryLineId;
  }
}

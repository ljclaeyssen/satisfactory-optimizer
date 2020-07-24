import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GetFactoryLineByIdGQL} from "../../../generated/graphql";

@Component({
  selector: 'app-production-line',
  templateUrl: './production-line.component.html',
  styleUrls: ['./production-line.component.scss']
})
export class ProductionLineComponent implements OnInit,OnChanges {

  @Input()
  factoryLineId: number;

  factoryLine;

  constructor(private getFactoryLineByIdGQL: GetFactoryLineByIdGQL) { }

  ngOnInit(): void {
  }

  subscribeFactoryNewFactory(){
    if (this.factoryLineId)
    {
      this.getFactoryLineByIdGQL.subscribe({id: this.factoryLineId}).subscribe(result => {
        console.log(result);
        this.factoryLine = result.data.factory_line[0];
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.factoryLineId) {
      this.subscribeFactoryNewFactory();
    }
  }

}

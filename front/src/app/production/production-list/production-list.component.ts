import { Component, OnInit } from '@angular/core';
import {Apollo} from "apollo-angular";
import gql from 'graphql-tag';
import {GetProductionListGQL, GetProductionListQuery} from "../../../generated/graphql";

@Component({
  selector: 'app-production-list',
  templateUrl: './production-list.component.html',
  styleUrls: ['./production-list.component.scss']
})
export class ProductionListComponent implements OnInit {

  public productionList: GetProductionListQuery;
  constructor(private getProductionListGQL: GetProductionListGQL) {
  }

  ngOnInit(): void {
    this.initProductionList();
  }

   initProductionList(): void {
     this.getProductionListGQL.watch().valueChanges.subscribe(result => {
      this.productionList = result.data;
    });
  }




}

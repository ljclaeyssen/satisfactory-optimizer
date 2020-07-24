import { Component, OnInit } from '@angular/core';
import {GetComponentListGQL, GetComponentListQuery} from "../../../generated/graphql";
import {Sort} from "@angular/material/sort";

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss']
})
export class ComponentListComponent implements OnInit {

  private componentList: GetComponentListQuery;
  public sortedList: any[];

  constructor(private getComponentListGQL: GetComponentListGQL) { }

  ngOnInit(): void {
    this.initComponentList();
  }

  initComponentList() {
    this.getComponentListGQL.watch().valueChanges.subscribe(result => {
      this.componentList = result.data;
      this.sortedList = this.componentList.component.slice();
    })
  }


  public sortData(sort: Sort) {
    const data = this.componentList.component.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedList = data;
      return;
    }

    this.sortedList = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        default: return this.compare(a[sort.active], b[sort.active], isAsc);
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}

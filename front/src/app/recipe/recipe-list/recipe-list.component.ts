import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material/sort';
import {GetRecipeListGQL, GetRecipeListQuery} from "../../../generated/graphql";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  private recipeList: GetRecipeListQuery;
  public sortedList: any[];
  constructor(private getRecipeListGQL: GetRecipeListGQL) { }

  ngOnInit(): void {
    this.initRecipeList();
  }

  private initRecipeList() {
    this.getRecipeListGQL.watch().valueChanges.subscribe(result => {
      this.recipeList = result.data;
      this.sortedList = result.data.recipe.slice();
      console.log(result.data);
    })
  }

  public sortData(sort: Sort) {
    const data = this.recipeList.recipe.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedList = data;
      return;
    }

    this.sortedList = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'infrastructure': return this.compare(a.production_structure.name, b.production_structure.name, isAsc);
        default: return this.compare(a[sort.active], b[sort.active], isAsc);
      }
    });
  }

 compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}



}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatBadgeModule} from "@angular/material/badge";



@NgModule({
    declarations: [RecipeListComponent],
    exports: [
        RecipeListComponent
    ],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    MatBadgeModule
  ]
})
export class RecipeModule { }

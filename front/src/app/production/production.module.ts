import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductionListComponent } from './production-list/production-list.component';
import { ProductionListElementComponent } from './production-list-element/production-list-element.component';
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";



@NgModule({
    declarations: [ProductionListComponent, ProductionListElementComponent],
    exports: [
        ProductionListComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule
  ]
})
export class ProductionModule { }

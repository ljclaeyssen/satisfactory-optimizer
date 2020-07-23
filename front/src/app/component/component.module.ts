import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentListComponent } from './component-list/component-list.component';
import {MatSortModule} from "@angular/material/sort";



@NgModule({
    declarations: [ComponentListComponent],
    exports: [
        ComponentListComponent
    ],
  imports: [
    CommonModule,
    MatSortModule
  ]
})
export class ComponentModule { }

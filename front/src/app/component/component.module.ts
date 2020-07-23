import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentListComponent } from './component-list/component-list.component';
import { ComponentListElementComponent } from './component-list-element/component-list-element.component';



@NgModule({
    declarations: [ComponentListComponent, ComponentListElementComponent],
    exports: [
        ComponentListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ComponentModule { }

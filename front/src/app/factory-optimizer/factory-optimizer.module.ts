import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoryOptimizerMenuComponent } from './factory-optimizer-menu/factory-optimizer-menu.component';
import { FactoryOptimizerControlsComponent } from './factory-optimizer-controls/factory-optimizer-controls.component';
import { ProductionLineComponent } from './production-line/production-line.component';
import { ProductionLineLevelComponent } from './production-line-level/production-line-level.component';
import {ComponentModule} from "../component/component.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [FactoryOptimizerMenuComponent, FactoryOptimizerControlsComponent, ProductionLineComponent, ProductionLineLevelComponent],
  imports: [
    CommonModule,
    ComponentModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class FactoryOptimizerModule { }

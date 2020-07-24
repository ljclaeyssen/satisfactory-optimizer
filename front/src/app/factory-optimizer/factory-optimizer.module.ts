import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoryOptimizerMenuComponent } from './factory-optimizer-menu/factory-optimizer-menu.component';
import { FactoryOptimizerControlsComponent } from './factory-optimizer-controls/factory-optimizer-controls.component';
import { ProductionLineComponent } from './production-line/production-line.component';
import { ProductionLineLevelComponent } from './production-line-level/production-line-level.component';
import {ComponentModule} from "../component/component.module";



@NgModule({
  declarations: [FactoryOptimizerMenuComponent, FactoryOptimizerControlsComponent, ProductionLineComponent, ProductionLineLevelComponent],
  imports: [
    CommonModule,
    ComponentModule
  ]
})
export class FactoryOptimizerModule { }

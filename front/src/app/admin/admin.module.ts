import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ProductionAdminComponent } from './production-admin/production-admin.component';
import {RouterModule} from "@angular/router";
import {ProductionModule} from "../production/production.module";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSidenavModule} from "@angular/material/sidenav";
import { RecipeAdminComponent } from './recipe-admin/recipe-admin.component';
import {RecipeModule} from "../recipe/recipe.module";
import { ComponentAdminComponent } from './component-admin/component-admin.component';
import {ComponentModule} from "../component/component.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [AdminPanelComponent, ProductionAdminComponent, RecipeAdminComponent, ComponentAdminComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProductionModule,
    MatTabsModule,
    MatSidenavModule,
    RecipeModule,
    ComponentModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class AdminModule { }

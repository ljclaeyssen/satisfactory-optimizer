import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminPanelComponent} from "./admin/admin-panel/admin-panel.component";
import {ProductionAdminComponent} from "./admin/production-admin/production-admin.component";
import {RecipeAdminComponent} from "./admin/recipe-admin/recipe-admin.component";
import {ComponentAdminComponent} from "./admin/component-admin/component-admin.component";
import {FactoryOptimizerMenuComponent} from "./factory-optimizer/factory-optimizer-menu/factory-optimizer-menu.component";
import {FactoryOptimizerControlsComponent} from "./factory-optimizer/factory-optimizer-controls/factory-optimizer-controls.component";


const routes: Routes = [
  {
    path: 'overall',
    component: AdminPanelComponent,
    children: [
      {
        path: 'production',
        component: ProductionAdminComponent,
      },
      {
        path: 'recipe',
        component: RecipeAdminComponent,
      },
      {
        path: 'component',
        component: ComponentAdminComponent,
      },
    ],
  },
  {
    path: 'optimizer',
    component: FactoryOptimizerMenuComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

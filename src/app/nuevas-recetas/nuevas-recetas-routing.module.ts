import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevasRecetasPage } from './nuevas-recetas.page';

const routes: Routes = [
  {
    path: '',
    component: NuevasRecetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevasRecetasPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevasRecetasPageRoutingModule } from './nuevas-recetas-routing.module';

import { NuevasRecetasPage } from './nuevas-recetas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevasRecetasPageRoutingModule
  ],
  declarations: [NuevasRecetasPage]
})
export class NuevasRecetasPageModule {}

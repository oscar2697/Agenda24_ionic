import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevousuPageRoutingModule } from './nuevousu-routing.module';

import { NuevousuPage } from './nuevousu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevousuPageRoutingModule
  ],
  declarations: [NuevousuPage]
})
export class NuevousuPageModule {}

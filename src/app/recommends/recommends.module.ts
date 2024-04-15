import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecommendsPageRoutingModule } from './recommends-routing.module';

import { RecommendsPage } from './recommends.page';
import { FavoritesPageModule } from '../favorites/favorites.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommendsPageRoutingModule,
    FavoritesPageModule
  ],
  declarations: [RecommendsPage]
})
export class RecommendsPageModule {}

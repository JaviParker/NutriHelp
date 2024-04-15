import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientsPageRoutingModule } from './ingredients-routing.module';

import { IngredientsPage } from './ingredients.page';
import { FavoritesPageModule } from '../favorites/favorites.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngredientsPageRoutingModule,
    FavoritesPageModule
  ],
  declarations: [IngredientsPage]
})
export class IngredientsPageModule {}

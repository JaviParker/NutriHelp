import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ByCategoryPageRoutingModule } from './by-category-routing.module';

import { ByCategoryPage } from './by-category.page';
import { FavoritesPageModule } from '../favorites/favorites.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ByCategoryPageRoutingModule,
    FavoritesPageModule
  ],
  declarations: [ByCategoryPage]
})
export class ByCategoryPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: "categories",
        // loadChildren: '../categories/categories.module#categoriesPageModule'
        loadChildren: () => import('../categories/categories.module').then( m => m.CategoriesPageModule)
      },
      {
        path: "profile",
        // loadChildren: '../categories/categories.module#categoriesPageModule'
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: "favorites",
        loadChildren: () => import('../favorites/favorites.module').then( m => m.FavoritesPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

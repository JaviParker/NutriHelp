import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendsPage } from './recommends.page';

const routes: Routes = [
  {
    path: '',
    component: RecommendsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommendsPageRoutingModule {}

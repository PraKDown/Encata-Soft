import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';

import { CardsComponent } from '../../components/cards/cards.component';
import { ItemCardComponent } from '../../components/cards/item-card/item-card.component';

const childrenRoutes: Routes = [
  { path: 'params/:id', component: ItemCardComponent },
];

const routes: Routes = [
  { path: '', component: CardsComponent, children: childrenRoutes }
];



@NgModule({
  declarations: [
    CardsComponent,
    ItemCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class CardsModule { }

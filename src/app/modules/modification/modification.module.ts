import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatSliderModule,
  MatButtonToggleModule, MatRadioModule } from '@angular/material';

import { ModificationComponent } from '../../components/modification/modification.component';
import { SizeComponent } from '../../components/modification/size/size.component';
import { ColorComponent } from '../../components/modification/color/color.component';
import { StyleComponent } from '../../components/modification/style/style.component';

const routes: Routes = [
  { path: '', component: ModificationComponent }
];

@NgModule({
  declarations: [
    ModificationComponent,
    SizeComponent,
    ColorComponent,
    StyleComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatRadioModule,
    RouterModule.forChild(routes)
  ]
})
export class ModificationModule { }

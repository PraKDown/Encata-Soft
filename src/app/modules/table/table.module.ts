import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from '../../components/table/table.component';

const routes: Routes = [
  { path: '', component: TableComponent}
];

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ],
  bootstrap: []
})
export class TableModule { }

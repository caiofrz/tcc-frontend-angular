import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from 'src/app/components/table/table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { BreadcrumbService } from 'xng-breadcrumb';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [RoomsComponent, TableComponent],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    BreadcrumbModule,
    MatButtonModule
  ],
  providers: [BreadcrumbService],
})
export class RoomsModule {}

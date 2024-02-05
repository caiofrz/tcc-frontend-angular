import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { TableComponent } from 'src/app/components/table/table.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { BreadcrumbService } from 'xng-breadcrumb';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from '../../shared/modules/app-material/app-material.module';

@NgModule({
  declarations: [RoomsComponent, TableComponent],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    HttpClientModule,
    BreadcrumbModule,
    AppMaterialModule
  ],
  providers: [BreadcrumbService],
})
export class RoomsModule {}

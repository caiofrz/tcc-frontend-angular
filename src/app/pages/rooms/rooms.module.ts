import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [RoomsComponent],
  imports: [CommonModule, RoomsRoutingModule, MatTableModule, MatPaginatorModule],
})
export class RoomsModule {}

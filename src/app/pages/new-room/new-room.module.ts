import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoomRoutingModule } from './new-room-routing.module';
import { NewRoomComponent } from './new-room.component';
import { AppMaterialModule } from '../../shared/modules/app-material/app-material.module';
import { RoomFormComponent } from 'src/app/components/forms/room-form/room-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { BreadcrumbService } from 'xng-breadcrumb';
@NgModule({
  declarations: [NewRoomComponent, RoomFormComponent],
  imports: [
    CommonModule,
    NewRoomRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule
  ],
  providers: [BreadcrumbService]
})
export class NewRoomModule {}

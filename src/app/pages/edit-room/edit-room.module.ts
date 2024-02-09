import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoomRoutingModule } from './edit-room-routing.module';
import { EditRoomComponent } from './edit-room.component';
import { AppMaterialModule } from '../../shared/modules/app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ComponentsModule } from '../../shared/modules/components/components.module';
@NgModule({
  declarations: [EditRoomComponent],
  imports: [
    CommonModule,
    EditRoomRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    ComponentsModule,
  ],
  providers: [BreadcrumbService],
})
export class EditRoomModule {}

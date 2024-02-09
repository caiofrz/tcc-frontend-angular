import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoomRoutingModule } from './new-room-routing.module';
import { NewRoomComponent } from './new-room.component';
import { AppMaterialModule } from '../../shared/modules/app-material/app-material.module';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ComponentsModule } from '../../shared/modules/components/components.module';

@NgModule({
  declarations: [NewRoomComponent],
  imports: [
    CommonModule,
    NewRoomRoutingModule,
    AppMaterialModule,
    BreadcrumbModule,
    ComponentsModule
  ],
  providers: [BreadcrumbService]
})
export class NewRoomModule {}

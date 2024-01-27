import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoomRoutingModule } from './new-room-routing.module';
import { NewRoomComponent } from './new-room.component';


@NgModule({
  declarations: [
    NewRoomComponent
  ],
  imports: [
    CommonModule,
    NewRoomRoutingModule
  ]
})
export class NewRoomModule { }

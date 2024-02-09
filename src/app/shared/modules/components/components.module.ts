import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomFormComponent } from '../../../components/forms/room-form/room-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../../shared/modules/app-material/app-material.module';

@NgModule({
  declarations: [RoomFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AppMaterialModule],
  exports: [RoomFormComponent],
})
export class ComponentsModule {}

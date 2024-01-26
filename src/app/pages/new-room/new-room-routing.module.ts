import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRoomComponent } from './new-room.component';

const routes: Routes = [{ path: '', component: NewRoomComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRoomRoutingModule { }

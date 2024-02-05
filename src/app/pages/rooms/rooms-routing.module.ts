import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
  },
  {
    path: 'novo',
    loadChildren: () =>
      import('../new-room/new-room.module').then((m) => m.NewRoomModule),
      data: { breadcrumb: 'Cadastrar quarto' },

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}

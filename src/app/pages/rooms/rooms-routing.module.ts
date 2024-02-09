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
  {
    path: 'atualizar/:id',
    loadChildren: () =>
      import('../edit-room/edit-room.module').then((m) => m.EditRoomModule),
    data: { breadcrumb: 'Atualizar cadastro' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
